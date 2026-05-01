"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { heroImage } from "@/lib/wedding-images"

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

  const countdown = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ]

  return (
    <section className="royal-dark relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--gold)]/15 pointer-events-none" />

      <div className="relative grid min-h-[100svh] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="relative min-h-[48svh] overflow-hidden bg-[var(--burgundy-dark)]/55 sm:min-h-[58svh] lg:min-h-[100svh]">
          <Image
            src={heroImage.src}
            alt=""
            fill
            className="scale-110 object-cover opacity-35 blur-2xl"
            sizes="(max-width: 1024px) 100vw, 46vw"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--burgundy-dark)]/90 via-[var(--burgundy)]/25 to-black/10 lg:bg-gradient-to-r lg:from-black/10 lg:via-[var(--burgundy)]/15 lg:to-[var(--burgundy-dark)]/75" />

          <div className="relative z-10 flex min-h-[48svh] items-center justify-center px-5 py-8 sm:min-h-[58svh] sm:px-8 lg:min-h-[100svh] lg:px-12">
            <div className="royal-frame relative w-full max-w-[500px] p-3 sm:p-4">
              <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-[var(--gold)]/70" />
              <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-[var(--gold)]/70" />
              <div className="relative z-10 aspect-[3/4] w-full overflow-hidden bg-[var(--burgundy-dark)]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) min(88vw, 500px), 38vw"
                  priority
                />
              </div>
              <div className="absolute -right-2 top-8 z-20 border border-[var(--gold)]/55 bg-[var(--gold)] px-4 py-5 text-center text-[var(--burgundy-dark)] shadow-xl sm:-right-6">
                <span className="block font-serif text-3xl leading-none">05</span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.22em]">May</span>
                <span className="mt-1 block font-sans text-xs">2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[52svh] items-center px-6 py-10 sm:px-10 lg:min-h-[100svh] lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-2xl text-center lg:text-left">
            <div className="royal-divider lg:justify-start">
              <span className="text-[var(--gold)] font-sans text-xs tracking-[0.28em] uppercase">
                Wedding Invitation
              </span>
            </div>

            <h1 className="mt-7 font-serif text-5xl font-light leading-[0.92] text-[var(--cream)] sm:text-7xl xl:text-8xl">
              <span className="block">Pooja</span>
              <span className="block text-4xl text-[var(--gold)] sm:text-6xl xl:text-7xl">&amp;</span>
              <span className="block">Yuvaraj</span>
            </h1>

            <div className="mt-6 flex flex-col items-center gap-2 font-sans text-sm tracking-[0.16em] text-[var(--gold-light)]/85 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <span>May 5, 2026</span>
              <span className="hidden h-1 w-1 rotate-45 bg-[var(--gold)] sm:block" />
              <span>Bhikangaon, Madhya Pradesh</span>
            </div>

            <p className="mx-auto mt-6 max-w-[21rem] text-center font-serif text-xl leading-8 text-[var(--cream)]/90 sm:max-w-xl sm:text-2xl lg:mx-0 lg:text-left">
              What began as friendship has grown into something lasting join us as we step into forever together.            
            </p>

            {mounted && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-10">
                {countdown.map((item) => (
                  <div
                    key={item.label}
                    className="border border-[var(--gold)]/25 bg-[var(--burgundy-dark)]/75 px-4 py-5 text-center shadow-lg shadow-black/10"
                  >
                    <span className="block font-serif text-4xl leading-none text-[var(--gold)]">
                      {item.value.toString().padStart(2, "0")}
                    </span>
                    <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.18em] text-[var(--cream)]/60">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex items-center justify-center gap-3 text-[var(--gold)]/75 lg:mt-10 lg:justify-start">
              <span className="h-px w-10 bg-[var(--gold)]/40" />
              <span className="font-serif text-2xl italic">A journey written with love</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
