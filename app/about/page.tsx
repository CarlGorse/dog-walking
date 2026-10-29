import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Me & Alfie",
  description: `Meet the person behind ${siteConfig.fullName} and their dog Alfie.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-stone-800">
      <SiteHeader />
      <section className="bg-amber-50 pb-4 pt-12 text-stone-900 sm:pt-16">
        <div className="content-container max-w-3xl">
          <SectionHeading eyebrow="About us" title="Meet the team" as="h1" size="large" />
        </div>
      </section>
      <section className="bg-amber-50 py-12 text-stone-900 sm:py-20">
        <div className="content-container grid gap-8                 md:grid-cols-[minmax(0,42rem)_320px] md:items-start">
                  <figure className="md:order-2">
            <img
              src="/carl.png"
              alt="Carl, the business owner and dog walker"
              className="h-[360px] w-full rounded-2xl object-cover object-[center_30%]"
            />
          </figure>
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Carl" title="Head of Walks & Wanders" />
            <div className="mt-5 space-y-4 text-lg leading-8 text-stone-700">
              <p>
                Carl is the business manager and the dog walker, alongside his main job.
              </p>
              <p>
                Between him and Alfie they have covered a lot of miles, often two or three walks a day during the working week, and on holidays too, from the Peak District, the Lake District and Dartmoor to many an Area of Outstanding Natural Beauty (AONB).
              </p>
              <p>
                Carl loves to keep busy and, when he isn’t walking or working, can be found in the gym, or playing at being builder with the family home.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-emerald-900 py-12 text-white sm:py-16">
        <div className="content-container grid gap-8                 md:grid-cols-[240px_minmax(0,42rem)] md:items-center">
                  <div className="max-w-2xl md:order-2">
            <SectionHeading eyebrow="Dawn" title="Guardian of the Books & Details" tone="light" />
            <p className="mt-4 text-lg leading-8 text-emerald-50">
              Dawn is Carl&apos;s wife and helps behind the scenes, including taking care of the business accounts, alongside her own main job in finance. She&apos;s also our quality assurance, making sure everything we do is up to scratch.
            </p>
          </div>
          <figure className="md:order-1 md:justify-self-start">
            <img
              src="/dawn.png"
              alt="Dawn, who looks after the business accounts and quality"
              className="h-[300px] w-full max-w-[240px] rounded-2xl object-cover"
            />
          </figure>
        </div>
      </section>
      <section className="bg-stone-100 py-12 text-stone-900 sm:py-20">
        <div className="content-container grid gap-8 md:grid-cols-[minmax(0,42rem)_320px] md:items-start">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Alfie" title="Chief Scout" tone="emerald" />
            <p className="mt-4 text-lg leading-8 text-stone-700">
              Alfie is our dog, a cockapoo. He checks out all new routes and gives them his paw of approval before they make it onto our walk list.
            </p>
          </div>
          <figure>
            <img
              src="/alfie-walk.png"
              alt="Alfie, a light brown Cockapoo out on a leafy woodland walk"
              className="max-h-[560px] w-full rounded-2xl object-contain"
            />
          </figure>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
