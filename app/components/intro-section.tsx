export default function IntroSection() {
  const towns = [
    "Midsomer Norton",
    "Radstock",
    "Westfield",
    "Paulton",
    "Peasedown St John",
    "Timsbury",
    "Farrington Gurney",
    "High Littleton",
    "Clutton",
    "Chilcompton",
    "Stratton-on-the-Fosse",
  ];

  return (
    <section className="bg-emerald-900 py-10 text-white sm:py-12">
      <div className="content-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.25em] text-amber-900 shadow-sm sm:text-xs">
            Trusted and local dog walking
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
            Catering for dogs in our local town and villages:
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {towns.map((town) => (
              <li
                key={town}
                className="rounded-full border border-emerald-600 bg-emerald-800 px-4 py-1.5 text-sm font-bold text-amber-100 shadow-sm"
              >
                📍 {town}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
