export default function AboutPage() {
  const visionItems = [
    "Faith-Based Organizations",
    "Ministries",
    "Churches",
    "Conferences",
    "Concerts",
    "Bible Studies",
    "Bible Schools",
    "Revivals",
    "Community Gatherings",
    "Faith-Based Events",
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-yellow-500">
            About Judah Global
          </p>

          <h1 className="mb-8 text-4xl font-semibold leading-tight md:text-6xl">
            Reconnecting the Global Faith Community.
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Judah Global exists to help people discover meaningful Kingdom
            experiences while giving organizations the tools to reach more
            people. We build the technology that brings the global faith
            community together—so ministries and organizations can focus on
            their mission, and people can focus on discovering what&apos;s
            happening across the Kingdom.
          </p>
        </div>
      </section>

      {/* Interfaith Vision Section */}
      <section className="border-t border-neutral-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-yellow-500">
              Interfaith Vision
            </p>

            <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
              Rooted in Faith. Open to the world.
            </h2>

            <p className="mb-10 max-w-3xl leading-relaxed text-neutral-700">
              Judah Global is founded with a strong faith-centered identity
              while recognizing the global reality that meaningful gatherings
              exist across cultures, communities, and beliefs.
            </p>

            <h3 className="mb-6 text-xl font-semibold text-neutral-900 md:text-2xl">
              Imagine a world where every...
            </h3>

            <ul className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visionItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-black"
                  >
                    ✓
                  </span>

                  <span className="font-semibold text-neutral-900">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mb-4 text-lg leading-relaxed text-neutral-700">
              ...can be discovered from{" "}
              <strong className="font-semibold text-neutral-900">
                one trusted destination.
              </strong>
            </p>

            <p className="text-xl font-semibold text-neutral-900">
              That&apos;s the future we&apos;re building.
            </p>
          </div>
        </div>
      </section>

      {/* Connection and Mission Section */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-semibold">
              Built for connection.
            </h2>

            <p className="mb-5 leading-relaxed text-neutral-700">
              Judah Global was built with a global vision for a global
              audience. Today, there are more opportunities than ever to
              connect through churches, ministries, conferences, concerts,
              Bible schools, podcasts, and community gatherings. The challenge
              isn&apos;t a lack of events—it&apos;s knowing where to find them.
            </p>

            <p className="leading-relaxed text-neutral-700">
              <strong className="font-semibold text-neutral-900">
                Events are more than dates on a calendar.
              </strong>{" "}
              They are opportunities for people to connect, grow, worship,
              celebrate, and experience something that matters.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h3 className="mb-4 text-xl font-semibold">Our Mission</h3>

            <p className="leading-relaxed text-neutral-700">
              To create one trusted destination where the global faith
              community can discover, share, and promote meaningful Kingdom
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-semibold">
            What makes Judah Global different?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="mb-3 text-xl font-semibold text-yellow-500">
                Trusted Events
              </h3>

              <p className="leading-relaxed text-neutral-300">
                Public events go through a review process designed to support
                accuracy, quality, and confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="mb-3 text-xl font-semibold text-yellow-500">
                Global Discovery
              </h3>

              <p className="leading-relaxed text-neutral-300">
                Users can search by city, region, country, category, keyword,
                and event date.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="mb-3 text-xl font-semibold text-yellow-500">
                Promotion Tools
              </h3>

              <p className="leading-relaxed text-neutral-300">
                Sponsors and organizations can increase visibility through
                featured placements, event promotion, and campaign tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            When the right people find the right event, something meaningful
            happens.
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700">
            Judah Global exists to make that connection happen consistently,
            globally, and with purpose.
          </p>
        </div>
      </section>
    </main>
  );
}