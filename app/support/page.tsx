import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A24A]">
          Support Center
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          How Can Judah Global Help?
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Get support for billing, technical issues, event changes, organization
          access, promotional campaigns, and account questions.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Frequently Asked Questions",
            "Contact Support",
            "Technical Support Requests",
            "Billing Questions",
            "Promo Assistance",
            "Event Editing & Updates",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-xl font-bold text-white">{item}</h2>
              <p className="mt-3 leading-7 text-zinc-400">
                Submit a request or review support guidance related to this area.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#C7A24A]/30 bg-black p-6">
          <h2 className="text-2xl font-bold">Need direct help?</h2>

          <p className="mt-3 leading-7 text-zinc-400">
            For event issues, account questions, organization access, or promotional
            placement support, contact the Judah Global team.
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#C7A24A]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#C7A24A]"
            />

            <select className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-[#C7A24A]">
              <option>General Support</option>
              <option>Billing Question</option>
              <option>Technical Issue</option>
              <option>Event Update</option>
              <option>Promotion Assistance</option>
              <option>Organization Access</option>
            </select>

            <textarea
              placeholder="How can we help?"
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#C7A24A]"
            />

            <button
              type="submit"
              className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]"
            >
              Submit Support Request
            </button>
          </form>
        </div>

        <div className="mt-10">
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