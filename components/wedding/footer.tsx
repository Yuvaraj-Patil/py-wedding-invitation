import { Heart, Instagram, Mail, Phone } from "lucide-react"

export function WeddingFooter() {
  return (
    <footer className="royal-dark relative overflow-hidden">
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--gold)]/12 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif text-[30vw] text-white/[0.02] font-light whitespace-nowrap">
          P & Y
        </span>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="mb-14 text-center">
            <span className="royal-divider text-[var(--gold)] font-sans text-xs tracking-[0.3em] uppercase mb-5">
              With Gratitude
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--cream)] font-light">
              See You At The Celebration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-y border-[var(--gold)]/18 py-10">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl text-[var(--cream)] font-light mb-4">
                Pooja
                <span className="text-[var(--gold)]"> & </span>
                Yuvaraj
              </h3>
              <p className="text-[var(--gold-light)]/70 font-sans text-sm tracking-wider">
                May 5th, 2026 | Bhikangaon, Madhya Pradesh.
              </p>
            </div>

            <div className="md:text-center">
              <p className="text-[var(--gold)] font-sans text-xs tracking-[0.2em] uppercase mb-6">Get in Touch</p>
              <div className="space-y-3">
                <a
                  href="tel:+919860080676"
                  className="flex items-center md:justify-center gap-3 text-[var(--gold-light)] hover:text-[var(--gold)] transition-colors font-sans text-sm group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Yuvaraj: +91 9860080676</span>
                </a>
                <a
                  href="tel:+917999747718"
                  className="flex items-center md:justify-center gap-3 text-[var(--gold-light)] hover:text-[var(--gold)] transition-colors font-sans text-sm group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Pooja: +91 7999747718</span>
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-[var(--gold)] font-sans text-xs tracking-[0.2em] uppercase mb-6">Follow Our Journey</p>
              <div className="flex gap-3 md:justify-end mb-6">
                <a
                  href="#"
                  className="w-12 h-12 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--burgundy)] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:yuvarajpatil79@gmail.com"
                  className="w-12 h-12 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--burgundy)] transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-[var(--gold-light)] font-serif text-2xl italic">
                #PoojaWedYuvaraj
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--gold)]/10">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--cream)]/40 font-sans text-xs flex items-center gap-2">
              Made with <Heart className="w-3 h-3 text-[var(--gold)] fill-[var(--gold)]" /> for our special day
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rotate-45 bg-[var(--gold)]/30" />
              <span className="text-[var(--cream)]/40 font-sans text-xs">See you at the celebration</span>
              <span className="w-2 h-2 rotate-45 bg-[var(--gold)]/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
