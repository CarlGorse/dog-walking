import Image from "next/image";
import SectionHeading from "./section-heading";

export default function CountrysideSection() {
  return (
    <section className="bg-white py-16 text-stone-900 sm:py-20">
      <div className="content-container grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Exploring"
            title="From your doorstep to the great outdoors."
            tone="emerald"
          />
          <div className="mt-5 space-y-5 text-lg leading-8 text-stone-600">
            <p>
              We don’t stick to the same few streets. Our walks often take us{" "}
              <strong className="font-semibold text-stone-700">
                well beyond the local area
              </strong>
              , out to the trails, fields, and woods we love to explore, with
              the Mendips being one of our favourite places to go.
            </p>
            <p>
              Our fully fitted dog van means{" "}
              <strong className="font-semibold text-stone-700">
                distance isn’t a limit
              </strong>
              , so we can reach great walking spots that wouldn’t be possible to
              get to on foot. We’re always on the lookout for new routes too,
              and a change of scene is good for dogs.
            </p>
            <p>
              <strong className="font-semibold text-stone-700">
                New smells, different terrain and ever-changing landscapes
              </strong>{" "}
              make every outing interesting and exciting, keeping their minds as
              busy as their legs.
            </p>
          </div>
        </div>
        <Image
          src="/dog-walk-group.png"
          alt="Four dogs walking together along a countryside path"
          width={1200}
          height={1600}
          className="h-[300px] w-full rounded-[2rem] object-cover shadow-sm sm:h-[400px]"
        />
      </div>
    </section>
  );
}
