import Link from "next/link";

export default function PlatformStandardsPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A24A]">
          Platform Policies & Standards
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Judah Global Platform Standards
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          These standards guide event quality, approvals, media usage, promotional
          placement behavior, notification rules, and regional visibility across Judah Global.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Event Approval Standards",
            "Media Moderation Policy",
            "Promotional Placement Standards",
            "Event Accuracy Standards",
            "Regional Promotion Standards",
            "Notification & Communication Rules",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-xl font-bold text-white">{item}</h2>
              <p className="mt-3 leading-7 text-zinc-400">
                Judah Global uses platform standards to protect users, sponsors,
                organizations, attendees, and the integrity of public event discovery.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#C7A24A]/30 bg-black p-6">
          <p className="text-sm leading-6 text-zinc-300">
            For formal policy language, review the{" "}
            <Link href="/resources/terms" className="text-[#C7A24A] hover:underline">
              Terms of Service
            </Link>
            ,{" "}
            <Link
              href="/resources/community-standards"
              className="text-[#C7A24A] hover:underline"
            >
              Community Standards
            </Link>
            ,{" "}
            <Link
              href="/resources/media-content-policy"
              className="text-[#C7A24A] hover:underline"
            >
              Media & Content Policy
            </Link>
            , and{" "}
            <Link
              href="/resources/refund-policy"
              className="text-[#C7A24A] hover:underline"
            >
              Refund & Promotions Policy
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/resources"
            className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]"
          >
            Back to Resources
          </Link>

          <Link
            href="/support"
            className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}