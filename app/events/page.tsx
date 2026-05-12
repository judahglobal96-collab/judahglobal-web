export default function EventsPage() {
  return (
    <>
    <main className="min-h-screen bg-white text-[#0B1026]">
      {/* HERO */}
      <section className="bg-[#F7F5F0] py-14 md:py-18">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#B99A2F]">
              Events
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Your event has <br />
              <span className="text-[#C4A133]">Global Wings.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg font-bold text-[#111735]">
              A global distribution engine for faith-based events.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#3F4658]">
              Join organizations reaching audiences globally. Judah Global helps
              ministries, businesses, artists, academies, and faith-based leaders
              make events easier to discover, share, and attend anywhere in the
              world.
            </p>

            <div className="mt-7">
              <a
                href="/signup"
                className="inline-flex rounded-lg bg-[#080E24] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
              >
                Submit Your Event
              </a>
            </div>
          </div>

          {/* FEATURED CARD */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[350px] rounded-xl bg-gradient-to-b from-white to-[#3B3B3B] p-3 shadow-2xl">
              <div className="mb-3">
                <span className="rounded bg-[#C4A133] px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white">
                  Live / Upcoming
                </span>
              </div>

                <div className="relative w-full h-[300px] overflow-hidden rounded-lg">

                <img
                    src="/basic-stock-training.jpg"
                    alt="Basic Stock Training"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"                />

                {/* Optional subtle overlay for readability */}
                <div className="absolute inset-0 bg-black/20" />
                </div>

              <div className="pt-3 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wide text-white/60">
                  Virtual Event
                </p>
                <h3 className="mt-1 text-sm font-extrabold">
                  Basic Stock Training
                </h3>
                <p className="text-xs text-white/75">United States / Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#B99A2F]">
            Next Level Visibility
          </p>

          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
            Turn local outreach into global outreach discovery.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4B5263]">
            Create your organization profile, submit your event, add details,
            upload media, and give your event a discoverable home on Judah Global.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-md bg-[#C4A133] px-3 py-2 text-xs font-extrabold text-white">
                01
              </span>
              <h3 className="mt-6 text-lg font-extrabold">
                Build your organization presence
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#555D70]">
                Set up your church, ministry, business, academy, podcast, artist
                profile, or nonprofit presence.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-md bg-[#C4A133] px-3 py-2 text-xs font-extrabold text-white">
                02
              </span>
              <h3 className="mt-6 text-lg font-extrabold">
                Publish your event in minutes
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#555D70]">
                Add your title, description, date, location or virtual details,
                flyer, and media.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-md bg-[#C4A133] px-3 py-2 text-xs font-extrabold text-white">
                03
              </span>
              <h3 className="mt-6 text-lg font-extrabold">
                Reach people globally
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#555D70]">
                Your approved event becomes searchable, shareable, and visible to
                people near and far.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SIGNAL SECTION */}
      <section className="bg-[#080E24] py-14 md:py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C4A133]">
              Built For Connection
            </p>
            <h2 className="max-w-md text-3xl font-extrabold leading-tight">
              One place for faith-based discovery.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Ministry: weekly, monthly, annual special events",
              "Performing Arts",
              "Christian New businesses Launch",
              "Podcasts & Book Tours",
              "Academies",
              "Music Artist Performance Dates",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/7 px-5 py-4 text-sm font-bold text-white shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-[#F7F5F0] px-7 py-8 md:px-10 md:py-10">
            <h2 className="text-3xl font-extrabold">
              Launch your event globally today.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#4B5263]">
              Create your Judah Global account, submit your event, and make it
              discoverable to people searching for faith-based experiences near
              and far.
            </p>

            <div className="mt-6">
              <a
                href="/signup"
                className="inline-flex rounded-lg bg-[#080E24] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
              >
                Submit Event
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}