"use client"

import { useState } from "react"
import { Heart, MapPin, Sparkles } from "lucide-react"

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
      icon: MapPin,
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
    <section className="py-24 md:py-32 bg-[#FDF8F5] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#C9A962]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#722F37]/5 blur-3xl" />

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="font-serif text-[15vw] text-[#722F37]/[0.02] font-light whitespace-nowrap">
          Our Journey
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#C9A962] font-sans text-xs tracking-[0.3em] uppercase block mb-4">
            How It All Began
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[#722F37] font-light leading-tight">
            Our <span className="italic">Story</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8B6969] font-sans text-base leading-relaxed mt-6">
            Every love story is beautiful, but ours is uniquely ours. A journey of friendship,
            missed moments, second chances, and finally... forever.
          </p>
        </div>

        {/* Story Timeline - Vertical Card Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8D5C4] to-transparent" />

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
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
                        ? "bg-[#722F37] text-white scale-110 shadow-lg shadow-[#722F37]/30"
                        : "bg-white border-2 border-[#E8D5C4] text-[#C9A962] hover:border-[#C9A962]"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Card */}
                  <div className={`md:w-[calc(50%-40px)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left group p-6 md:p-8 rounded-2xl transition-all duration-500 ${isActive
                        ? "bg-white shadow-xl shadow-[#722F37]/10 scale-[1.02]"
                        : "bg-white/50 hover:bg-white hover:shadow-lg"
                        }`}
                    >
                      {/* Chapter Number */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`font-serif text-4xl md:text-5xl transition-colors duration-300 ${isActive ? "text-[#C9A962]" : "text-[#E8D5C4]"
                          }`}>
                          {item.chapter}
                        </span>
                        <div className="md:hidden">
                          <Icon className={`w-5 h-5 ${isActive ? "text-[#722F37]" : "text-[#C9A962]"}`} />
                        </div>
                      </div>

                      {/* Subtitle */}
                      <span className={`font-sans text-xs tracking-[0.2em] uppercase block mb-2 transition-colors duration-300 ${isActive ? "text-[#C9A962]" : "text-[#8B6969]"
                        }`}>
                        {item.subtitle}
                      </span>

                      {/* Title */}
                      <h3 className={`font-serif text-2xl md:text-3xl mb-4 transition-colors duration-300 ${isActive ? "text-[#722F37]" : "text-[#722F37]/70"
                        }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`font-sans text-sm md:text-base leading-relaxed transition-all duration-500 ${isActive
                        ? "text-[#8B6969] opacity-100"
                        : "text-[#8B6969]/60 line-clamp-2"
                        }`}>
                        {item.description}
                      </p>

                      {/* Read More Indicator */}
                      {!isActive && (
                        <span className="inline-block mt-4 text-[#C9A962] font-sans text-xs tracking-wider uppercase group-hover:underline">
                          Read more
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Ending Quote */}
        <div className="mt-20 md:mt-32 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#C9A962]/10 font-serif text-[120px] leading-none">
            &ldquo;
          </div>
          <blockquote className="relative z-10 max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="font-serif text-xl md:text-3xl text-[#722F37] font-light italic leading-relaxed">
              Some stories aren&apos;t meant to end halfway. Ours was always meant to find its way back... to forever.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-[#C9A962]" />
              <Heart className="w-4 h-4 text-[#C9A962] fill-[#C9A962]" />
              <span className="w-8 h-px bg-[#C9A962]" />
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
