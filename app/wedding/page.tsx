import { HeroSection } from "@/components/wedding/hero-section"
import { OurStorySection } from "@/components/wedding/our-story-section"
import { EventsSection } from "@/components/wedding/events-section"
import { GallerySection } from "@/components/wedding/gallery-section"
import { AttendanceSection } from "@/components/wedding/attendance-section"
import { WeddingFooter } from "@/components/wedding/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pooja & Yuvaraj - Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Pooja & Yuvaraj",
  robots: { index: false, follow: false },
}

export default function WeddingInvitationPage() {
  return (
    <main className="wedding-theme min-h-screen">
      <HeroSection />
      <OurStorySection />
      <EventsSection />
      <GallerySection />
      <AttendanceSection />
      <WeddingFooter />
    </main>
  )
}
