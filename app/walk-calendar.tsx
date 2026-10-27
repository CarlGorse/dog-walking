'use client';

import { useEffect, useRef, useState, type TouchEvent } from "react";
import SectionHeading from "./components/section-heading";
import AlfieIcon from "./alfie-icon";

const maxGroupDogs = 3;
const calendarEndDate = new Date(Date.UTC(2027, 0, 31));
const calendarEndDateKey = calendarEndDate.toISOString().slice(0, 10);
const calendarEndDateLabel = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(calendarEndDate);

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type SlotAvailability = {
  available: number;
  taken: number;
};

type Availability = Record<string, SlotAvailability>;

const getWeekStart = (date: Date) => {
  const weekStart = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const daysSinceFriday = (weekStart.getUTCDay() + 2) % 7;
  weekStart.setUTCDate(weekStart.getUTCDate() - daysSinceFriday);
  return weekStart;
};

const calendarEndWeekStart = getWeekStart(calendarEndDate);

const getCurrentWeekStart = () => getWeekStart(new Date());

const parseAvailability = (contents: string): Availability => {
  const availability: Availability = {};

  for (const line of contents.split(/\r?\n/)) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith("#")) continue;

    const [date, slot, availableText, takenText] = trimmedLine.split("|").map((value) => value.trim());
    if (!date || !slot) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    if (!["morning", "afternoon", "evening"].includes(slot)) continue;
    // Evening solo walks are booked out by the row alone, so the numbers are optional.
    const isEveningRow = slot === "evening";
    if (!isEveningRow && (availableText === undefined || takenText === undefined)) continue;
    if (!isEveningRow && (!/^\d+$/.test(availableText) || !/^\d+$/.test(takenText))) continue;

    const parsedDate = new Date(`${date}T00:00:00Z`);
    if (Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== date) continue;

    availability[`${date}|${slot}`] = isEveningRow
      ? { available: 0, taken: 0 }
      : { available: Number(availableText), taken: Number(takenText) };
  }

  return availability;
};

const getWalkSlots = (date: Date) => {
  const isWeekendWalkDay = [0, 5, 6].includes(date.getUTCDay());
  const weekendSlots = [
    { key: "morning", label: "Morning", time: "07:30–11:30", type: "Group walk" },
    { key: "afternoon", label: "Afternoon", time: "12:00–16:30", type: "Group walk" },
    { key: "evening", label: "Evening", time: "17:00–20:00", type: "Solo walk" },
  ] as const;

  return isWeekendWalkDay
    ? weekendSlots
    : [{ key: "evening", label: "Evening", time: "17:00–20:00", type: "Solo walk" }] as const;
};

// Walks run on UK time, so "now" is read in that zone whatever the visitor's device says.
const getUkNow = () => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(new Date())
      .map((part) => [part.type, part.value]),
  );
  return { date: `${parts.year}-${parts.month}-${parts.day}`, minutes: Number(parts.hour) * 60 + Number(parts.minute) };
};

const getSlotStartMinutes = (time: string) => {
  const [hours, minutes] = time.slice(0, 5).split(":").map(Number);
  return hours * 60 + minutes;
};

