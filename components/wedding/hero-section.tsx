"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function HeroSection() {
  const weddingDate = new Date("2026-05-05T10:00:00")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = weddingDate.getTime() - now.getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 h-[50vh] lg:h-screen relative">
          <Image
            src="/images/prewedding-1.jpg"
            alt="Pre-wedding photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--burgundy)]/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--burgundy)]/50" />
          
          {/* Floating Date Badge */}
          <div className="absolute bottom-8 left-8 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:left-auto lg:translate-x-1/2 z-20">
            <div className="bg-[var(--gold)] text-[var(--burgundy)] px-6 py-8 text-center shadow-2xl">
              <span className="block font-serif text-4xl font-light">05</span>
              <span className="block font-sans text-xs tracking-[0.2em] uppercase mt-1">May</span>
              <span className="block font-sans text-sm mt-1">2026</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 bg-[var(--burgundy)] flex items-center justify-center p-8 lg:p-16 min-h-[50vh] lg:min-h-screen">
          <div className="max-w-lg w-full">
            {/* Decorative Line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-[var(--gold)]/30" />
              <span className="text-[var(--gold)] font-sans text-xs tracking-[0.3em] uppercase">Wedding Invitation</span>
              <div className="h-px flex-1 bg-[var(--gold)]/30" />
            </div>

            {/* Names with Creative Typography */}
            <div className="text-center mb-8">
              <h1 className="font-serif text-6xl lg:text-8xl text-[var(--cream)] font-light tracking-wide">
                P
                <span className="text-[var(--gold)]">&</span>
                Y
              </h1>
              <div className="mt-4 space-y-1">
                <p className="font-serif text-2xl lg:text-3xl text-[var(--cream)] font-light">Pooja</p>
                <p className="text-[var(--gold)] font-sans text-xs tracking-[0.2em]">TOGETHER WITH</p>
                <p className="font-serif text-2xl lg:text-3xl text-[var(--cream)] font-light">Yuvaraj</p>
              </div>
            </div>

            {/* Invitation Text */}
            <p className="text-center text-[var(--gold-light)] font-sans text-sm tracking-wide mb-12">
              Request the pleasure of your company at the celebration of their marriage
            </p>

            {/* Countdown Timer - Creative Style */}
            {mounted && (
              <div className="grid grid-cols-4 gap-2 mb-12">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hrs" },
                  { value: timeLeft.minutes, label: "Min" },
                  { value: timeLeft.seconds, label: "Sec" },
                ].map((item, index) => (
                  <div 
                    key={item.label} 
                    className="relative group"
                  >
                    <div className="bg-[var(--burgundy-dark)] border border-[var(--gold)]/20 p-4 text-center transition-all duration-300 hover:border-[var(--gold)]/60 hover:bg-[var(--burgundy-dark)]/80">
                      <span className="block font-serif text-3xl lg:text-4xl text-[var(--gold)]">
                        {item.value.toString().padStart(2, "0")}
                      </span>
                      <span className="block font-sans text-[10px] tracking-[0.15em] uppercase text-[var(--cream)]/60 mt-1">
                        {item.label}
                      </span>
                    </div>
                    {index < 3 && (
                      <span className="absolute top-1/2 -right-1 -translate-y-1/2 text-[var(--gold)]/40 font-light text-xl hidden lg:block">:</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Scroll Indicator */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <span className="text-[var(--gold)]/60 font-sans text-xs tracking-wider">Scroll</span>
                <svg className="w-5 h-5 text-[var(--gold)]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-[var(--gold)]/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-[var(--gold)]/10 rotate-12 hidden lg:block" />
    </section>
  )
}
