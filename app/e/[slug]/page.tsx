import { notFound, redirect } from "next/navigation";

export default async function EventSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `${process.env.API_URL}/public/events/slug/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const event = await res.json();

  redirect(
    `https://app.judahglobal.org/event/${event.id}`
  );
}