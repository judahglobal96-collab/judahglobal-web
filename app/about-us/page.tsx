export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="bg-black text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 mb-6">
            About Judah Global
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Connecting people to meaningful events around the world.
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            Judah Global is a global event discovery and promotion platform built
            to help people find trusted faith-based, community, cultural, and
            major events with clarity, purpose, and ease.

          </p>
        </div>
      </section>

          <section className="bg-white px-6 py-20 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 mb-6">
            Interfaith Vision
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Rooted in Faith. Open to the world.
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-5">
            Judah Global is founded with a strong faith-centered identity, while
            recognizing the global reality that meaningful gatherings exist across
            cultures, communities, and beliefs.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-5">
            Our platform is built to support the discovery of events that bring
            people together—whether through worship, service, learning, culture,
            or community impact—without limiting visibility to a single expression
            of faith.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            We believe respect, clarity, and structure create space for people to
            engage with what matters to them most, while honoring the diversity of
            gatherings happening around the world.
          </p>
        </div>
      </div>
    </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Built for connection.
            </h2>

            <p className="text-neutral-700 leading-relaxed mb-5">
              Judah Global was created to make meaningful gatherings more visible
              and accessible. Whether someone is searching for a weekly service,
              conference, community gathering, or major event, our platform helps
              them discover what is happening near them and around the world.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              We believe events are more than dates on a calendar. They are
              opportunities for people to connect, grow, worship, celebrate, and
              experience something that matters.
            </p>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-neutral-700 leading-relaxed">
              To create a trusted global platform where individuals,
              organizations, and communities can publish, promote, and discover
              meaningful events with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">
            What makes Judah Global different?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">
                Trusted Events
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Public events go through a review process designed to support
                accuracy, quality, and confidence.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">
                Global Discovery
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Users can search by city, region, country, category, keyword,
                and event date.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">
                Promotion Tools
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Sponsors and organizations can increase visibility through
                featured placements, major event promotion, and campaign tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            When the right people find the right event, something meaningful
            happens.
          </h2>

          <p className="text-neutral-700 leading-relaxed text-lg">
            Judah Global exists to make that connection happen consistently,
            globally, and with purpose.
          </p>
        </div>
      </section>
    </main>
  );
}