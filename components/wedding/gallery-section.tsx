"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galleryImages } from "@/lib/wedding-images"

const galleryCount = galleryImages.length

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section className="py-24 md:py-40 bg-[var(--cream)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23722F37' fill-opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "30px 30px"
      }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header - Creative Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div className="relative">
            <span className="absolute -top-8 -left-4 font-serif text-8xl text-[var(--burgundy)]/5">01</span>
            <span className="text-[var(--gold)] font-sans text-xs tracking-[0.3em] uppercase block mb-4 relative z-10">
              Moments We Treasure
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--burgundy)] font-light leading-none relative z-10">
              An Eternal
              <br />
              <span className="italic text-[var(--gold)]">Gallery</span>
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 flex items-center gap-4">
            <span className="font-sans text-sm text-[var(--muted-foreground)]">{galleryCount} Photos</span>
            <div className="h-px w-16 bg-[var(--gold)]" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-5">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="relative mb-3 md:mb-5 block w-full break-inside-avoid overflow-hidden bg-[var(--burgundy)]/5 text-left group cursor-pointer"
              aria-label={`Open photo ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--burgundy)]/0 group-hover:bg-[var(--burgundy)]/60 transition-all duration-500" />

              {/* View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-[var(--cream)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--cream)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Image Number */}
              <span className="absolute bottom-4 right-4 font-serif text-lg text-white/0 group-hover:text-white/80 transition-all duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-20"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            type="button"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all z-20"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all z-20"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative h-[82vh] w-[min(92vw,1100px)] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-sans text-sm tracking-wider">
            {selectedIndex + 1} / {galleryCount}
          </div>
        </div>
      )}
    </section>
  )
}
