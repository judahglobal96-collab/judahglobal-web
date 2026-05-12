export default function MajorEventsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-white">
        {/* Background Image */}
        <img
          src="/images/major-events-hero.jpg"
          alt="Major Event Concert"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 text-center pt-28 md:pt-36">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A64B]">
            


          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Major Events Promo = Where High-Impact Events Get Seen
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-200">
            Major Events promo is one of our strongest platform tools to get your
            event in front of a global audience, active for 21-days and renewable
            for additional days. Combine with our &quot;Featured Badge&quot; your event
            will always result at the top of all global searches.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/signup"
              className="rounded-full border border-[#C8A64B] px-10 py-3 font-semibold text-[#C8A64B] transition hover:bg-[#C8A64B] hover:text-black"
            >
              Promote Your Event as Major Event
            </a>
          </div>

          {/* Brand (moved below CTA) */}
          <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#C8A64B]/80">
            JUDAH GLOBAL
          </p>

        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Major Faith-based Events Worth Traveling For</h2>

          <p className="mx-auto mt-5 max-w-3xl text-neutral-300">
            Premium visibility for events with regional, national, or global
            reach. Discover high-impact conferences, crusades, revivals, leadership summits
            and special kingdom events happening across your region and beyond.
          </p>
        </div>
      </section>

      {/* What Counts */}
        <section className="bg-[#0B0B0B] px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Built for Events That Carry Weight
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
              Major Events aren&apos;t defined by category — they&apos;re defined by
              impact, reach, and intention. If your event is meant to reach the masses,
              shift atmospheres, or reach beyond a single room, it belongs here.
            </p>

            {/* Centered Box Container */}
            <div className="mt-14 flex justify-center">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-4xl">
                
                {/* Card 1 */}
                <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-10 text-center shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A64B]/50 hover:shadow-[0_10px_40px_rgba(200,166,75,0.15)]">
                  <p className="font-semibold text-[#C8A64B] tracking-wide">
                    Visibility-Driven Promotion
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A64B]/50 hover:shadow-[0_10px_40px_rgba(200,166,75,0.15)]">
                  <p className="font-semibold text-[#C8A64B] tracking-wide">
                    Built for Visibility &amp; Impact
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A64B]/50 hover:shadow-[0_10px_40px_rgba(200,166,75,0.15)]">
                  <p className="font-semibold text-[#C8A64B] tracking-wide">
                    Regional or Global Reach
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      {/* Event Cards */}
      <section id="major-events" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Upcoming Major Events</h2>
            <p className="mt-3 text-neutral-400">
              Featured gatherings with premium visibility across Judah Global.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {majorEvents.length > 0 ? (
              majorEvents.map((event) => (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
                >
                  <div className="h-48 bg-neutral-800">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <span className="rounded-full bg-[#C8A64B] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
                      Major Event
                    </span>

                    <h3 className="mt-4 text-xl font-bold">{event.title}</h3>

                    <p className="mt-3 text-sm text-neutral-300">
                      {event.date}
                    </p>

                    <p className="mt-1 text-sm text-neutral-400">
                      {event.location}
                    </p>

                    <p className="mt-1 text-sm text-neutral-400">
                      Hosted by {event.sponsor}
                    </p>

                    <a
                      href={`/events/${event.slug}`}
                      className="mt-6 inline-block rounded-full border border-[#C8A64B] px-5 py-2 text-sm font-semibold text-[#C8A64B] transition hover:bg-[#C8A64B] hover:text-black"
                    >
                      View Event
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
                <h3 className="text-2xl font-bold">
                  No Major Events are currently listed in this region.
                </h3>
                <p className="mt-3 text-neutral-400">
                  Check back soon or explore other events near you.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Promotion CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#C8A64B]/40 bg-[#C8A64B]/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Major Events Promo - 21+ days of Premium Visibility
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Give your event premium placement on Judah Global and help more
            people discover what God is doing through your ministry, church, or
            organization.
          </p>

          <a
            href="/signup"
            className="mt-8 inline-block rounded-full bg-[#C8A64B] px-8 py-3 font-semibold text-black transition hover:bg-[#d8b85c]"
          >
            Promote as Major Event
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold">
          Support kingdom events. Sign up and Stay connected.
        </h2>

        <a
          href="/signup"
          className="mt-8 inline-block rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Promote as Major Event
        </a>
      </section>
    </main>
  );
}

const majorEvents = [
  {
    id: 1,
    title: "Kingdom Leadership Summit",
    date: "June 21, 2026 · 7:00 PM",
    location: "Atlanta, Georgia, USA",
    sponsor: "Kingdom Leaders Network",
    slug: "kingdom-leadership-summit",
    image: "/images/events/major-event-1.jpg",
  },
  {
    id: 2,
    title: "Citywide Night of Worship",
    date: "July 12, 2026 · 6:30 PM",
    location: "Dallas, Texas, USA",
    sponsor: "United Worship Collective",
    slug: "citywide-night-of-worship",
    image: "/images/events/major-event-2.jpg",
  },
  {
    id: 3,
    title: "Global Revival Gathering",
    date: "August 8, 2026 · 5:00 PM",
    location: "Orlando, Florida, USA",
    sponsor: "Revival Fire Ministries",
    slug: "global-revival-gathering",
    image: "/images/events/major-event-3.jpg",
  },
];