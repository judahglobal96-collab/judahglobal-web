// components/home/QuickActions.tsx
const actions = [
  { title: "Submit Your Event", subtitle: "Share your event with the world", href: "/submit-event" },
  { title: "Promote Your Event", subtitle: "Get more eyes on your event", href: "/promote" },
  { title: "Major Events", subtitle: "High-impact events worldwide", href: "/major-events" },
  { title: "Browse All Events", subtitle: "Explore events near and far", href: "/events" },
];

export default function QuickActions() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-4">
      {actions.map((action) => (
        <a
          key={action.title}
          href={action.href}
          className="rounded-xl bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="font-bold text-[#0E1B34]">{action.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{action.subtitle}</p>
        </a>
      ))}
    </div>
  );
}