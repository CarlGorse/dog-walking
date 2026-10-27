import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";
import FaqList from "./faq-list";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about walks, prices, transport, and dog care.",
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-white text-stone-800">
      <SiteHeader />

      <section className="bg-amber-100 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="A little more information."
            as="h1"
            size="large"
          />
          <FaqList />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
