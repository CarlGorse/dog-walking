"use client";

import { useState } from "react";

const categories = [
  "All",
  "Walks",
  "Your dog",
  "Booking and payment",
  "Safety and care",
] as const;
type Category = Exclude<(typeof categories)[number], "All">;

// Ordered roughly as a customer meets them: the walks, then eligibility, booking, and the day itself.
const faqs: {
  category: Category;
  question: string;
  answer: string | string[];
}[] = [
  {
    category: "Walks",
    question: "What are long country walks, and how many dogs are in a group?",
    answer: [
      "Long country walks are our longer outings, around two hours of walking. Depending on who’s booked, they may be a small group or just your dog.",
      "When dogs are walked together, they’re matched taking their personality, energy, and confidence into account.",
      "We never take more than 3 dogs in a group, so every dog gets plenty of attention and the walks stay safe.",
    ],
  },
  {
    category: "Walks",
    question: "What is a short local walk?",
    answer:
      "A short local walk is a one-to-one walk around your local area, tailored to your dog’s needs, pace, and personality.",
  },
  {
    category: "Booking and payment",
    question: "Do I need to book a regular slot?",
    answer:
      "No. Out and About is a part-time service, so you don’t need a regular slot. Just message us when you need a walk, as far ahead as you like, or ideally the day before at the latest, and we’ll let you know if we’re free. If you’d prefer a regular slot, we’re happy to arrange that too.",
  },
  {
    category: "Booking and payment",
    question: "Will the walk times change?",
    answer:
      "The times on the site are for our winter schedule, which runs to the end of March. They’ll then change for the spring and summer schedule.",
  },
  {
    category: "Booking and payment",
    question: "Will the availabile days ever change?",
    answer:
      "We'll always be available on the current days. We’ll make more days available as when the business grows.",
  },
  {
    category: "Your dog",
    question: "What dogs do you accept?",
    answer: [
      "Short local walks are open to any dog, whatever their breed, age or situation.",
      "To keep long country walks safe and relaxed, we only take dogs who are at least a year old, and male dogs need to be neutered. We can’t take females on a long country walk while they are in season.",
      "Because of the crate space in our van, the largest breeds we can take on any walk where we drive them in the van are Labradors and German Shepherds.",
      "Nervous dogs are very welcome on any walk. We’re happy to help build their confidence at their own pace.",
    ],
  },
  {
    category: "Your dog",
    question: "Do dogs need to be vaccinated?",
    answer:
      "Yes. Dogs must have up-to-date vaccinations, and flea and worm treatments.",
  },
  {
    category: "Booking and payment",
    question: "What are the prices if I have more than one dog?",
    answer:
      "Prices are per dog, per walk. Discounts are available when two or more dogs from the same household join a walk.",
  },
  {
    category: "Booking and payment",
    question: "Do I need to meet you before the first walk?",
    answer:
      "Yes. Before we start, we’ll come to you for a meet and greet so we can get to know each other, and learn about your dog and your particular requirements.",
  },
  {
    category: "Booking and payment",
    question: "How and when do I pay?",
    answer:
      "We'd really like you to pay up front so we don't end up chasing people for payment. If you ever feel the need for a refund then we'll be happy to oblige.",
  },
  {
    category: "Booking and payment",
    question: "What if I need to cancel?",
    answer: [
      "We’d prefer to not have cancellations but we understand plans can change. You can cancel at any time without penalty.",
      "If cancellations become frequent we may have to have a chat with you to work out a better arrangement.",
    ],
  },
  {
    category: "Safety and care",
    question: "Are you insured?",
    answer:
      "Yes. We are covered with business and liability insurance, including transporting dogs in our van.",
  },
  {
    category: "Walks",
    question: "Can you collect my dog if I’m not home?",
    answer:
      "Yes. If you’d like, we can collect and return your dog using a spare key, so you don’t need to be there.",
  },
  {
    category: "Safety and care",
    question: "How do you transport dogs to their walks?",
    answer:
      "Dogs travel in our electric van, each in their own professional-grade crate with clean bedding and fresh water. We pre-condition the van temperature before and after walks in hot and cold weather.",
  },
  {
    category: "Walks",
    question: "How will my dog be walked?",
    answer:
      "Walks can be off lead, on a short lead, or on a long lead, and it’s your choice. We only let dogs off the lead with their owner’s permission.",
  },
  {
    category: "Safety and care",
    question: "Can I keep track of my dog during a walk?",
    answer:
      "Yes. Each dog wears their own tracker, which you can monitor from your phone.",
  },
  {
    category: "Walks",
    question: "Do you provide poo bags?",
    answer:
      "Yes. We always carry our own poo bags, and they’re biodegradable, so they’re kinder to the environment.",
  },
  {
    category: "Walks",
    question: "Can walk times change because of the weather?",
    answer: [
      "In extremely inclement weather we will adjust walk times as necessary to keep dogs comfortable and safe. We’ll confirm any changes with you in advance.",
      "In a heatwave, we may take morning long country walks out earlier and afternoon ones out in the evening, when it’s cooler. If it’s simply too hot to walk, we can arrange a home visit session instead.",
    ],
  },
  {
    category: "Safety and care",
    question: "Will my dog be cleaned after a walk?",
    answer:
      "Yes. We wash and dry dogs as best we can before returning them home.",
  },
];

export default function FaqList() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");
  const visibleFaqs =
    selected === "All" ? faqs : faqs.filter((faq) => faq.category === selected);
  const sections: { title: Category | null; items: typeof faqs }[] =
    selected === "All"
      ? categories
          .filter((category): category is Category => category !== "All")
          .map((category) => ({
            title: category,
            items: faqs.filter((faq) => faq.category === category),
          }))
      : [{ title: null, items: visibleFaqs }];

  return (
    <>
      <div
        role="group"
        aria-label="Filter questions by category"
        className="mt-8 flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const isSelected = category === selected;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(category)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                isSelected
                  ? "border-emerald-800 bg-emerald-800 text-white shadow-sm"
                  : "border-amber-300 bg-white text-stone-700 hover:bg-amber-50"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-4">
        {sections.map((section) => (
          <div key={section.title ?? "all"} className="space-y-4">
            {section.title && (
              <h2 className="pt-4 text-sm font-black uppercase tracking-wide text-emerald-800">
                {section.title}
              </h2>
            )}
            {section.items.map((faq) => {
              const index = sections.flatMap((s) => s.items).indexOf(faq);
              return (
                <details
                  key={faq.question}
                  name="faq"
                  className={`group content-card content-card-compact border-l-[6px]! border-l-emerald-700! border-amber-200! shadow-md transition hover:shadow-lg ${
                    index % 2 === 0 ? "bg-white!" : "bg-emerald-100!"
                  }`}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg font-bold text-stone-900">
                      {faq.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center text-stone-400 transition group-hover:text-emerald-700 group-open:rotate-180"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="m5 8 5 5 5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 border-t border-amber-200 pt-1">
                    {(Array.isArray(faq.answer)
                      ? faq.answer
                      : [faq.answer]
                    ).map((line) => (
                      <p key={line} className="mt-2 leading-7 text-stone-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
