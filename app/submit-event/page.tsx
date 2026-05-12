import Link from "next/link";

export default function SubmitEventPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A24A]">
          Event Submission
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Submit Your Event to Judah Global
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Share your faith-based event with communities locally, regionally, and globally.
          Judah Global reviews submitted events for accuracy, quality, safety, and platform fit.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Church services, conferences, worship nights, outreaches, trainings, and community gatherings may be submitted.",
            "Event details must be accurate, including date, time, location, sponsor, description, and contact information.",
            "Uploaded flyers and media must be owned by you or properly authorized.",
            "Approved events may appear in discovery, regional pages, email notifications, and promotional surfaces.",
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
              I confirm this event information is accurate and agree to Judah Global’s{" "}
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
              , and platform submission standards.
            </span>
          </label>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]">
            Continue Event Submission
          </button>

          <Link
            href="/resources"
            className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View Resources
          </Link>
        </div>
      </section>
    </main>
  );
}