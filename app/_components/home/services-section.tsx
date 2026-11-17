import Link from "next/link";
import SectionHeading from "../shared/section-heading";

type ServiceIconName = "paws" | "key" | "van" | "shield" | "wash" | "lead";

// Original icons: 🐾 🔑 🚐 🛡️ 🛁 🪢
const services = [
  {
    title: "Long and short walks",
    description:
      "Long country walks that may be in a friendly small group or one-to-one, and short walks in your local area.",
    icon: "paws",
  },
  {
    title: "Collection and return",
    description:
      "We collect your dog from home and bring them back, using a spare key if you need us to.",
    icon: "key",
  },
  {
    title: "Transport",
    description:
      "Your dog travels in our dedicated van, with a secure, comfortable space of their own.",
    icon: "van",
  },
  {
    title: "Safety",
    description: "Secure transport and tracking while your dog is out.",
    icon: "shield",
  },
  {
    title: "Clean paws",
    description: "A freshen-up before your dog comes home.",
    icon: "wash",
  },
  {
    title: "Walking preferences",
    description: "On lead or off lead, whichever suits you and your dog best.",
    icon: "lead",
  },
] as const;

function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16 overflow-visible text-brand-green-800"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.6"
      aria-hidden="true"
    >
      {name === "paws" && (
        <g stroke="#4a3319">
          <path
            d="M17 33c-4 .2-6.1 3.2-5 6.1 1 2.6 4.4 3.8 7.1 2.4 3.1 2.3 7.7.7 8-2.6.2-3.1-3.1-5.8-7.5-5.4-1-2.4-1.6-2.5-2.6-.5Z"
            fill="#8a6146"
          />
          <ellipse cx="12.8" cy="29.2" rx="2.2" ry="3" transform="rotate(-25 12.8 29.2)" fill="#8a6146" />
          <ellipse cx="18.2" cy="26.4" rx="2.2" ry="3.1" transform="rotate(-8 18.2 26.4)" fill="#8a6146" />
          <ellipse cx="23.8" cy="28.4" rx="2.1" ry="2.8" transform="rotate(18 23.8 28.4)" fill="#8a6146" />
          <path
            d="M39 45c-3.7.5-5.7 3.4-4.6 6.2 1.1 2.8 4.6 3.8 7.3 2.2 3.2 2 7.5.2 7.7-3 .2-3.2-3.3-5.8-7.5-5.1-1.1-2.2-1.8-2.3-2.9-.3Z"
            fill="#8a6146"
          />
          <ellipse cx="35" cy="41" rx="2.1" ry="2.9" transform="rotate(-28 35 41)" fill="#8a6146" />
          <ellipse cx="40.2" cy="38.2" rx="2.2" ry="3" transform="rotate(-10 40.2 38.2)" fill="#8a6146" />
          <ellipse cx="45.9" cy="40" rx="2.1" ry="2.7" transform="rotate(16 45.9 40)" fill="#8a6146" />
          <path d="m27 31 3 2m3 3 2 2" strokeWidth="1.5" />
        </g>
      )}
      {name === "key" && (
        <g>
          <path
            d="M36.5 26.8 17.1 46.7c-1.2 1.2-3.1 1.3-4.3.1-1.2-1.2-1.1-3.1.1-4.3l19.4-19.9"
            fill="#f3d37b"
          />
          <path d="M36.5 26.8 17.1 46.7c-1.2 1.2-3.1 1.3-4.3.1-1.2-1.2-1.1-3.1.1-4.3l19.4-19.9" />
          <path d="m21 43 4.5 4.5m.8-10.8 4.5 4.5" strokeWidth="3.2" />
          <path
            d="M42 8c6.1-.1 11.1 4.8 11 10.9 0 6.1-5 11-11.1 10.9-6-.1-10.9-4.9-10.8-11C31.2 12.8 36 8.1 42 8Z"
            fill="#f3d37b"
          />
          <path d="M42 8c6.1-.1 11.1 4.8 11 10.9 0 6.1-5 11-11.1 10.9-6-.1-10.9-4.9-10.8-11C31.2 12.8 36 8.1 42 8Z" />
          <path d="M42 14.5c2.4 0 4.4 2 4.3 4.4 0 2.4-2 4.3-4.4 4.2-2.3-.1-4.2-2-4.1-4.3 0-2.4 1.8-4.3 4.2-4.3Z" fill="#f2ece1" strokeWidth="2" />
          <path d="M35.5 11.5c1.6-1.2 3.2-1.8 5-2m4.2 20.3c2-.6 3.5-1.6 4.7-3m-32.3 22 1.3 1.2" strokeWidth="1.5" />
        </g>
      )}
      {name === "van" && (
        <g>
          <path
            d="m9.5 24 4.4-.2 4.6-8.1c1-1.8 2.5-2.8 4.7-2.8h16.1c2.4 0 4.2 1 5.6 2.9l5.8 8.2 3.7.3c2 .2 3.3 1.8 3.3 3.8v14.7c0 2.2-1.4 3.7-3.7 3.7H12.8c-2.1 0-3.4-1.4-3.4-3.5V27.4c0-1.9.4-3 2.1-3.4Z"
            fill="#dce8c6"
          />
          <path d="m9.5 24 4.4-.2 4.6-8.1c1-1.8 2.5-2.8 4.7-2.8h16.1c2.4 0 4.2 1 5.6 2.9l5.8 8.2 3.7.3c2 .2 3.3 1.8 3.3 3.8v14.7c0 2.2-1.4 3.7-3.7 3.7H12.8c-2.1 0-3.4-1.4-3.4-3.5V27.4c0-1.9.4-3 2.1-3.4Z" />
          <path d="m20 23.4 3.5-7.2c.4-.8 1.1-1.2 2.1-1.2h12.5c1.1 0 2 .5 2.7 1.5l4.7 7H20Z" fill="#fff8e6" />
          <path d="m20 23.4 3.5-7.2c.4-.8 1.1-1.2 2.1-1.2h12.5c1.1 0 2 .5 2.7 1.5l4.7 7H20Zm1 3.3v8.4m-9-.2h42M13.5 39.5h3m31.5 0h3" strokeWidth="2" />
          <circle cx="20" cy="45.5" r="5.1" fill="#d6b98b" />
          <circle cx="46.5" cy="45.5" r="5.1" fill="#d6b98b" />
          <circle cx="20" cy="45.5" r="1.7" fill="#f7f1e8" strokeWidth="1.4" />
          <circle cx="46.5" cy="45.5" r="1.7" fill="#f7f1e8" strokeWidth="1.4" />
          <path d="m14 19 2.6-.2m29.8 2.8 2.1.2" strokeWidth="1.5" />
        </g>
      )}
      {name === "shield" && (
        <g>
          <path
            d="m31.8 10.8 17.5 6.4-.3 15.2c-.1 10.7-6.6 17.3-17.1 21.4-10.3-4.4-16.5-11.4-16.3-21.7l.3-15 15.9-6.3Z"
            fill="#b9ddf0"
          />
          <path d="m31.8 10.8 17.5 6.4-.3 15.2c-.1 10.7-6.6 17.3-17.1 21.4-10.3-4.4-16.5-11.4-16.3-21.7l.3-15 15.9-6.3Z" />
          <path d="m24.2 31.7 5.6 5.8 11.6-13.2" stroke="#fff8e6" strokeWidth="3.4" />
          <path d="m20 18.8 11.4-4.5m18 7.1-.1 9.2m-5.9 16.3c1.8-1.5 3.1-3.2 4.1-5.2" strokeWidth="1.5" />
        </g>
      )}
      {name === "wash" && (
        <g>
          <path d="M15 31.5h34l-3.1 10.6c-1.1 4-4.1 6.4-8.4 6.4H27c-4.4 0-7.3-2.4-8.6-6.3L15 31.5Z" fill="#dce8c6" />
          <path d="M15 31.5h34l-3.1 10.6c-1.1 4-4.1 6.4-8.4 6.4H27c-4.4 0-7.3-2.4-8.6-6.3L15 31.5Z" />
          <path d="M12.5 30.5c.1-1.4 1.1-2.3 2.6-2.3h34.1c1.5 0 2.5.9 2.5 2.4 0 1.4-1 2.5-2.5 2.5H15c-1.6 0-2.6-1-2.5-2.6Z" fill="#d9c8e6" />
          <path d="M12.5 30.5c.1-1.4 1.1-2.3 2.6-2.3h34.1c1.5 0 2.5.9 2.5 2.4 0 1.4-1 2.5-2.5 2.5H15c-1.6 0-2.6-1-2.5-2.6Zm7.4 18.1-2.1 3m25.1-3 2.2 3m-17.7-3v3.2m-5.2-20.2c.1-2.2 1.5-3.3 3.5-3.3h14.8" />
          <path d="M39 25.3v-6.2c0-2.9 2.1-4.7 4.7-4.7 2.7 0 4.5 1.9 4.5 4.3v2" />
          <circle cx="24" cy="22" r="1.2" fill="#d9c8e6" strokeWidth="1.2" />
          <circle cx="30" cy="19.5" r="1.1" fill="#d9c8e6" strokeWidth="1.2" />
        </g>
      )}
      {name === "lead" && (
        <g
          transform="translate(7.2 7.2) scale(0.775)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M59 16c-7-3-7-10 0-13 7 3 7 10 0 13Z"
            stroke="#c94b45"
            strokeWidth="3.5"
          />
          <path
            d="M11 49c3-2 4-9 8-12 3-2 5 0 8 2s5 5 9 6c3 1 5-1 7-4 3-5 3-12 7-16 2-4 5-7 9-9"
            stroke="#c94b45"
            strokeWidth="3.5"
          />
          <g transform="translate(3 -3)">
            <path
              d="M5.2 52c-1.9-.8-3.8.5-3.7 2.6l.3 3.2c.2 2.5 3.2 3.5 4.8 1.7l3.1-3.3c1.2-1.3.6-3.4-1.1-3.8"
              stroke="#3f3f46"
              strokeWidth="1.8"
            />
            <path d="m5.4 53.8 2.4 2.4" stroke="#3f3f46" strokeWidth="1.4" />
          </g>
        </g>
      )}
    </svg>
  );
}

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
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100"
                aria-hidden="true"
              >
                <ServiceIcon name={service.icon} />
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
