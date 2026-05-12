// app/contact/page.tsx

import Link from "next/link";
import {
  HelpCircle,
  Mail,
  Wrench,
  CreditCard,
  Megaphone,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const supportEmail = "jgsupport@judahglobal.com";

  const supportCards = [
    {
      title: "General Support",
      description:
        "Questions about accounts, organizations, event submissions, or general platform guidance.",
      icon: HelpCircle,
    },
    {
      title: "Technical Support",
      description:
        "Priority support for event submission issues or active promotional placement display problems.",
      icon: Wrench,
    },
    {
      title: "Billing Questions",
      description:
        "Help with promo purchases, invoices, payments, regional pricing, or billing clarification.",
      icon: CreditCard,
    },
    {
      title: "Promo Assistance",
      description:
        "Guidance for campaigns, flyer dimensions, placement types, media readiness, and visibility.",
      icon: Megaphone,
    },
    {
      title: "Event Editing & Updates",
      description:
        "Support for event changes, cancellations, venue updates, schedule changes, or corrections.",
      icon: CalendarDays,
    },
    {
      title: "Policy & Platform Help",
      description:
        "Questions about approval standards, media rules, regional promotion, and platform requirements.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8AE45]">
            Judah Global Support
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Support Center
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#C9C9D3] md:text-xl">
            Get direct help with billing, technical issues, event changes,
            organization access, promotional support, and account assistance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${supportEmail}`}
              className="inline-flex items-center justify-center rounded-full bg-[#C8AE45] px-7 py-3 text-sm font-bold text-black transition hover:bg-[#E0C85A]"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Support
            </a>

            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-full border border-[#C8AE45]/60 px-7 py-3 text-sm font-bold text-[#C8AE45] transition hover:bg-[#C8AE45]/10"
            >
              View Help Resources
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl transition hover:border-[#C8AE45]/50 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8AE45]/15 text-[#C8AE45]">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-xl font-bold">{item.title}</h2>

                <p className="mt-3 text-sm leading-6 text-[#C9C9D3]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <section className="mt-16 rounded-[2rem] border border-[#C8AE45]/30 bg-[#111111] p-8 md:p-10">
          <h2 className="text-2xl font-bold">Priority Technical Support</h2>

          <p className="mt-4 max-w-4xl text-base leading-7 text-[#C9C9D3]">
            Technical support is defined as problems with event submissions or
            active display of promotional placements. All technical support
            requests receive priority response handling.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-black/40 p-5">
              <h3 className="font-semibold text-[#C8AE45]">Event Submission</h3>
              <p className="mt-2 text-sm text-[#C9C9D3]">
                Submission errors, blocked workflows, or event form issues.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-5">
              <h3 className="font-semibold text-[#C8AE45]">Promo Display</h3>
              <p className="mt-2 text-sm text-[#C9C9D3]">
                Active placement promos not displaying correctly.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-5">
              <h3 className="font-semibold text-[#C8AE45]">Rendering Issues</h3>
              <p className="mt-2 text-sm text-[#C9C9D3]">
                Display, media, layout, or discovery visibility problems.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="text-2xl font-bold">Before Contacting Support</h2>

            <p className="mt-4 text-base leading-7 text-[#C9C9D3]">
              To help us respond quickly, please include the event name,
              organization name, account email, event code if available, a clear
              description of the issue, and screenshots when helpful.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#C9C9D3]">
              <li>• Event name or organization name</li>
              <li>• Account email used on Judah Global</li>
              <li>• Placement type, if promotion-related</li>
              <li>• Region or market selected</li>
              <li>• Screenshot or screen recording, if available</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#C8AE45]/30 bg-[#C8AE45]/10 p-8 md:p-10">
            <h2 className="text-2xl font-bold">Contact Email</h2>

            <p className="mt-4 text-base leading-7 text-[#C9C9D3]">
              For all support categories, please contact Judah Global Support at:
            </p>

            <a
              href={`mailto:${supportEmail}`}
              className="mt-6 inline-flex break-all text-xl font-bold text-[#C8AE45] hover:underline"
            >
              {supportEmail}
            </a>

            <a
              href={`mailto:${supportEmail}`}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#C8AE45] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#E0C85A]"
            >
              Send Support Email
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}