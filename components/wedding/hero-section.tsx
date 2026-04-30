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
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--burgundy)]">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(135deg, transparent 0 48%, #C9A962 49% 51%, transparent 52% 100%)`,
        backgroundSize: "42px 42px",
      }} />

      <div className="relative grid min-h-[100svh] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="relative min-h-[48svh] overflow-hidden bg-[var(--burgundy-dark)] sm:min-h-[58svh] lg:min-h-[100svh]">
          <Image
            src={heroImage.src}
            alt=""
            fill
            className="scale-110 object-cover opacity-35 blur-2xl"
            sizes="(max-width: 1024px) 100vw, 46vw"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--burgundy)]/85 via-[var(--burgundy)]/20 to-black/10 lg:bg-gradient-to-r lg:from-black/10 lg:via-[var(--burgundy)]/10 lg:to-[var(--burgundy)]/70" />

          <div className="relative z-10 flex min-h-[48svh] items-center justify-center px-5 py-8 sm:min-h-[58svh] sm:px-8 lg:min-h-[100svh] lg:px-12">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute -inset-3 border border-[var(--gold)]/35" />
              <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-[var(--gold)]/60" />
              <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[var(--gold)]/60" />
              <div className="relative z-10 h-[42svh] w-full sm:h-[54svh] lg:h-[76svh]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) min(88vw, 500px), 38vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[52svh] items-center px-6 py-10 sm:px-10 lg:min-h-[100svh] lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <div className="h-px w-12 bg-[var(--gold)]/50" />
              <span className="text-[var(--gold)] font-sans text-xs tracking-[0.28em] uppercase">
                Wedding Invitation
              </span>
              <div className="h-px w-12 bg-[var(--gold)]/50" />
            </div>

            <h1 className="mt-6 font-serif text-5xl font-light leading-[0.92] text-[var(--cream)] sm:text-7xl xl:text-8xl">
              <span className="block">Pooja</span>
              <span className="block text-4xl text-[var(--gold)] sm:text-6xl xl:text-7xl">&amp;</span>
              <span className="block">Yuvaraj</span>
            </h1>

            <div className="mt-6 flex flex-col items-center gap-2 font-sans text-sm tracking-[0.16em] text-[var(--gold-light)]/85 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <span>May 5, 2026</span>
              <span className="hidden h-1 w-1 rotate-45 bg-[var(--gold)] sm:block" />
              <span>Bhikangaon, Madhya Pradesh</span>
            </div>

            <p className="mx-auto mt-6 max-w-[19rem] text-center font-sans text-sm leading-7 text-[var(--cream)]/82 sm:max-w-xl sm:text-base sm:leading-8 lg:mx-0 lg:text-left">
              Request the pleasure of your company at the celebration of their marriage.
            </p>

            {mounted && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-10">
                {countdown.map((item) => (
                  <div
                    key={item.label}
                    className="border border-[var(--gold)]/20 bg-[var(--burgundy-dark)]/70 px-4 py-5 text-center"
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

            <div className="mt-8 flex items-center justify-center gap-3 text-[var(--gold)]/70 lg:mt-10 lg:justify-start">
              <span className="h-px w-10 bg-[var(--gold)]/40" />
              <span className="font-serif text-2xl italic">With love and blessings</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
