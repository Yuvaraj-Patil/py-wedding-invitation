"use client"

import { useState } from "react"
import { Check, X, Heart, Sparkles } from "lucide-react"

export function AttendanceSection() {
  const [response, setResponse] = useState<"attending" | "not-attending" | null>(null)
  const [showMessage, setShowMessage] = useState(false)

  const handleResponse = (attending: boolean) => {
    setResponse(attending ? "attending" : "not-attending")
    setShowMessage(true)
  }

  return (
    <section className="royal-dark relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--gold)]/15 pointer-events-none" />
      <div className="absolute left-1/2 top-12 h-px w-[min(78vw,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--gold)]/35 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="royal-frame max-w-3xl mx-auto p-6 text-center sm:p-10 md:p-12">
          <div className="mb-10">
            <span className="royal-divider text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-6">
              Your Presence
            </span>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-[var(--gold)]/40 text-[var(--gold)]">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--cream)] mb-6 text-balance">
              Will You Be Joining Us?
            </h2>
            <p className="mx-auto max-w-xl text-[var(--gold-light)]/78 text-base leading-7">
              Your presence would mean the world to us on our special day
            </p>
          </div>

          {!showMessage ? (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                type="button"
                onClick={() => handleResponse(true)}
                className="group relative w-64 border border-[var(--gold)] bg-[var(--gold)] py-5 text-[var(--burgundy-dark)] font-medium tracking-wide hover:bg-[var(--gold-light)] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Check className="w-5 h-5" />
                  Joyfully Accept
                </span>
              </button>

              <span className="text-[#C9A962]/50 font-serif text-xl">or</span>

              <button
                type="button"
                onClick={() => handleResponse(false)}
                className="group relative w-64 border border-[var(--gold)]/35 py-5 text-[var(--cream)] font-medium tracking-wide hover:border-[var(--gold)]/70 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  <X className="w-5 h-5" />
                  Regretfully Decline
                </span>
              </button>
            </div>
          ) : (
            <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
              {response === "attending" ? (
                <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/35 p-8 md:p-10 backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[var(--gold)] flex items-center justify-center">
                      <Heart className="w-8 h-8 text-[var(--burgundy-dark)] fill-current" />
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-[var(--gold)] mb-4">
                    We&apos;re Thrilled!
                  </h3>
                  <p className="text-[var(--cream)]/80 text-lg mb-6">
                    Thank you for being part of our celebration. We can&apos;t wait to see you!
                  </p>
                  <p className="text-[var(--gold)] text-sm tracking-wide">
                    See you on May 5th, 2026
                  </p>
                </div>
              ) : (
                <div className="bg-[var(--cream)]/5 border border-[var(--cream)]/20 p-8 md:p-10 backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[var(--cream)]/10 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-[var(--cream)]/60" />
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-[var(--cream)] mb-4">
                    We&apos;ll Miss You
                  </h3>
                  <p className="text-[var(--cream)]/70 text-lg mb-6">
                    We understand and appreciate you letting us know. You&apos;ll be in our thoughts!
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowMessage(false)}
                    className="text-[var(--gold)] text-sm tracking-wide hover:underline"
                  >
                    Change Response
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--gold)]/50" />
            <div className="w-2 h-2 rotate-45 bg-[var(--gold)]/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--gold)]/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
