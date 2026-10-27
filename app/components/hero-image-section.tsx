export default function HeroImageSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-6 lg:px-8 lg:pb-16 lg:pt-8">
      <div className="overflow-hidden rounded-[2.5rem] border border-amber-100 bg-white shadow-[0_30px_80px_rgba(120,90,25,0.12)]">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80"
          alt="Cockapoo dog running happily through woodland"
          className="h-[520px] w-full object-cover"
        />
      </div>
    </section>
  );
}
