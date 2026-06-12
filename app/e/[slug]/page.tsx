import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventShortLinkPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://judahglobal-api-production-b308.up.railway.app/api/v1/public/events/slug/${encodeURIComponent(
      slug
    )}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const eventId =
    data?.event?.event_id ||
    data?.event?.id;

  if (!data?.success || !eventId) {
    notFound();
  }

  redirect(
    `https://app.judahglobal.org/event/${eventId}`
  );
}