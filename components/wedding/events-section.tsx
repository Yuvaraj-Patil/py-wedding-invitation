"use client"

import { useState } from "react"
import { MapPin, Clock } from "lucide-react"

interface WeddingEvent {
  name: string
  date: string
  time: string
  venue: string
  address: string
  description: string
  color: string
}

const events: WeddingEvent[] = [
  {
    name: "Haldi & Mehendi",
    date: "May 4, 2026",
    time: "11:00 AM",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "Haldi and Mehendi ceremony with traditional rituals, colors, and joyful celebrations with family.",
    color: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    name: "Sangeet",
    date: "May 4, 2026",
    time: "8:00 PM",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "An evening filled with music, dance, and celebration as families come together.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    name: "Wedding (Shubh Lagn)",
    date: "May 5, 2026",
    time: "11:00 AM",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "The auspicious wedding ceremony where we begin our forever journey together.",
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    name: "Ashirwad Samaroh & Dinner",
    date: "May 5, 2026",
    time: "7:00 PM onwards",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "Blessings ceremony followed by dinner with family and friends.",
    color: "from-amber-400/20 to-yellow-500/20",
  },
  {
    name: "Reception & Lunch",
    date: "May 10, 2026",
    time: "11:00 AM onwards",
    venue: "Mahadev Mandir Hall",
    address: "Bhadgaon, Kolhapur - 416502",
    description: "A warm reception followed by lunch, celebrating together with family and friends.",
    color: "from-sky-500/20 to-blue-500/20",
  },
]

export function EventsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-40 bg-[var(--burgundy)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[var(--gold)] font-sans text-xs tracking-[0.3em] uppercase block mb-4">
            Join Us For
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[var(--cream)] font-light">
            Wedding Events
          </h2>
          <p className="mt-6 text-[var(--gold-light)]/70 font-sans text-sm max-w-md mx-auto">
            Celebrating love, laughter, and beautiful beginnings
          </p>
        </div>

        {/* Events - Stacked Cards Design */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={event.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-[var(--burgundy-dark)] border border-[var(--gold)]/10 transition-all duration-500 cursor-pointer ${hoveredIndex === index ? "border-[var(--gold)]/40" : ""
                }`}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                {/* Event Number */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 border border-[var(--gold)]/20 group-hover:border-[var(--gold)]/40 transition-colors">
                  <span className="font-serif text-2xl text-[var(--gold)]">0{index + 1}</span>
                </div>

                {/* Event Info */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center">
                  {/* Name & Date */}
                  <div className="md:col-span-1">
                    <h3 className="font-serif text-2xl md:text-3xl text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors">
                      {event.name}
                    </h3>
                    <p className="font-sans text-sm text-[var(--gold-light)]/70 mt-1">{event.date}</p>
                  </div>

                  {/* Time & Venue */}
                  <div className="md:col-span-2 flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex items-center gap-2 text-[var(--gold-light)]/80">
                      <Clock className="w-4 h-4 text-[var(--gold)]" />
                      <span className="font-sans text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[var(--gold-light)]/80">
                      <MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans text-sm block">{event.venue}</span>
                        <span className="font-sans text-xs text-[var(--gold-light)]/50">{event.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description - Shows on Hover */}
                  <div className="md:col-span-1">
                    <p className={`font-sans text-sm text-[var(--cream)]/70 leading-relaxed transition-all duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0 md:opacity-60"
                      }`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block">
                  <svg
                    className={`w-6 h-6 text-[var(--gold)] transition-transform duration-300 ${hoveredIndex === index ? "translate-x-2" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dress Code 
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-[var(--gold)]/30 bg-[var(--burgundy-dark)]/50">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
            <span className="text-[var(--gold)] font-sans text-sm tracking-wider">Dress Code: Traditional Indian Attire</span>
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
          </div>
        </div>*/}
      </div>
    </section>
  )
}
