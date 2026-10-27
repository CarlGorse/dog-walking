type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
  tone?: "amber" | "emerald" | "stone" | "light";
  size?: "standard" | "large";
};

const eyebrowTones = {
  amber: "text-amber-700",
  emerald: "text-emerald-700",
  stone: "text-stone-700",
  light: "text-amber-300",
};

const titleTones = {
  amber: "text-stone-900",
  emerald: "text-stone-900",
  stone: "text-stone-900",
  light: "text-white",
};

export default function SectionHeading({
  eyebrow,
  title,
  as: Heading = "h2",
  tone = "amber",
  size = "standard",
}: SectionHeadingProps) {
  const titleSize = size === "large" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl";

  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${eyebrowTones[tone]}`}>
        {eyebrow}
      </p>
      <Heading className={`mt-3 font-black tracking-tight ${titleSize} ${titleTones[tone]}`}>
        {title}
      </Heading>
    </div>
  );
}
