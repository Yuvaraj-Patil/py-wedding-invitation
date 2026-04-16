"use client"

import { useState } from "react"
import { Check, X, Heart } from "lucide-react"

export function AttendanceSection() {
  const [response, setResponse] = useState<"attending" | "not-attending" | null>(null)
  const [showMessage, setShowMessage] = useState(false)

  const handleResponse = (attending: boolean) => {
    setResponse(attending ? "attending" : "not-attending")
    setShowMessage(true)
  }

  return (
    <section className="relative py-32 overflow-hidden bg-[#722F37]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#C9A962] rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-[#C9A962] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#C9A962] rounded-full" />
      </div>

      {/* Golden Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#C9A962]/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#C9A962]/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#C9A962]/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#C9A962]/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1 bg-[#C9A962]/20 text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-6">
              Your Presence
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FDF8F5] mb-6 text-balance">
              Will You Be Joining Us?
            </h2>
            <p className="text-[#FDF8F5]/70 text-lg">
              Your presence would mean the world to us on our special day
            </p>
          </div>

          {/* Response Buttons */}
          {!showMessage ? (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => handleResponse(true)}
                className="group relative w-64 py-5 bg-[#C9A962] text-[#2D1F1F] font-medium tracking-wide 
                         hover:bg-[#E5D4A1] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Check className="w-5 h-5" />
                  Joyfully Accept
                </span>
              </button>

              <span className="text-[#C9A962]/50 font-serif text-xl">or</span>

              <button
                onClick={() => handleResponse(false)}
                className="group relative w-64 py-5 border-2 border-[#FDF8F5]/30 text-[#FDF8F5] font-medium tracking-wide 
                         hover:border-[#FDF8F5]/60 transition-all duration-300"
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
                <div className="bg-[#C9A962]/10 border border-[#C9A962]/30 p-10 backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#C9A962] rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-[#2D1F1F] fill-current" />
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-[#C9A962] mb-4">
                    We&apos;re Thrilled!
                  </h3>
                  <p className="text-[#FDF8F5]/80 text-lg mb-6">
                    Thank you for being part of our celebration. We can&apos;t wait to see you!
                  </p>
                  <p className="text-[#C9A962] text-sm tracking-wide">
                    See you on May 5th, 2026
                  </p>
                </div>
              ) : (
                <div className="bg-[#FDF8F5]/5 border border-[#FDF8F5]/20 p-10 backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#FDF8F5]/10 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-[#FDF8F5]/60" />
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-[#FDF8F5] mb-4">
                    We&apos;ll Miss You
                  </h3>
                  <p className="text-[#FDF8F5]/70 text-lg mb-6">
                    We understand and appreciate you letting us know. You&apos;ll be in our thoughts!
                  </p>
                  <button
                    onClick={() => setShowMessage(false)}
                    className="text-[#C9A962] text-sm tracking-wide hover:underline"
                  >
                    Change Response
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A962]/50" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A962]/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A962]/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
