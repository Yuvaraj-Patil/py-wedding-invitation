"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"

export function OurStorySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const timeline = [
    {
      chapter: "01",
      title: "The Beginning of Us",
      subtitle: "Where It Started",
      description: "At first, I was focused... completely lost in building my career. Love wasn't something I was looking for. So we began as friends. Simple conversations... casual talks... nothing more. But sometimes, the simplest beginnings hide the deepest stories.",
      icon: Heart,
    },
    {
      chapter: "02",
      title: "A Moment That Changed Everything",
      subtitle: "February 2020",
      description: "We went on our first trip together. Just two friends... or at least, that's what we told ourselves. Somewhere between the laughter, the silence, and the shared moments... something started to change. Something neither of us said out loud... but both of us could feel.",
      icon: Sparkles,
    },
    {
      chapter: "03",
      title: "Distance & Silence",
      subtitle: "The COVID Years",
      description: "And then… the world stopped. COVID arrived, and with it came distance. She tried to hold on, putting in the effort and trying to keep us connected. But I stayed distant.“Why is it always me trying?” she would ask.And I, not understanding what we had, just let things drift.",
      icon: Heart,
    },
    {
      chapter: "04",
      title: "Fate Brings Us Back",
      subtitle: "Years Later",
      description: "But some stories aren't meant to end halfway. I was on a trip to Mallikarjun, Srisailam with friends... and she was in Hyderabad. Different places... same timing. We met again. No promises. No clarity. Just two people... standing in front of something unfinished.",
      icon: Sparkles,
    },
    {
      chapter: "05",
      title: "The Realization",
      subtitle: "12th October 2025",
      description: "We met again. This time... it was different. No confusion. No running away. The feelings were still there... exactly the same as the first time. That's when I finally understood what she had known all along. She was always the one.",
      icon: Heart,
    },
    {
      chapter: "06",
      title: "Choosing Each Other",
      subtitle: "Diwali 2025",
      description: "This time, we didn't let it slip away. We chose each other. We chose us. That Diwali, we told our parents... turning our story into something real, something forever.",
      icon: Sparkles,
    },
    {
      chapter: "07",
      title: "The Proposal",
      subtitle: "Rohtang Pass, Manali",
      description: "She had one wish… “You never proposed to me like in the movies.” So, in the snow-covered valleys of Manali, at Rohtang Pass, surrounded by endless white mountains, I finally asked her the way she always deserved. And just like before… she smiled and said yes. ❤️",
      icon: Heart,
    },
  ]

  return (
    <section className="royal-light py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--gold)]/15 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="font-serif text-[15vw] text-[var(--burgundy)]/[0.03] font-light whitespace-nowrap">
          What Brought Us Here
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="royal-divider text-[var(--gold-deep)] font-sans text-xs tracking-[0.3em] uppercase mb-5">
            What Brought Us Here
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[var(--burgundy)] font-light leading-tight">
            Our <span className="italic">Story</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] font-sans text-base leading-relaxed mt-6">
            Every love story is beautiful, but ours is uniquely ours. A journey of friendship,
            missed moments, second chances, and finally... forever.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/45 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              const isActive = activeIndex === index

              return (
                <div
                  key={item.chapter}
                  className={`relative md:flex md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-12 h-12 flex items-center justify-center border transition-all duration-500 ${isActive
                        ? "bg-[var(--burgundy)] text-[var(--cream)] border-[var(--gold)] shadow-lg shadow-[var(--burgundy)]/20"
                        : "bg-[var(--cream)] border-[var(--gold)]/35 text-[var(--gold-deep)] hover:border-[var(--gold)]"
                        }`}
                      aria-label={`Open chapter ${item.chapter}`}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  </div>

                  <div className={`md:w-[calc(50%-40px)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left group p-6 md:p-8 transition-all duration-500 ${isActive
                        ? "royal-card border-[var(--gold)]/45"
                        : "border border-[var(--gold)]/15 bg-white/55 hover:bg-white/85 hover:border-[var(--gold)]/35"
                        }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`font-serif text-4xl md:text-5xl transition-colors duration-300 ${isActive ? "text-[var(--gold-deep)]" : "text-[var(--gold)]/35"
                          }`}>
                          {item.chapter}
                        </span>
                        <div className="md:hidden">
                          <Icon className={`w-5 h-5 ${isActive ? "text-[var(--burgundy)]" : "text-[var(--gold-deep)]"}`} />
                        </div>
                      </div>

                      <span className={`font-sans text-xs tracking-[0.2em] uppercase block mb-2 transition-colors duration-300 ${isActive ? "text-[var(--gold-deep)]" : "text-[var(--muted-foreground)]"
                        }`}>
                        {item.subtitle}
                      </span>

                      <h3 className={`font-serif text-2xl md:text-3xl mb-4 transition-colors duration-300 ${isActive ? "text-[var(--burgundy)]" : "text-[var(--burgundy)]/72"
                        }`}>
                        {item.title}
                      </h3>

                      <p className={`font-sans text-sm md:text-base leading-relaxed transition-all duration-500 ${isActive
                        ? "text-[var(--muted-foreground)] opacity-100"
                        : "text-[var(--muted-foreground)]/65 line-clamp-2"
                        }`}>
                        {item.description}
                      </p>

                      {!isActive && (
                        <span className="inline-block mt-4 text-[var(--gold-deep)] font-sans text-xs tracking-wider uppercase group-hover:underline">
                          Read more
                        </span>
                      )}
                    </button>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 md:mt-32 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[var(--gold)]/15 font-serif text-[120px] leading-none">
            &ldquo;
          </div>
          <blockquote className="royal-card relative z-10 max-w-3xl mx-auto text-center p-8 md:p-12">
            <p className="font-serif text-xl md:text-3xl text-[var(--burgundy)] font-light italic leading-relaxed">
              Some stories aren&apos;t meant to end halfway. Ours was always meant to find its way back... to forever.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <Heart className="w-4 h-4 text-[var(--gold)] fill-[var(--gold)]" />
              <span className="w-8 h-px bg-[var(--gold)]" />
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
