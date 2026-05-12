export default function TrustStats() {
  const stats = [
    {
      title: "Global Reach",
      subtitle: "USA, Canada, United Kingom, Africa",
      icon: "🌍",
    },
    {
      title: "Community Driven",
      subtitle: "Built for people and purpose",
      icon: "👥",
    },
    {
      title: "Real-Time Discovery",
      subtitle: "Events updated every day",
      icon: "⚡",
    },
  ];

  return (
    <section className="border-t border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl">
                {stat.icon}
              </div>

              <div>
                <p className="font-semibold text-[#0E1B34]">{stat.title}</p>
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}