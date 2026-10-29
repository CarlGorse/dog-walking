import SectionHeading from "./section-heading";

export default function PartTimeSection() {
  return (
    <section className="bg-amber-100 py-12 text-stone-900 sm:py-16">
      <div className="content-container">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-5xl shadow-sm ring-1 ring-amber-300"
            aria-hidden="true"
          >
            🌱
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
