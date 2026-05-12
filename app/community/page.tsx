import Link from "next/link";

export default function CommunityResourcesPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A24A]">
          Community & Faith Resources
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Grow Your Community Through Faith-Centered Events
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Resources to help ministries, churches, organizations, and community leaders
          build meaningful gatherings, strengthen engagement, and expand kingdom impact.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Building Community Through Events",
            "Ministry Outreach Strategies",
            "Volunteer Coordination Tips",
            "Youth Engagement Resources",
            "Worship & Conference Planning",
            "Kingdom Partnership Principles",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-xl font-bold text-white">{item}</h2>
              <p className="mt-3 leading-7 text-zinc-400">
                Practical guidance for planning, promoting, and strengthening
                faith-based community gatherings through Judah Global.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/submit-event"
            className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]"
          >
            Submit an Event
          </Link>

          <Link
            href="/resources"
            className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Back to Resources
          </Link>
        </div>
      </section>
    </main>
  );
}