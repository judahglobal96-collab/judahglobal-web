import Link from "next/link";

export default function PromotionsPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A24A]">
          Promotions
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Promote Your Event on Judah Global
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Increase event visibility through Judah Global promotional placements,
          featured event options, Major Events visibility, and regional campaign tools.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Promotional placements help approved events gain stronger visibility across Judah Global.",
            "Featured Badge and Major Event promotions may increase trust, reach, and discovery placement.",
            "Campaign placements are subject to availability, region, timing, media approval, and payment status.",
            "Uploaded promotional media must meet platform quality, ownership, and moderation standards.",
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
          <label className="flex gap-3 text-sm leading-6 text-zinc-300">
            <input type="checkbox" required className="mt-1" />
            <span>
              I understand promotional purchases are subject to Judah Global’s{" "}
              <Link
                href="/resources/refund-policy"
                className="text-[#C7A24A] hover:underline"
              >
                Refund & Promotions Policy
              </Link>
              ,{" "}
              <Link
                href="/resources/media-content-policy"
                className="text-[#C7A24A] hover:underline"
              >
                Media & Content Policy
              </Link>
              , and{" "}
              <Link href="/resources/terms" className="text-[#C7A24A] hover:underline">
                Terms of Service
              </Link>
              .
            </span>
          </label>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]">
            Launch a Promotion
          </button>

          <Link
            href="/resources/media-content-policy"
            className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View Promotion Policy
          </Link>
        </div>
      </section>
    </main>
  );
}