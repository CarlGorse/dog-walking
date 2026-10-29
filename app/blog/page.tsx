import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: `Dog care tips, seasonal advice, business updates and life behind the scenes at ${siteConfig.fullName}, plus whatever else comes to mind.`,
};

function withItalicName(text: string) {
  return text.split(siteConfig.name).flatMap((part, index) =>
    index === 0 ? [part] : [<em key={index}>{siteConfig.name}</em>, part],
  );
}

const articles = [
  {
    id: "getting-started",
    publishedAt: "2026-10-24",
    category: "Getting started",
    title: `Starting ${siteConfig.name}`,
    paragraphs: [
      `${siteConfig.name} is still at the very beginning. We haven’t started walking other people’s dogs yet; right now we’re planning the business and working out which walks to offer, and at what times of day they will work best.`,
      `For now we’re part-time, which is why ${siteConfig.name} won’t be full time just yet. We’re going to see how things go, and we’d love it to become a full-time thing one day.`,
      "We’re also a little anxious about Alfie. He’s used to having his walks to himself, and we’re not sure how he’ll feel about sharing them with his dad and some other dogs. And, slightly funnily, we keep wondering how we’re going to wash muddy dogs down after a walk with limited resources in a van!",
      `We don’t have a success story to tell just yet. We’d like this blog to be an honest record of getting ready, what we learn along the way, and how ${siteConfig.name} grows from an idea into a real dog-walking business.`,
    ],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-stone-800">
      <SiteHeader />

      <section className="bg-amber-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:px-8 lg:py-16">
          <div>
            <SectionHeading eyebrow="Blog" title="Stories, news, and thoughts" as="h1" size="large" />
            <p className="mt-4 max-w-xl text-lg leading-8 text-stone-600">
              Dog care tips, seasonal advice, updates on how the business is growing and life behind the scenes, plus whatever else comes to mind along the way.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669409635015-94800143ce02?auto=format&fit=crop&w=1200&q=85"
            alt="Two dogs playing together in the woods"
            className="h-[280px] w-full rounded-2xl object-cover md:h-[340px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        {articles.map((article) => (
          <article key={article.id} id={article.id} className="border-b border-stone-200 py-10 last:border-b-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">{article.category}</p>
              <time dateTime={article.publishedAt} className="text-stone-500">
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }).format(new Date(`${article.publishedAt}T00:00:00Z`))}
              </time>
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">{withItalicName(article.title)}</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-stone-600">
              {article.paragraphs.map((paragraph) => <p key={paragraph}>{withItalicName(paragraph)}</p>)}
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}