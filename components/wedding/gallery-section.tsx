"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
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
    <section className="royal-light py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--gold)]/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="royal-divider text-[var(--gold-deep)] font-sans text-xs tracking-[0.3em] uppercase mb-5">
            Moments We Treasure
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[var(--burgundy)] font-light leading-none">
            Journey <span className="italic text-[var(--gold-deep)]">Gallery</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-7 text-[var(--muted-foreground)]">
            A few cherished glimpses from our story, from friendship to forever, through the moments we were lucky enough to capture.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[var(--gold)]/55" />
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[var(--gold-deep)]">
              {galleryCount} Photos
            </span>
            <span className="h-px w-16 bg-[var(--gold)]/55" />
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-5">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative mb-3 md:mb-5 block w-full break-inside-avoid border border-[var(--gold)]/24 bg-white/80 p-2 text-left shadow-lg shadow-[var(--burgundy)]/6 transition-colors duration-300 hover:border-[var(--gold)]/60"
              aria-label={`Open photo ${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-[var(--burgundy)]/0 group-hover:bg-[var(--burgundy)]/58 transition-all duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 border border-[var(--cream)] flex items-center justify-center text-[var(--cream)]">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 border border-[var(--gold)]/45 bg-[var(--burgundy-dark)]/78 px-2 py-1 font-serif text-sm text-[var(--gold-light)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-[var(--burgundy-dark)]/96 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-[var(--cream)]/70 hover:text-[var(--cream)] transition-colors z-20"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            type="button"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--cream)]/70 hover:text-[var(--cream)] hover:border-[var(--gold)]/60 transition-all z-20"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--cream)]/70 hover:text-[var(--cream)] hover:border-[var(--gold)]/60 transition-all z-20"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--gold-light)]/80 font-sans text-sm tracking-wider">
            {selectedIndex + 1} / {galleryCount}
          </div>
        </div>
      )}
    </section>
  )
}
