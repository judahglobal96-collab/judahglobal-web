import Link from "next/link";

export default function FeaturedEventsSection() {
  const benefits = [
    "Reach more people",
    "Proprietary Campaign Builder ad placement tool",
    "Manage every event in one place",
    "Promote across multiple countries",
    "Build your organization's digital presence",
    "Spend less time posting to multiple platforms",
    "Centralized platform giving you full control",
    "Recurring events made easy",
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-8 sm:px-8">
        <div className="grid gap-16 xl:gap-24 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Left-side content */}
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#C7A24A]">
            What Makes Judah Global Unique
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0E1B34] md:text-4xl">
            Why Thousands Are Joining Judah Global
          </h2>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 text-sm font-extrabold leading-6 text-[#0E1B34]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C7A24A]"
                />

                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-[#0E1B34] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:bg-[#162847] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A24A] focus-visible:ring-offset-2"
            >
              Click to Enter Judah Global
            </Link>
          </div>
        </div>

        {/* Right-side featured event poster */}
        <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
          {/* Decorative gold glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-[2rem] bg-[#C7A24A]/15 blur-lg"
          />

          <div className="relative w-full max-w-[300px] xl:max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111318] shadow-[0_18px_45px_rgba(0,0,0,.28)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_40px_100px_rgba(199,162,74,0.30)]">
            <div className="aspect-[9/16]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Judah Global Women's Empowerment event discovery video"
              >
                <source
                  src="/videos/jg-womens-empowerment.mov"
                  type="video/quicktime"
                />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom shadow */}
      <div
        aria-hidden="true"
        className="mx-auto mt-5 h-6 w-[78%] rounded-full bg-black/20 blur-xl"
      />
    </section>
  );
}