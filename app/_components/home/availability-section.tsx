import Link from "next/link";
import SectionHeading from "../shared/section-heading";

type AvailabilityIconName = "sunrise" | "sun" | "moon" | "snowflake";

type AvailabilitySlot = {
  period?: string;
  title: string;
  icon: AvailabilityIconName;
  times: string;
  price: string;
  priceNote?: string;
  duration?: string;
  durationDetails?: string;
  pickupTime?: string;
  note?: string;
  householdNote?: string;
  days?: string;
  window?: string;
};

// Original icons: 🌅 ☀️ 🌙 ❄️
const availability: AvailabilitySlot[] = [
  {
    period: "Morning",
    title: "Long country walk",
    icon: "sunrise",
    times: "Friday and Saturday",
    price: "£20",
    priceNote: "Reduced price when we have a group",
    duration: "2 hours",
    durationDetails: "of walking, plus travel time.",
    pickupTime: "Pickup time from 08:00, return time from 11:30",
    note: "Up to 3 dogs per walk",
    householdNote: "Dogs may be placed from different households",
  },
  {
    period: "Afternoon",
    title: "Long country walk",
    icon: "sun",
    times: "Friday and Saturday",
    price: "£20",
    priceNote: "Reduced price when we have a group",
    duration: "2 hours",
    durationDetails: "of walking, plus travel time.",
    pickupTime: "Pickup time from 12:30, return time from 16:00",
    note: "Up to 3 dogs per walk",
    householdNote: "Dogs may be placed from different households",
  },
  {
    period: "Evening",
    title: "Short local walk",
    icon: "moon",
    price: "£12",
    priceNote: "Reduced price when we have a group",
    times: "Any evening",
    days: "(Mon to Sun)",
    window: "Between 17:30 and 21:00",
    note: "Up to 2 dogs per walk",
    householdNote: "Dogs may be placed from different households",
    duration: "1 hour",
    durationDetails: "of walking.",
  },
];

function AvailabilityIcon({
  name,
  className,
}: {
  name: AvailabilityIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      {name === "sunrise" && (
        <g>
          <path d="M7 34.5c5.4-.7 10.9-.9 16.8-.7 6.2-.3 11.9-.1 17.2.7" stroke="#587b91" />
          <path d="M12 39c7.5-.6 15.7-.7 24 0" stroke="#587b91" strokeWidth="1.5" />
          <path d="M15.5 31.7a8.6 8.6 0 0 1 17.1 0" fill="#f3d37b" stroke="#b36b32" />
          <path d="M24 7.5v5m-11.7-.1 3.2 3.4m20.2-3.4-3.2 3.5M7.3 22.2l4.6 1.4m28.7-1.4L36 23.6M24 19v3m-7.5-.1 2.2 2.3m12.8-2.3-2.2 2.3" stroke="#b36b32" strokeWidth="1.8" />
          <path d="M9 29.5c2.4.4 4.3.4 6.2.1m17.5 0c2 .3 4 .3 6.3-.1" stroke="#587b91" strokeWidth="1.4" />
        </g>
      )}
      {name === "sun" && (
        <g>
          <path d="M24 4v5m0 30v5M4 24h5m30 0h5M9.8 9.8l3.6 3.6m21.2 21.2 3.6 3.6m0-28.4-3.6 3.6M13.4 34.6l-3.6 3.6" stroke="#b36b32" strokeWidth="2.6" />
          <circle cx="24" cy="24" r="13.2" fill="#f3d37b" stroke="#b36b32" strokeWidth="2.6" />
          <circle cx="24" cy="24" r="9.3" stroke="#fff0bd" strokeWidth="1.5" />
          <path d="M19.2 20.1c1.4-1.1 2.8-1.6 4.3-1.5m5.4 7.8c-.8 2.1-2.2 3.5-4.2 4.1" stroke="#b36b32" strokeWidth="1.4" />
        </g>
      )}
      {name === "moon" && (
        <g>
          <path
            d="M29.5 8.8c-5.2 2.5-8.4 7.8-8.1 13.8.4 7.3 6.4 13 13.7 13.1-2.8 3.7-7.3 6-12.1 5.7C14.3 40.9 7.7 33.6 8.2 25c.5-8.5 7.8-15.1 16.4-14.6 1.7.1 3.4.6 4.9 1.3Z"
            fill="#f3d37b"
            stroke="#b36b32"
          />
          <path d="M12.5 31.7c1.9 3.2 5.1 5.2 8.8 5.6m-1.1-24.1c-3.6 1.2-6.2 3.8-7.5 7.1" stroke="#fff0bd" strokeWidth="1.6" />
          <path d="m35 9 1 2.4 2.5.2-1.9 1.6.6 2.4-2.2-1.3-2.1 1.3.5-2.4-1.9-1.6 2.5-.2L35 9Zm5 10 .6 1.6 1.7.1-1.3 1.1.4 1.6-1.4-.9-1.4.9.3-1.6-1.2-1.1 1.6-.1.7-1.6Z" fill="#f3d37b" stroke="#b36b32" strokeWidth="1.3" />
        </g>
      )}
      {name === "snowflake" && (
        <g stroke="#54baf2">
          <path
            d="M25.2 24.7Q24 17.3 20.8 12.1T19.1 3.7M25.2 24.7Q15.1 21.6 5.4 16.4M25.2 24.7Q34.9 29.7 43.2 30.2"
            strokeWidth="2.7"
          />
          <path
            d="M25.2 24.7Q28.6 17.2 38 10.3M25.2 24.7Q18.9 28.2 14.8 33.5T7 38.9M25.2 24.7Q24.8 31.4 27.7 38T28.4 43.8"
            strokeWidth="2.1"
          />
          <path
            d="M13.9 8.9Q17.5 9.8 20.8 12.1q1.9-3 4.1-5.3M10.1 12.4q.3 2.9 3.4 7.9l-6.4 2.5M31.1 11.1q1.3 1.7.6 4.7l6.3-.4M10.2 31.2q2.9 0 5.9.8l.2 5.9M21.4 38.9q2.1-3 5.2-4.2 2.1 1.2 5.4 1.6M37 22.4q-.2 3.8-3.8 5.4 2.7 3.1 3.5 6.3"
            strokeWidth="1.7"
          />
          <path
            d="M15 14.5l.8 1.4m13.8-7.7.3-1.7m9.7 30 .9 1.1M17.5 42l1.6-.9"
            stroke="#b9e7fb"
            strokeWidth="1.4"
          />
        </g>
      )}
    </svg>
  );
}

export default function AvailabilitySection() {
  return (
    <section id="availability" className="bg-white py-20 text-stone-900">
      <div className="content-container">
        <SectionHeading
          eyebrow="Walks and prices"
          title="Find a walk and time that works for you."
        />
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-brand-green-900 px-5 py-4 text-white">
          <AvailabilityIcon name="snowflake" className="h-10 w-10 shrink-0" />
          <p className="text-xl font-black sm:text-2xl">Winter schedule</p>
          <p className="text-sm font-medium text-brand-green-100">
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
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100"
                  aria-hidden="true"
                >
                  <AvailabilityIcon
                    name={slot.icon}
                    className="h-14 w-14 overflow-visible"
                  />
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
                  <span className="text-4xl font-black text-brand-green-700">
                    {slot.price}
                  </span>
                </p>
                {slot.priceNote && (
                  <p className="mt-1 text-sm font-bold text-brand-green-800">
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
            className="font-bold text-brand-green-800 underline underline-offset-4 hover:text-brand-green-600"
          >
            FAQs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
