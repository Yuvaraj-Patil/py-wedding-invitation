import { HeroSection } from "@/components/wedding/hero-section"
import { OurStorySection } from "@/components/wedding/our-story-section"
import { EventsSection } from "@/components/wedding/events-section"
import { GallerySection } from "@/components/wedding/gallery-section"
import { AttendanceSection } from "@/components/wedding/attendance-section"
import { WeddingFooter } from "@/components/wedding/footer"

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <EventsSection />
      <GallerySection />
      <AttendanceSection />
      <WeddingFooter />
    </main>
  )
}
