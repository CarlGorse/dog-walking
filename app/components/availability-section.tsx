import SectionHeading from "./section-heading";
import AlfieIcon from "../alfie-icon";

const availability = [
  {
    title: "Morning group walks",
    icon: "🌅",
    times: "Friday and Saturday",
    price: "£16",
    walkTime: "Approx 2 hours walking",
    pickupTime: "Pickups from 08:00, returns from 11:30",
  },
  {
    title: "Afternoon group walks",
    icon: "☀️",
    times: "Friday and Saturday",
    price: "£16",
    walkTime: "Approx 2 hours walking",
    pickupTime: "Pickups from 12:30, returns from 16:00",
  },
  {
    title: "Evening solo walks",
    icon: "🌙",
    price: "£12",
    unit: "for the first hour *",
    extraDetail: "then £4 per half hour after",
    times: "Any day",
    window: "Between 17:30 and 21:00",
    footnote: "* from when we leave your place",
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
        <div className="mt-4 flex max-w-2xl items-start gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3">
          <AlfieIcon className="mt-1 h-8 w-8 shrink-0" />
          <p className="text-sm leading-6 text-stone-700">
            <span className="font-bold text-amber-900">For now,</span> we run
            Out and About part-time, with group walks on Fridays and Saturdays.
            Looking for a different day? Evening solo walks are available every
            day, and we will add more group days as we grow.
          </p>
        </div>
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {availability.map((slot) => (
            <div
              key={slot.title}
              className="content-card border-amber-200 bg-gradient-to-br from-white to-amber-50 transition-shadow hover:shadow-lg xl:row-span-5 xl:grid xl:grid-rows-subgrid xl:gap-y-0"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl"
                  aria-hidden="true"
                >
                  {slot.icon}
                </span>
                <p className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.1em] text-amber-800">
                  {slot.title}
                </p>
              </div>
              <h3 className="mt-4 text-2xl font-black text-stone-900">
                {slot.times}
              </h3>
              <div className="mt-2">
                <p className="flex items-baseline gap-2 leading-none">
                  <span className="text-4xl font-black text-emerald-700">
                    {slot.price}
                  </span>
                  {slot.unit && (
                    <span className="text-base font-bold text-emerald-700">
                      {slot.unit}
                    </span>
                  )}
                </p>
                {slot.extraDetail && (
                  <p className="text-sm font-medium leading-6 text-emerald-800/80">
                    {slot.extraDetail}
                  </p>
                )}
              </div>
              <div className="mt-4 space-y-1.5 border-t border-amber-200 pt-4 text-sm font-medium text-stone-600">
                {slot.pickupTime && <p>{slot.pickupTime}</p>}
                {slot.window && <p>{slot.window}</p>}
                {slot.walkTime && <p>{slot.walkTime}</p>}
                {slot.footnote && <p>{slot.footnote}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
