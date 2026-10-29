import SectionHeading from "./section-heading";

export default function ContactSection() {
  return (
    <section id="book" className="    bg-[linear-gradient(135deg,_#065f46,_#064e3b)] py-20">
          <div className="content-container flex flex-col items-center justify-between gap-6 text-center text-white lg:flex-row lg:text-left">
        <div className="max-w-xl">
              <SectionHeading eyebrow="Get in touch" title="Bookings or questions?" tone="light" />
              <p className="mt-3 text-base leading-7 text-emerald-50">WhatsApp or call us to book a walk or ask anything else.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/4475817983387"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
          >
            WhatsApp us
          </a>
          <a
            href="tel:+4475817983387"
            className="rounded-full border border-white px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-emerald-900"
          >
            Call 07581 7983387
          </a>
        </div>
      </div>
    </section>
  );
}
