import SiteHeader from "./_components/shared/site-header";
import SiteFooter from "./_components/shared/site-footer";
import AvailabilitySection from "./_components/home/availability-section";
import ContactSection from "./_components/home/contact-section";
import CountrysideSection from "./_components/home/countryside-section";
import HeroImageSection from "./_components/home/hero-image-section";
import IntroSection from "./_components/home/intro-section";
import PartTimeSection from "./_components/home/part-time-section";
import ServicesSection from "./_components/home/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fcfaf6,_#f7f4ef_30%,_#f0ece5_100%)] text-stone-800">
      <SiteHeader />
      <HeroImageSection />
      <IntroSection />
      <PartTimeSection />
      <CountrysideSection />
      <ServicesSection />
      <AvailabilitySection />
      <ContactSection />
      <section
        aria-labelledby="credentials-heading"
        className="bg-amber-200 py-8"
      >
        <div className="content-container flex flex-col items-center gap-3 text-center">
          <h2
            id="credentials-heading"
            className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green-800"
          >
            Credentials
          </h2>
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green-700/10 text-3xl ring-1 ring-brand-green-800/20"
              aria-hidden="true"
            >
              🪪
            </span>
            <p className="text-lg font-bold text-stone-800">DBS checked</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
