"use client";

import Link from "next/link";
import { useMemo, useState} from "react";

export default function ResourcesPage() {

  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Event Submission Resources",
      description:
        "Guides to help individuals and organizations submit, manage, and maintain accurate event listings.",
      items: [
        "How to Submit an Event",
        "Event Approval Guidelines",
        "Event Image Requirements",
        "Recurring Event Setup Guide",
        "Timezone & Global Event Setup",
        "Featured Event Optimization Tips",
      ],
      cta: " View Event Submission Policy",
      href: "/event-submission-resource-policy",
    },
    {
      title: "Organization Resources",
      description:
        "Support for ministries, synagogues, nonprofits, conferences, and faith-based organizations using Judah Global.",
      items: [
        "Organization Activation Guide",
        "Organization Dashboard Overview",
        "Campaign Builder Guide",
        "Major Events Promotion Guide",
        "Team & Admin Management",
        "Premium Placement Overview",
      ],
      cta: "Explore Organization Benefits",
      href: "/organization-resource-policy",
    },
    {
      title: "Platform Policies & Standards",
      description:
        "Operational standards for event quality, approvals, media, promotions, safety, and regional rules.",
      items: [
        "Event Approval Standards",
        "Media Moderation Policy",
        "Promotional Placement Standards",
        "Event Accuracy Standards",
        "Regional Promotion Standards",
        "Notification & Communication Rules",
      ],
      cta: "View Platform Standards",
      href: "/platform-policies-standards",
    },
    {
      title: "Support & Help Center",
      description:
        "Direct help for billing, technical issues, event changes, organization access, and account support.",
      items: [
        "Frequently Asked Questions",
        "Contact Support",
        "Technical Support Requests",
        "Billing Questions",
        "Promo Assistance",
        "Event Editing & Updates",
      ],
      cta: "View Support & Help Center Policy",
      href: "/support-help-center-policy",
    },
  ];

  const legalDocuments = [
    {
      title: "Terms of Service",
      category: "Platform Rules",
      summary:
        "Defines Judah Global account usage, event responsibilities, platform rights, limitations, and user obligations.",
      href: "/resources/terms",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Privacy Policy",
      category: "Data Protection",
      summary:
        "Explains how Judah Global collects, uses, stores, and protects user, sponsor, and organization data.",
      href: "/resources/privacy",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Community Standards",
      category: "Safety & Integrity",
      summary:
        "Outlines acceptable behavior, event integrity expectations, prohibited content, and platform conduct rules.",
      href: "/resources/community-standards",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Refund & Promotions Policy",
      category: "Payments",
      summary:
        "Covers promotional purchases, campaign payments, refund rules, placement policies, and billing expectations.",
      href: "/resources/refund-policy",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Media & Content Policy",
      category: "Content Moderation",
      summary:
        "Defines flyer requirements, sponsor logo usage, uploaded media rules, copyright expectations, and moderation rights.",
      href: "/resources/media-content-policy",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Organization Verification Policy",
      category: "Organizations",
      summary:
        "Explains organization verification, sponsor authenticity, approval standards, and brand representation rules.",
      href: "/resources/organization-verification",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Email & Notification Policy",
      category: "Communications",
      summary:
        "Covers automated event notifications, regional targeting, promotional emails, user preferences, and opt-outs.",
      href: "/resources/email-notifications",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Copyright / DMCA Policy",
      category: "Intellectual Property",
      summary:
        "Explains copyright reporting, intellectual property protections, takedown procedures, and content ownership rules.",
      href: "/resources/copyright-dmca",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Accessibility Statement",
      category: "Accessibility",
      summary:
        "Outlines Judah Global’s commitment to accessibility, usability, inclusion, and continuous platform improvement.",
      href: "/resources/accessibility",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Disclaimer & Liability Notice",
      category: "Platform Notice",
      summary:
        "Clarifies sponsor responsibility, event accuracy limitations, third-party event obligations, and platform liability boundaries.",
      href: "/resources/disclaimer-liability",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Intellectual Property Rights",
      category: "Platform Notice",
      summary:
        "Explains ownership of platform content, trademarks, copyright protections, and rules for using Judah Global materials and branding.",
      href: "/resources/intellectual-property-rights",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
    {
      title: "Use of Cookies",
      category: "Platform Notice",
      summary:
        "Describes how Judah Global uses cookies and similar technologies to enhance user experience, analyze traffic, and support platform functionality.",
      href: "/resources/use-of-cookies",
      version: "Version 1.0",
      effective: "Effective 2026",
    },
  ];

  const filters = [
    "Events",
    "Organizations",
    "Policies",
    "Legal",
    "Payments",
    "Privacy",
    "Support",
  ];

  const normalizedQuery = searchQuery.toLowerCase().trim();

const filteredCategories = useMemo(() => {
  if (!normalizedQuery) return categories;

  return categories.filter((category) => {
    return (
      category.title.toLowerCase().includes(normalizedQuery) ||
      category.description.toLowerCase().includes(normalizedQuery) ||
      category.items.some((item) =>
        item.toLowerCase().includes(normalizedQuery)
      )
    );
  });
}, [normalizedQuery, categories]);

const filteredLegalDocuments = useMemo(() => {
  if (!normalizedQuery) return legalDocuments;

  return legalDocuments.filter((doc) => {
    return (
      doc.title.toLowerCase().includes(normalizedQuery) ||
      doc.category.toLowerCase().includes(normalizedQuery) ||
      doc.summary.toLowerCase().includes(normalizedQuery)
    );
  });
}, [normalizedQuery, legalDocuments]);

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="relative overflow-hidden border-b border-[#C7A24A]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C7A24A]/20 via-black to-black" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C7A24A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A24A]">
            Judah Global Resources
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Resources, Policies & Platform Support
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Access event guidance, organization support, platform standards,
            legal policies, and help resources for the Judah Global ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#resources"
              className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]"
            >
              Browse Resources
            </Link>

            <Link
              href="#legal"
              className="rounded-full border border-[#C7A24A]/60 px-7 py-3 font-semibold text-[#C7A24A] transition hover:bg-[#C7A24A]/10"
            >
              System Policies
            </Link>

            <Link
              href="/submit-event"
              className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Submit an Event
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources, policies, guides, legal documents, and support topics..."
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#C7A24A]"
          />

        <button
              className="rounded-2xl bg-[#C7A24A] px-8 py-4 font-semibold text-black transition hover:bg-[#d8b95e]"
          >
                Search
        </button>
        
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#C7A24A] hover:text-[#C7A24A]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C7A24A]">
            Resource Library
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Find the support you need
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Browse current Judah Global resources for event submission,
            organization access, platform standards, and support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
              {filteredCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#C7A24A]/60 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C7A24A]/15">
                <span className="h-4 w-4 rounded-full bg-[#C7A24A]" />
              </div>

              <h3 className="text-xl font-bold">{category.title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {category.description}
              </p>

              <ul className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C7A24A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={category.href}
                className="mt-7 inline-flex rounded-full border border-[#C7A24A]/50 px-5 py-2.5 text-sm font-semibold text-[#C7A24A] transition hover:bg-[#C7A24A] hover:text-black"
              >
                {category.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="legal"
        className="border-y border-[#C7A24A]/20 bg-gradient-to-b from-white/[0.03] to-black"
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C7A24A]">
                Platform Trust & Governance
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Legal Policies & Platform Standards
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                Review official Judah Global policies governing event
                submissions, promotions, payments, moderation, user safety,
                organizational participation, media usage, communications, and
                platform operations.
              </p>
            </div>

            <div className="rounded-3xl border border-[#C7A24A]/20 bg-black/60 p-6">
              <p className="text-sm font-semibold text-[#C7A24A]">
                Trust Infrastructure
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These documents help protect users, sponsors, organizations,
                attendees, and the Judah Global platform while creating
                transparent expectations for participation.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredLegalDocuments.map((doc) => (
                <article
                key={doc.title}
                className="rounded-3xl border border-white/10 bg-black p-6 transition hover:border-[#C7A24A]/60 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#C7A24A]/15 px-3 py-1 text-xs font-semibold text-[#C7A24A]">
                    {doc.category}
                  </span>

                  <span className="text-xs text-zinc-500">{doc.version}</span>
                </div>

                <h3 className="text-xl font-bold">{doc.title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {doc.summary}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="text-xs text-zinc-500">{doc.effective}</span>

                  <Link
                    href={doc.href}
                    className="text-sm font-semibold text-[#C7A24A] transition hover:text-[#d8b95e]"
                  >
                    Read Policy →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
        {filteredCategories.length === 0 &&
          filteredLegalDocuments.length === 0 && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
      <h3 className="text-2xl font-bold text-white">
        No resources found
      </h3>

          <p className="mt-3 text-zinc-400">
            Try searching for policies, events, organizations,
            privacy, payments, support, or legal topics.
          </p>
        </div>
      )}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#C7A24A]/30 bg-gradient-to-br from-[#C7A24A]/15 via-white/[0.04] to-black p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C7A24A]">
                Stay Connected
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Receive platform updates and event reminders
              </h2>

              <p className="mt-4 leading-7 text-zinc-300">
                Be the first to know about Judah Global announcements directly
                to your inbox.
              </p>
            </div>

            <form className="space-y-4">
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

              <input
                type="text"
                placeholder="Region"
                className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#C7A24A]"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#C7A24A] px-6 py-4 font-semibold text-black transition hover:bg-[#d8b95e]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C7A24A]">
            Ready to Begin?
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold md:text-5xl">
            Share your event with communities around the world
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
            Join organizations, sponsors, and businesses using Judah Global to
            expand their reach and impact.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/submit-event"
              className="rounded-full bg-[#C7A24A] px-7 py-3 font-semibold text-black transition hover:bg-[#d8b95e]"
            >
              Submit an Event
            </Link>

            <Link
              href="/organizations"
              className="rounded-full border border-[#C7A24A]/60 px-7 py-3 font-semibold text-[#C7A24A] transition hover:bg-[#C7A24A]/10"
            >
              Activate Organization Access
            </Link>

            <Link
              href="/support"
              className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}