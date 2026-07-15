import Link from "next/link";

export default function FeaturedEventsSection() {
  const benefits = [
    "Submit and manage events from one private dashboard",
    "Proprietary Campaign Builder ad placement tool",
    "Discover those hard to find events",
    "Global access in 4 Regions (USA, Canada, UK, Africa)",
    "Additional Global regions added later",
    "Plan for maximum visibility to a targeted audience",
    "Centralized platform giving you full control",
    "Recurring events made easy",
    "Build regional presence across the Judah Global network",
    "No more searching multiple social media platforms to find faith based events",
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-8 pt-8 pb-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#C7A24A]">
            What Makes Judah Global Unique
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0E1B34] md:text-5xl">
            A Global Vision Built for a Global Audience
          </h2>

          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Check out these benefits
          </p>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 text-sm font-extrabold leading-6 text-[#0E1B34]"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C7A24A]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-[#0E1B34] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:bg-[#162847]"
            >
              Click to Enter Judah Global
            </Link>

          </div>
        </div>

<div className="relative">
  <div className="absolute -inset-5 rounded-[2.25rem] bg-[#C7A24A]/20 blur-2xl" />

  <div className="relative overflow-hidden rounded-[2rem] border border-[#C7A24A]/30 bg-[#111318] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
    <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
      </div>

      <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#C7A24A]">
        Live Organization Dashboard
      </span>
    </div>

    <div className="relative">
      <img
        src="/images/org-dashboard.jpg"
        alt="Judah Global organization dashboard"
        className="h-auto w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />

      <div className="pointer-events-none absolute bottom-5 right-6 text-right">
        <p className="text-2xl font-extrabold uppercase tracking-[0.18em] text-white/10">
          JUDAH GLOBAL
        </p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.28em] text-[#C7A24A]/20">
          Organization Access
        </p>
      </div>
    </div>
  </div>

    <div className="mx-auto mt-5 h-6 w-[78%] rounded-full bg-black/20 blur-xl" />
  </div>
</div>
    </section>
  );
}