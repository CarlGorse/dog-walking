import Link from "next/link";
import SectionHeading from "./section-heading";

const availability = [
  {
    period: "Morning",
    title: "Long country walk",
    icon: "🌅",
    times: "Friday and Saturday",
    price: "£20",
    priceNote: "Reduced price when we have a group",
    duration: "2 hours",
    durationDetails: "of walking, plus travel time.",
    pickupTime: "Pickup time from 08:00, return time from 11:30",
    note: "Up to 3 dogs per walk",
    householdNote: "Dogs may be from different households",
  },
  {
    period: "Afternoon",
    title: "Long country walk",
    icon: "☀️",
    times: "Friday and Saturday",
    price: "£20",
    priceNote: "Reduced price when we have a group",
    duration: "2 hours",
    durationDetails: "of walking, plus travel time.",
    pickupTime: "Pickup time from 12:30, return time from 16:00",
    note: "Up to 3 dogs per walk",
    householdNote: "Dogs may be from different households",
  },
  {
    period: "Evening",
    title: "Short local walk",
    icon: "🌙",
    price: "£12",
    priceNote: "Reduced price when we have a group",
    times: "Any evening",
    days: "(Mon to Sun)",
    window: "Between 17:30 and 21:00",
    note: "Up to 2 dogs per walk",
    householdNote: "Dogs may be from different households",
    duration: "1 hour",
    durationDetails: "of walking.",
  },
];

export default function AvailabilitySection() {
  return (
    <section id="availability" className="bg-white py-20 text-stone-900">
      <div className="content-container">
        <SectionHeading
          eyebrow="Walks and prices"
          title="Find a walk and time that works for you."
        />
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-emerald-900 px-5 py-4 text-white">
          <span className="text-2xl" aria-hidden="true">
            ❄️
          </span>
          <p className="text-xl font-black sm:text-2xl">Winter schedule</p>
          <p className="text-sm font-medium text-emerald-100">
            Now until the end of March. A spring and summer schedule will
            follow.
          </p>
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          {availability.map((slot) => (
            <div
              key={slot.period ?? slot.title}
              className="content-card border-amber-200 bg-gradient-to-br from-white to-amber-50 transition-shadow hover:shadow-lg xl:row-span-5 xl:grid xl:grid-rows-subgrid xl:gap-y-0"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl"
                  aria-hidden="true"
                >
                  {slot.icon}
                </span>
                <div>
                  {slot.period && (
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-amber-800">
                      {slot.period}
                    </p>
                  )}
                  <p
                    className={
                      slot.period
                        ? "text-base font-semibold text-stone-600"
                        : "text-sm font-bold uppercase tracking-[0.1em] text-amber-800"
                    }
                  >
                    {slot.title}
                  </p>
                </div>
              </div>
              <h3 className="mt-4 text-2xl font-black text-stone-900">
                {slot.times}
                {slot.days && (
                  <span className="text-base font-semibold"> {slot.days}</span>
                )}
              </h3>
              <div className="mt-2">
                <p className="leading-none">
                  <span className="text-4xl font-black text-emerald-700">
                    {slot.price}
                  </span>
                </p>
                {slot.priceNote && (
                  <p className="mt-1 text-sm font-bold text-emerald-800">
                    {slot.priceNote}
                  </p>
                )}
              </div>
              <ul className="mt-4 list-disc space-y-3 border-t border-amber-200 pt-4 pl-5 text-sm font-medium text-stone-600 marker:text-amber-500">
                {slot.duration && (
                  <li>
                    Around{" "}
                    <span className="rounded-md bg-amber-100 px-2 py-1 font-bold text-amber-900">
                      {slot.duration}
                    </span>{" "}
                    {slot.durationDetails}
                  </li>
                )}
                {slot.note && <li>{slot.note}</li>}
                {slot.householdNote && <li>{slot.householdNote}</li>}
                {slot.pickupTime && <li>{slot.pickupTime}</li>}
                {slot.window && <li>{slot.window}</li>}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-medium text-stone-700">
          Want more details? Have a read of our{" "}
          <Link
            href="/faqs"
            className="font-bold text-emerald-800 underline underline-offset-4 hover:text-emerald-600"
          >
            FAQs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
