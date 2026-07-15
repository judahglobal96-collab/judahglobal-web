import Link from "next/link";
import { majorEvents } from "@/data/events";
import EventCard from "./EventCard";

export default function MajorEventsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 pt-12 pb-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E1B34]">
             One trusted destination for the global faith community ☆
          </h2>
          <p className="mt-1 text-base text-gray-500">
            Discover what's happening across the Kingdom!
          </p>
        </div>

        <a
          href="/signup"
          className="text-sm font-extrabold text-[#0E1B34]"
        >
          Click to Enter Judah Global →
        </a>
        
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {majorEvents.map((event) => (
          <Link
          key={event.title}
          href={event.href ?? "https://app.judahglobal.org/event"}        >
          <EventCard {...event} />
        </Link>

        ))}
      </div>
    </section>
  );
}