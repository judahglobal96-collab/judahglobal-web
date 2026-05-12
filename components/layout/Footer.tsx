import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* Footer Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#1B2235]/70 mb-4">
          <Link href="/resources">Resources</Link>
          <Link href="/resources/terms">Terms</Link>
          <Link href="/resources/privacy">Privacy</Link>
          <Link href="/resources/refund-policy">Refund Policy</Link>
          <Link href="/resources/community-standards">
            Community Standards
          </Link>
          <Link href="/contact">Support</Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-[#1B2235]/70">
          © {new Date().getFullYear()} Judah Global. All rights reserved.
        </div>

      </div>
    </footer>
  );
}