interface LegalSectionProps {
  title: string
  children: React.ReactNode
}

export default function LegalSection({
  title,
  children,
}: LegalSectionProps) {
  return (
    <section className="mb-12 border-b border-white/10 pb-12 last:border-none">
      <h2 className="mb-5 text-2xl font-semibold text-white lg:text-3xl">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-8 text-white/75">
        {children}
      </div>
    </section>
  )
}