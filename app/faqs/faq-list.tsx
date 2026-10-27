"use client";

import { useState } from "react";

const categories = ["All", "Walks", "Your dog", "Booking and payment", "Safety and care"] as const;
type Category = Exclude<(typeof categories)[number], "All">;

// Ordered roughly as a customer meets them: the walks, then eligibility, booking, and the day itself.
const faqs: { category: Category; question: string; answer: string | string[] }[] = [
  {
    category: "Walks",
    question: "How do group walks work, and how many dogs are in a group?",
    answer: [
      "Dogs are matched in friendly small groups, taking their personality, energy, and confidence into account.",
      "We never take more than 3 dogs in a group, so every dog gets plenty of attention and the walks stay safe.",
    ],
  },
  {
    category: "Walks",
    question: "What is a solo walk?",
    answer: "A solo walk is one-to-one, with the walk tailored to your dog’s needs, pace, and personality.",
  },
  {
    category: "Your dog",
    question: "What dogs do you accept?",
    answer: [
      "Solo walks are open to any dog, whatever their breed, age or situation.",
      "To keep group walks safe and relaxed, we only take dogs who are at least a year old, and male dogs need to be neutered. We can’t take females in a group while they are in season.",
      "Because of the crate space in our van, the largest breeds we can take on group walks are Labradors and German Shepherds. Anything bigger is very welcome on a solo walk.",
      "Nervous dogs are very welcome on any walk. We’re happy to help build their confidence at their own pace.",
    ],
  },
  {
    category: "Your dog",
    question: "Do dogs need to be vaccinated?",
    answer: "Yes. Dogs must have up-to-date vaccinations, and flea and worm treatments.",
  },
  {
    category: "Safety and care",
    question: "Are you insured?",
    answer: "Yes. We are covered with business and liability insurance, including transporting dogs in our van.",
  },
  {
    category: "Booking and payment",
    question: "How are prices worked out, and is there a discount for more than one dog?",
    answer: "Prices are per dog, per walk. Discounts are available when two or more dogs from the same household join a walk.",
  },
  {
    category: "Booking and payment",
    question: "Do I need to meet you before the first walk?",
    answer: "Yes. Before we start, I’ll come to your home for a meet and greet so we can get to know each other, and I can learn about your dog.",
  },
  {
    category: "Booking and payment",
    question: "How and when do I pay?",
    answer: "Payment is made up front.",
  },
  {
    category: "Booking and payment",
    question: "What if I need to cancel?",
    answer: [
      "We’d prefer to not have cancellations but we understand plans can change. You can cancel without any penalty.",
      "If cancellations become frequent we'll have a chat with you to work out the best arrangement for you and the business.",
    ],
  },
  {
    category: "Walks",
    question: "Can you collect my dog if I’m not home?",
    answer: "Yes. If you’d like, I can collect and return your dog using a key, so you don’t need to be there.",
  },
  {
    category: "Safety and care",
    question: "How do you transport dogs to their walks?",
    answer: "Dogs travel in our electric van, each in their own professional-grade crate with clean bedding and fresh water. We pre-condition the van temperature before and after walks in hot and cold weather.",
  },
  {
    category: "Walks",
    question: "What lead options are available?",
    answer: "Walks can be off lead, on a short lead, or on a long lead, and it’s your choice. We only let dogs off the lead with their owner’s permission.",
  },
  {
    category: "Safety and care",
    question: "Can I keep track of my dog during a walk?",
    answer: "Each dog wears their own tracker, which you can monitor from your phone.",
  },
  {
    category: "Walks",
    question: "Do you provide poo bags?",
    answer: "Yes. We always carry our own poo bags, and they’re biodegradable, so they’re kinder to the environment.",
  },
  {
    category: "Walks",
    question: "Can walk times change because of the weather?",
    answer: [
      "In extremely inclement weather we will adjust walk times as necessary to keep dogs comfortable and safe. We’ll confirm any changes with you in advance.",
      "In a heatwave, we may take morning groups out earlier and afternoon groups out in the evening, when it’s cooler. If it’s simply too hot to walk, we can arrange a home visit session instead.",
    ],
  },
  {
    category: "Safety and care",
    question: "Will my dog be cleaned after a walk?",
    answer: "Yes. We wash and dry dogs as best we can before returning them home.",
  },
];

export default function FaqList() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");
  const visibleFaqs = selected === "All" ? faqs : faqs.filter((faq) => faq.category === selected);

  return (
    <>
      <div role="group" aria-label="Filter questions by category" className="mt-8 flex flex-wrap gap-2">
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
        {visibleFaqs.map((faq, index) => (
          <article
            key={faq.question}
            className={`content-card content-card-compact border-l-[6px]! border-l-emerald-700! border-amber-200! shadow-md ${
              index % 2 === 0 ? "bg-white!" : "bg-emerald-100!"
            }`}
          >
            <h2 className="text-lg font-bold text-stone-900">{faq.question}</h2>
            {(Array.isArray(faq.answer) ? faq.answer : [faq.answer]).map((line) => (
              <p key={line} className="mt-2 leading-7 text-stone-600">{line}</p>
            ))}
          </article>
        ))}
      </div>
    </>
  );
}
