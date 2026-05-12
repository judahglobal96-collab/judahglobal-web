import HeroSection from "@/home/HeroSection";
import TrustStats from "@/home/TrustStats";
import MajorEventsSection from "@/home/MajorEventsSection";
import FeaturedEventsSection from "@/home/FeaturedEventsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0E1B34]">
      <HeroSection />
      <TrustStats />
      <MajorEventsSection />
      <FeaturedEventsSection />
    </main>
  );
}