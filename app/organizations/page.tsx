import Link from "next/link";

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A24A]">
          Organizations
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Activate Your Organization on Judah Global
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Judah Global helps churches, ministries, synagogues, nonprofits, conferences,
          and faith-based organizations manage events, promote gatherings, and grow
          community reach.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Create an organization presence for your ministry, church, nonprofit, or faith-based group.",
            "Submit and manage events through a dedicated organization experience.",
            "Promote approved events through featured placements, Major Events, and campaign tools.",
            "Access organization resources, policy guidance, media standards, and support pathways.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="leading-7 text-zinc-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#C7A24A]/30 bg-black p-6">
          <p className="text-sm leading-6 text-zinc-300">
            Organization participation is subject to Judah Global’s{" "}
            <Link
              href="/resources/organization-verification"
              className="text-[#C7A24A] hover:underline"
            >
              Organization Verification Policy
            </Link>
            ,{" "}
            <Link href="/resources/terms" className="text-[#C7A24A] hover:underline">
              Terms of Service
            </Link>
            , and{" "}
            <Link
              href="/resources/community-standards"
              className="text-[#C7A24A] hover:underline"
            >
              Community Standards
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]">
            Activate Organization Access
          </button>

          <Link
            href="/resources"
            className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View Organization Resources
          </Link>
        </div>
      </section>
    </main>
  );
}