'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white relative">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="/">
            <Image
              src="/judah2-logo.png"
              alt="Judah Global"
              width={220}
              height={60}
              className="h-[56px] w-auto object-contain"
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 text-sm font-semibold text-[#0E1B34] lg:flex">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/major-events">Major Events</a>
          <a href="/promote-your-event">Promote Your Event</a>
          <a href="/resources">Resources</a>
          <a href="/about-us">About Us</a>
          <a href="/contact">Support Center</a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            className="rounded-lg border border-[#0E1B34] px-6 py-3 font-semibold text-[#0E1B34]"
            href="/login"
          >
            Log In
          </a>

          <a
            className="rounded-lg bg-[#0E1B34] px-6 py-3 font-semibold text-white"
            href="/signup"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border lg:hidden"
          aria-label="Toggle Navigation"
        >
          <span className="text-2xl">
            {mobileOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col px-6 py-5">
            <a
              href="/"
              className="border-b py-4 font-semibold text-[#0E1B34]"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="/events"
              className="border-b py-4 font-semibold text-[#0E1B34]"
              onClick={closeMenu}
            >
              Events
            </a>

            <a
              href="/major-events"
              className="border-b py-4 font-semibold text-[#0E1B34]"
              onClick={closeMenu}
            >
              Major Events
            </a>

            <a
              href="/promote-your-event"
              className="border-b py-4 font-semibold text-[#0E1B34]"
              onClick={closeMenu}
            >
              Promote Your Event
            </a>

            <a
              href="/resources"
              className="border-b py-4 font-semibold text-[#0E1B34]"
              onClick={closeMenu}
            >
              Resources
            </a>

            <a
              href="/about-us"
              className="border-b py-4 font-semibold text-[#0E1B34]"
              onClick={closeMenu}
            >
              About Us
            </a>

            <a
              href="/contact"
              className="border-b py-4 font-semibold text-[#0E1B34]"
              onClick={closeMenu}
            >
              Support Center
            </a>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="/login"
                className="rounded-lg border border-[#0E1B34] px-5 py-3 text-center font-semibold text-[#0E1B34]"
                onClick={closeMenu}
              >
                Log In
              </a>

              <a
                href="/signup"
                className="rounded-lg bg-[#0E1B34] px-5 py-3 text-center font-semibold text-white"
                onClick={closeMenu}
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}