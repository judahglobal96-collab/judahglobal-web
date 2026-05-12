import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-8">
        <div className="flex items-center gap-4">

        <Image
            src="/judah2-logo.png"
            alt="Judah Global"
            width={220}
            height={60}
            className="h-[56px] w-auto object-contain"
            priority
          />
        </div>

        <nav className="hidden items-center gap-12 text-sm font-semibold text-[#0E1B34] lg:flex">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/major-events">Major Events</a>
          <a href="/promote-your-event">Promote Your Event</a>
          <a href="/resources">Resources</a>
          <a href="/about-us">About Us</a>
          <a href="/contact">Support Center</a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a className="rounded-lg border px-6 py-3 font-semibold" href="/login">
            Log In
          </a>
          <a className="rounded-lg bg-[#0E1B34] px-6 py-3 font-semibold text-white" href="/signup">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}