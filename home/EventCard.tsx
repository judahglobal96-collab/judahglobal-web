type EventCardProps = {
  title: string;
  date: string;
  location: string;
  image?: string;
  badge: string;
};

export default function EventCard({
  title,
  date,
  location,
  image = "/images/events/fallback-featured-1.png",
  badge,
}: EventCardProps) {
  return (
    <article className="group relative h-[230px] min-w-[310px] overflow-hidden rounded-xl bg-[#071326] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute left-4 top-4 rounded-md bg-[#C4953A] px-3 py-1 text-xs font-bold text-white shadow">
        {badge}
      </div>

      <div className="absolute bottom-5 left-5 right-5 text-white">
        <p className="text-xs font-extrabold tracking-wide">{date}</p>
        <h3 className="mt-1 text-xl font-extrabold leading-tight">{title}</h3>
        <p className="mt-2 text-sm font-medium text-white/90">{location}</p>
      </div>
    </article>
  );
}