import { CalendarDays, Clock, MapPin } from "lucide-react"

interface WeddingEvent {
  name: string
  date: string
  time: string
  venue: string
  address: string
  description: string
}

const events: WeddingEvent[] = [
  {
    name: "Haldi & Mehendi",
    date: "May 4, 2026",
    time: "11:00 AM",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "Haldi and Mehendi ceremony with traditional rituals, colors, and joyful celebrations with family.",
  },
  {
    name: "Sangeet",
    date: "May 4, 2026",
    time: "8:00 PM",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "An evening filled with music, dance, and celebration as families come together.",
  },
  {
    name: "Wedding (Shubh Lagn)",
    date: "May 5, 2026",
    time: "11:00 AM",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "The auspicious wedding ceremony where we begin our forever journey together.",
  },
  {
    name: "Ashirwad Samaroh & Dinner",
    date: "May 5, 2026",
    time: "7:00 PM onwards",
    venue: "Anand Marriage Garden",
    address: "Bhikangaon, Madhya Pradesh - 451331",
    description: "Blessings ceremony followed by dinner with family and friends.",
  },
  {
    name: "Reception & Lunch",
    date: "May 10, 2026",
    time: "11:00 AM onwards",
    venue: "Mahadev Mandir Hall",
    address: "Bhadgaon, Kolhapur - 416502",
    description: "A warm reception followed by lunch, celebrating together with family and friends.",
  },
]

export function EventsSection() {
  return (
    <section className="royal-dark py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--gold)]/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="royal-divider text-[var(--gold)] font-sans text-xs tracking-[0.3em] uppercase mb-5">
            Join Us For
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[var(--cream)] font-light">
            Ceremony Program
          </h2>
          <p className="mt-6 text-[var(--gold-light)]/75 font-sans text-sm max-w-xl mx-auto leading-7">
            A royal celebration across rituals, music, blessings, and togetherness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {events.map((event, index) => (
            <article
              key={event.name}
              className="group relative border border-[var(--gold)]/22 bg-[var(--burgundy-dark)]/72 p-5 shadow-xl shadow-black/10 transition-colors duration-300 hover:border-[var(--gold)]/50"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-[var(--gold)]/35">
                  <span className="font-serif text-xl text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="h-px flex-1 bg-[var(--gold)]/25" />
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[var(--cream)] transition-colors group-hover:text-[var(--gold-light)]">
                {event.name}
              </h3>

              <div className="mt-5 space-y-3 font-sans text-sm text-[var(--gold-light)]/82">
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-4 h-4 text-[var(--gold)]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[var(--gold)]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[var(--cream)]/88">{event.venue}</span>
                    <span className="block text-xs text-[var(--gold-light)]/55">{event.address}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 border-t border-[var(--gold)]/15 pt-5 font-sans text-sm leading-7 text-[var(--cream)]/68">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
