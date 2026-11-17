import SectionHeading from "../shared/section-heading";

export default function PartTimeSection() {
  return (
    <section className="bg-amber-100 py-12 text-stone-900 sm:py-16">
      <div className="content-container">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-amber-300"
            aria-hidden="true"
          >
            {/* Original icon: 🌱 */}
            <svg
              viewBox="12 10 40 44"
              className="h-18 w-18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path
                d="M32 48c-.7-8 .4-15.5 2.4-22.1"
                className="text-brand-green-800"
              />
              <path
                d="M33.4 30.5C22.8 30.8 17.1 24.9 18 15.7c9.1-1 16.7 3.8 16.4 14.8"
                fill="#dce8c6"
                className="text-brand-green-800"
              />
              <path
                d="M34.3 25.9c1.8-9 8.2-13.6 16.8-11.7 1.1 8.8-4.1 14.7-15.1 14.2"
                fill="#dce8c6"
                className="text-brand-green-800"
              />
              <path
                d="M32.1 47.8c-5.8-.7-10.4-2.5-13.5-5.2m13.4 5.2c4.8-.8 9.2-2.5 13.4-5.1"
                className="text-amber-700"
              />
              <path
                d="M16.5 49.2c4.7-2.1 10-2.9 15.6-2.5 5.9-.5 11.1.3 15.7 2.5"
                className="text-amber-700"
              />
              <path
                d="M21 51.8c6.9 1.1 14.9 1.1 22-.1"
                className="text-amber-700"
                strokeWidth="1.7"
              />
              <path
                d="M23.5 29.5c2.8 1.3 5.5 1.8 8.4 1.7m5.1-5.6c2.7.2 5.2-.4 7.5-1.6"
                className="text-brand-green-700"
                strokeWidth="1.3"
              />
            </svg>
          </span>
          <div>
            <SectionHeading
              eyebrow="Good to know"
              title="New, and part-time for now."
            />
            <div className="mt-4 max-w-2xl space-y-3 text-lg leading-8 text-stone-700">
              <p>
                Out and About is a new venture, and we’re starting small, with
                part-time walks on Fridays and weekends. We’d love to grow and
                open up more slots as more people use the service.
              </p>
              <p>
                You don’t need to book a regular slot. Just message us when you
                need a walk, as far ahead as you like, or ideally the day before at the latest. If you’d prefer a regular
                spot, we’re happy to arrange that too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
