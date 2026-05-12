export default function PromoteYourEventPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#0B0B0B] to-black" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A24D]">
              Judah Global Promotions
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Promote Your Event
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Reach the right audience. Fill the room. Grow the impact. Judah
              Global helps churches, ministries, artists, speakers, vendors,
              and organizations promote faith-centered events locally and
              globally.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/signup"
                className="rounded-full bg-[#C9A24D] px-8 py-4 text-center font-semibold text-black transition hover:bg-[#E0BB63]"
              >
                Promote Your Event
              </a>

              <a
                href="/promotions"
                className="rounded-full border border-[#C9A24D]/60 px-8 py-4 text-center font-semibold text-[#C9A24D] transition hover:bg-[#C9A24D]/10"
              >
                View Promotion Options
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
              Event Types
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              What You Can Promote
            </h2>
            <p className="mt-4 text-neutral-400">
              Promote any type of faith-based event, faith-based business or acadamia 
              with a professional public listing. Not an all inclusive list.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Conferences",
              "Worship Nights",
              "Revivals",
              "Concerts",
              "Community Outreach",
              "Bible Studies & Torah Readings",
              "Business Event",
              "Retreats",
              "Leadership Events & Summits",
              "Passover and Shavuot",
              "Movie & Album Release",
              "Youth Events",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-neutral-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#C9A24D]/30 bg-[#111111] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                Organization Strategies & Tools
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Sign Up Your Organization and Unlock Preferred Pricing
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                Churches, ministries, nonprofits, Synagogues, and faith-based
                organizations can create an organization account to access reduced
                promotional pricing, manage multiple events, and promote attendance
                from one central dashboard.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/signup"
                  className="rounded-full bg-[#C9A24D] px-8 py-4 text-center font-semibold text-black transition hover:bg-[#E0BB63]"
                >
                  Create Organization Account: 
                  $299 Annual Subscription
                </a>

              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black p-6">
              <h3 className="text-xl font-bold text-white">
                Organization Benefits
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Preferred reduced promotion pricing",
                  "Manage multiple events from one dashboard",
                  "Access Major Events promotion tools",
                  "Promote regional and recurring ministry events",
                  "Upload sponsor logos, flyers, and event media",
                  "Build visibility for your organization over time",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-neutral-300"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
              Promotion Options
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Choose Your Promotion Level
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Standard Event Listing",
                price: "$79",
                desc: "Get your event published and discoverable by location, category, date, and keyword.",
              },
              {
                title: "Featured Badge",
                price: "From $109",
                desc: "Make your event stand out with premium visual emphasis and elevated visibility.",
              },
              {
                title: "Major Event Promotion",
                price: "From $249",
                desc: "Place your event in the Major Events section for larger gatherings and signature moments.",
              },
              {
                title: "Homepage & Discovery",
                price: "Premium $249",
                desc: "Promote through high-visibility placements like Homepage Hero, Top Row, and Discovery Top Row.",
              },
                            {
                title: "Hero",
                price: "Premium $449",
                desc: "Promote through high-visibility Hero Homepage Banner - equivalent to 1/4 page promo",
              },

            ].map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border border-[#C9A24D]/20 bg-black p-6 shadow-xl"
              >
                <p className="text-sm font-semibold text-[#C9A24D]">
                  {option.price}
                </p>
                <h3 className="mt-3 text-xl font-bold">{option.title}</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
              Why Judah Global
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built for Faith-Based Discovery
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Judah Global places your event in front of people searching for
              Christian events, ministry gatherings, worship experiences, and
              community opportunities in their region.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Region-aware promotion and discovery",
              "Professional event presentation",
              "Support for flyers, sponsor details, and event media",
              "Visibility across local, regional, and global audiences",
              "Admin review process for quality and trust",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Simple Setup. Powerful Visibility.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {[
              "Submit event details",
              "Choose promotion",
              "Upload media",
              "Complete payment",
              "Review & publish",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl bg-black p-5">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A24D] font-bold text-black">
                  {index + 1}
                </div>
                <p className="text-sm text-neutral-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#C9A24D]/30 bg-gradient-to-br from-[#1A1208] to-black p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Your event has a purpose.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Let the right people find it. Start your promotion today and bring
            your faith-centered gathering to a wider audience.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/login"
              className="rounded-full bg-[#C9A24D] px-8 py-4 font-semibold text-black transition hover:bg-[#E0BB63]"
            >
              Promote Your Event
            </a>

            <a
              href="/promotions"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View Promotion Options
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}