export default function WalkCalendar() {
  const [weekStart, setWeekStart] = useState<Date | null>(null);
  const [now, setNow] = useState<{ date: string; minutes: number } | null>(null);
  const [availability, setAvailability] = useState<Availability>({});
  const [availabilityLastUpdated, setAvailabilityLastUpdated] = useState<Date | null>(null);
  const [availabilityLoaded, setAvailabilityLoaded] = useState(false);
  const [availabilityError, setAvailabilityError] = useState(false);

  useEffect(() => {
    let isActive = true;

    // Deferred to the client so the current date isn't baked into the prerender.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWeekStart(getCurrentWeekStart());
    setNow(getUkNow());
    const clock = setInterval(() => setNow(getUkNow()), 60_000);

    fetch("/api/availability", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Could not load walk availability.");
        return response.json() as Promise<{ contents: string; lastUpdated: string }>;
      })
      .then(({ contents, lastUpdated }) => {
        const parsedLastUpdated = new Date(lastUpdated);
        if (!contents || Number.isNaN(parsedLastUpdated.getTime())) {
          throw new Error("Walk availability response is invalid.");
        }
        if (isActive) {
          setAvailability(parseAvailability(contents));
          setAvailabilityLastUpdated(parsedLastUpdated);
        }
      })
      .catch(() => {
        if (isActive) setAvailabilityError(true);
      })
      .finally(() => {
        if (isActive) setAvailabilityLoaded(true);
      });

    return () => {
      isActive = false;
      clearInterval(clock);
    };
  }, []);

  const isCurrentWeek = !!weekStart && weekStart.getTime() <= getCurrentWeekStart().getTime();
  const isLastWeek = !!weekStart && weekStart.getTime() >= calendarEndWeekStart.getTime();

  const changeWeek = (offset: number) => {
    setWeekStart((currentWeek) => {
      if (!currentWeek) return currentWeek;
      if (offset < 0 && currentWeek.getTime() <= getCurrentWeekStart().getTime()) return currentWeek;
      const nextWeek = new Date(Date.UTC(
        currentWeek.getUTCFullYear(),
        currentWeek.getUTCMonth(),
        currentWeek.getUTCDate() + offset * 7,
      ));
      if (offset > 0 && nextWeek.getTime() > calendarEndWeekStart.getTime()) return currentWeek;
      return nextWeek;
    });
  };

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !weekStart) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    // Only treat clearly horizontal swipes as navigation so normal scrolling still works.
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    changeWeek(dx < 0 ? 1 : -1);
  };

  const weekEnd = weekStart && new Date(Date.UTC(
    weekStart.getUTCFullYear(),
    weekStart.getUTCMonth(),
    weekStart.getUTCDate() + 6,
  ));
  const displayedWeekEnd = weekEnd && (weekEnd > calendarEndDate ? calendarEndDate : weekEnd);
  const formatDate = (date: Date) => `${date.getUTCDate()} ${months[date.getUTCMonth()]}`;
  const availabilityLastUpdatedLabel = availabilityLastUpdated
    ? new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/London",
      hourCycle: "h23",
    }).format(availabilityLastUpdated)
    : null;
  const weekLabel = weekStart && displayedWeekEnd
    ? `${formatDate(weekStart)} – ${formatDate(displayedWeekEnd)} ${displayedWeekEnd.getUTCFullYear()}`
    : "Loading week…";
  const upcomingDays = weekStart && now
    ? Array.from({ length: 7 }, (_, index) =>
      new Date(Date.UTC(weekStart.getUTCFullYear(), weekStart.getUTCMonth(), weekStart.getUTCDate() + index)),
    )
      .map((date) => {
        const dateKey = date.toISOString().slice(0, 10);
        const slots = getWalkSlots(date).filter((slot) =>
          dateKey > now.date || (dateKey === now.date && getSlotStartMinutes(slot.time) > now.minutes),
        );
        return { date, dateKey, slots };
      })
      .filter(({ dateKey }) => dateKey <= calendarEndDateKey)
    : [];
  return (
    <section id="availability" className="bg-amber-100 py-20 text-stone-900">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8">
          <SectionHeading eyebrow="Availability" title="Days, times and spaces." />
          {availabilityLastUpdatedLabel && (
            <p className="mt-3 max-w-2xl text-sm text-stone-600">
              Bookings up-to-date as of: {availabilityLastUpdatedLabel}
            </p>
          )}
          <p className="mt-3 max-w-2xl text-stone-700">
            We&apos;re currently taking bookings up to {calendarEndDateLabel} and will extend the calendar as we get closer.
          </p>
        </div>

        <div className="rounded-[2rem] border border-emerald-900 bg-emerald-900 p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-center gap-3 sm:justify-between">
            <span className="hidden sm:flex">
              <ChevronButton direction="previous" onClick={() => changeWeek(-1)} disabled={!weekStart || isCurrentWeek} />
            </span>
            <h3 aria-live="polite" className="whitespace-nowrap text-center text-base font-black text-white sm:text-2xl">{weekLabel}</h3>
            <span className="hidden sm:flex">
              <ChevronButton direction="next" onClick={() => changeWeek(1)} disabled={!weekStart || isLastWeek} />
            </span>
          </div>


          {availabilityError && (
            <p role="alert" className="mb-5 text-sm font-medium text-red-200">
              Could not load walk availability. Please try again later.
            </p>
          )}

          <p className="mb-4 text-center text-sm font-medium text-emerald-100 sm:hidden">
            Swipe left or right to change period
          </p>

          <div className="relative">
            <div className="pointer-events-none sticky top-[45vh] z-10 -mx-8 flex h-0 items-center justify-between sm:hidden">
              <ChevronButton direction="previous" onClick={() => changeWeek(-1)} disabled={!weekStart || isCurrentWeek} floating />
              <ChevronButton direction="next" onClick={() => changeWeek(1)} disabled={!weekStart || isLastWeek} floating />
            </div>
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {upcomingDays.map(({ date, dateKey, slots }) => {
                const dayLabel = weekdays[date.getUTCDay()];

                // Past days keep an empty spot on wider screens so the other cards don't move.
                if (slots.length === 0) {
                  return <div key={date.toISOString()} aria-hidden="true" className="hidden sm:block" />;
                }

                return (
                  <article key={date.toISOString()} className="overflow-hidden rounded-[2rem] border border-amber-200 bg-white p-5 shadow-md flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">{dayLabel}</p>
                        <h4 className="mt-1 text-3xl font-black text-stone-900">
                          {date.getUTCDate()} <span className="text-xl">{months[date.getUTCMonth()]}</span>
                        </h4>
                      </div>
                    </div>

                    <div className="mt-auto space-y-3 pt-5">
                      {slots.map((slot) => {
                        const slotAvailability = availability[`${dateKey}|${slot.key}`];
                        const isAvailable = slotAvailability
                          ? slot.key !== "evening" && slotAvailability.available > 0
                          : true;
                        const taken = Math.min(slotAvailability?.taken ?? 0, maxGroupDogs);
                        const status = !availabilityLoaded
                          ? "Loading"
                          : availabilityError
                            ? "Unavailable"
                            : slot.type === "Group walk" && slotAvailability
                              ? slotAvailability.available > 0
                                ? `${slotAvailability.available} ${slotAvailability.available === 1 ? "space" : "spaces"} available`
                                : "No spaces available"
                              : isAvailable
                                ? "Available"
                                : "Busy";
                        const statusColor = !availabilityLoaded || availabilityError
                          ? "bg-stone-100 text-stone-600"
                          : isAvailable
                            ? "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-300"
                            : "bg-amber-200 text-amber-900 ring-1 ring-amber-400";

                        return (
                          <div key={slot.label} className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-bold text-stone-800">{slot.label}</span>
                              <span className="whitespace-nowrap text-xs font-medium text-stone-500">{slot.time}</span>
                            </div>
                            <p className="mt-1 text-xs font-medium text-stone-500">{slot.type}</p>
                            <div className="mt-4 flex h-9 items-center">
                              {slot.type === "Group walk" && availabilityLoaded && !availabilityError ? (
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                  <div
                                    className="flex items-center gap-1.5"
                                    role="img"
                                    aria-label={`${taken} of ${maxGroupDogs} spaces taken, ${maxGroupDogs - taken} available`}
                                  >
                                    {Array.from({ length: maxGroupDogs }, (_, index) => (
                                      <AlfieIcon
                                        key={index}
                                        className={`h-9 w-9 ${index < taken ? "opacity-40 grayscale" : ""}`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-xs font-bold text-stone-600">
                                    {maxGroupDogs - taken === 0
                                      ? "No spaces available"
                                      : `${maxGroupDogs - taken} ${maxGroupDogs - taken === 1 ? "space" : "spaces"} available`}
                                  </span>
                                </div>
                              ) : (
                                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${statusColor}`}>
                                  {status}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronButton({
  direction,
  onClick,
  disabled,
  floating = false,
}: {
  direction: "previous" | "next";
  onClick: () => void;
  disabled: boolean;
  floating?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`Go to ${direction} period`}
      className={`flex shrink-0 items-center justify-center rounded-full bg-white text-emerald-900 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-50 ${floating ? "pointer-events-auto h-10 w-10 shadow-lg ring-2 ring-emerald-900/20" : "h-11 w-11"
        }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={direction === "previous" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}
