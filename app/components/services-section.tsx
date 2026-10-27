import Link from "next/link";
import SectionHeading from "./section-heading";

const services = [
  {
    title: "Group and solo walks",
    description:
      "Friendly small groups, or a dedicated walk focused entirely on your dog.",
    icon: "🐾",
  },
  {
    title: "Collection and return",
    description:
      "We collect your dog from home and bring them back, using a spare key if you need us to.",
    icon: "🔑",
  },
  {
    title: "Transport",
    description:
      "Your dog travels in our dedicated van, with a secure, comfortable space of their own.",
    icon: "🚐",
  },
  {
    title: "Safety and tracking",
    description: "Secure transport and tracking while your dog is out.",
    icon: "🛡️",
  },
  {
    title: "Clean paws",
    description: "A freshen-up before your dog comes home.",
    icon: "🛁",
  },
  {
    title: "Walking preferences",
    description: "On lead or off lead, whichever suits you and your dog best.",
    icon: "🪢",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#e9e0cf] py-16 text-stone-900 sm:py-20"
    >
      <div className="content-container">
        <SectionHeading
          eyebrow="What we offer"
          title="Great service is our thing, for dogs and their owners."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="content-card flex items-start gap-4"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-black text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-1 text-base leading-6 text-stone-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-medium text-stone-700">
          Want the full details? Have a read of our{" "}
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
