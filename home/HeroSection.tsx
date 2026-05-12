import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#071326]">
      {/* Hero background image */}
      <img
        src="/images/hero/judahglobal-hero.png"
        alt="Judah Global community event"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for stronger contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/95 via-[#071326]/70 to-[#071326]/10" />

      {/* Soft light fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071326]/70 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] flex-col justify-center px-8 pt-10">
        <div className="max-w-[760px]">
          <h1 className="text-[56px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white md:text-[72px]">
            Word of Mouth
            <br />
            Outreach...
            <br />
            <span className="text-[#C4953A]">Just Went Global.</span>
          </h1>

          <h2 className="mt-7 max-w-[650px] text-[28px] font-extrabold leading-tight text-white">
            Share the experience beyond the event itself.
          </h2>

          <p className="mt-6 max-w-[660px] text-[19px] leading-8 text-white/90">
            Encourage your congregation and supporters to create a Judah
            Global account to discover meaningful faith-centered events
            happening across cities, regions and nations. Together we can
            impact the WORLD.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-2xl bg-[#C7A24A] px-10 py-5 text-lg font-bold text-black shadow-2xl transition duration-300 hover:bg-[#D6B15A]"
            >
              Create a Free Account
            </Link>

            <p className="mt-4 max-w-[520px] text-sm leading-7 text-white/70">
              Join Judah Global to discover faith-centered events, connect
              with organizations, and experience gatherings happening across
              cities, regions, and nations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}