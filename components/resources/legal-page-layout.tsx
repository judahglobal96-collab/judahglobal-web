import Link from 'next/link'

interface LegalPageLayoutProps {
  category: string
  title: string
  effectiveDate: string
  lastUpdated?: string
  description: string
  children: React.ReactNode
}

export default function LegalPageLayout({
  category,
  title,
  effectiveDate,
  lastUpdated,
  description,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="mb-6 flex items-center gap-3 text-sm text-[#C6A55C]">
            <Link
              href="/resources"
              className="transition hover:text-[#E0BC68]"
            >
              Resources
            </Link>

            <span className="text-white/30">/</span>

            <span>{category}</span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-[#C6A55C]/30 bg-[#C6A55C]/10 px-4 py-1 text-sm font-medium text-[#D6B46A]">
              {category}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/50">
              <div>
                <span className="font-medium text-white/70">
                  Effective:
                </span>{' '}
                {effectiveDate}
              </div>

              {lastUpdated && (
                <div>
                  <span className="font-medium text-white/70">
                    Last Updated:
                  </span>{' '}
                  {lastUpdated}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-[0_0_40px_rgba(0,0,0,0.45)] lg:p-14">
        <div className="max-w-none">
              {children}
          </div>
        </div>
      </div>
    </div>
  )
}