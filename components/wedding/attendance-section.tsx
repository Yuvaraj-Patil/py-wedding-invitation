"use client"

import { useEffect, useState } from "react"
import { Check, X, Heart, Sparkles } from "lucide-react"
import { isGoogleRsvpConfigured, rsvpConfig } from "@/lib/rsvp-config"

type RsvpResponse = "accept" | "decline"
type SubmitMode = "google-form" | "email-fallback"

const googleFormTarget = "hidden-google-rsvp-frame"
const responseStorageKey = "pooja-yuvaraj-rsvp-response"
const visitorStorageKey = "pooja-yuvaraj-rsvp-visitor"

const responseLabels: Record<RsvpResponse, string> = {
  accept: "Joyfully Accept",
  decline: "Regretfully Decline",
}

function addHiddenField(form: HTMLFormElement, name: string, value: string) {
  if (!name) return

  const input = document.createElement("input")
  input.type = "hidden"
  input.name = name
  input.value = value
  form.appendChild(input)
}

function getVisitorId() {
  const existingVisitorId = window.localStorage.getItem(visitorStorageKey)

  if (existingVisitorId) {
    return existingVisitorId
  }

  const visitorId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`

  window.localStorage.setItem(visitorStorageKey, visitorId)

  return visitorId
}

function submitToGoogleForm(response: RsvpResponse) {
  if (!isGoogleRsvpConfigured) {
    return false
  }

  const form = document.createElement("form")
  form.method = "POST"
  form.action = rsvpConfig.googleFormActionUrl
  form.target = googleFormTarget
  form.style.display = "none"

  addHiddenField(form, rsvpConfig.fields.response, responseLabels[response])
  addHiddenField(form, rsvpConfig.fields.source, window.location.href)
  addHiddenField(form, rsvpConfig.fields.visitorId, getVisitorId())

  document.body.appendChild(form)
  form.submit()
  window.setTimeout(() => form.remove(), 1000)

  return true
}

function openEmailFallback(response: RsvpResponse) {
  const label = responseLabels[response]
  const subject = encodeURIComponent(`Wedding RSVP click - ${label}`)
  const body = encodeURIComponent(
    [
      `Response: ${label}`,
      `Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
      `Source: ${window.location.href}`,
    ].join("\n"),
  )

  window.location.href = `mailto:${rsvpConfig.ownerEmail}?subject=${subject}&body=${body}`
}

export function AttendanceSection() {
  const [response, setResponse] = useState<RsvpResponse | null>(null)
  const [submitMode, setSubmitMode] = useState<SubmitMode | null>(null)

  useEffect(() => {
    const savedResponse = window.localStorage.getItem(responseStorageKey)

    if (savedResponse === "accept" || savedResponse === "decline") {
      setResponse(savedResponse)
      setSubmitMode("google-form")
    }
  }, [])

  const handleResponse = (nextResponse: RsvpResponse) => {
    const submitted = submitToGoogleForm(nextResponse)

    if (!submitted) {
      openEmailFallback(nextResponse)
    }

    window.localStorage.setItem(responseStorageKey, nextResponse)
    setResponse(nextResponse)
    setSubmitMode(submitted ? "google-form" : "email-fallback")
  }

  return (
    <section className="royal-dark relative py-24 md:py-32 overflow-hidden">
      <iframe
        name={googleFormTarget}
        title="Hidden RSVP submission"
        className="hidden"
        aria-hidden="true"
      />
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--gold)]/15 pointer-events-none" />
      <div className="absolute left-1/2 top-12 h-px w-[min(78vw,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--gold)]/35 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="royal-frame max-w-3xl mx-auto p-6 text-center sm:p-10 md:p-12">
          <div className="mb-10">
            <span className="royal-divider text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-6">
              Your Presence
            </span>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center text-[var(--gold)]">
              <Sparkles className="h-7 w-7" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--cream)] mb-6 text-balance">
              Kindly Confirm Your Presence
            </h2>
            <p className="mx-auto max-w-xl text-[var(--gold-light)]/78 text-base leading-7">
              One click is enough. Your response will be counted privately.
            </p>
          </div>

          {!response ? (
            <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 sm:flex-row">
              <button
                type="button"
                onClick={() => handleResponse("accept")}
                className="group relative w-full border border-[var(--gold)] bg-[var(--gold)] py-5 text-[var(--burgundy-dark)] font-medium tracking-wide transition-all duration-300 hover:bg-[var(--gold-light)] sm:w-72"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Check className="w-5 h-5" />
                  Joyfully Accept
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleResponse("decline")}
                className="group relative w-full border border-[var(--gold)]/35 py-5 text-[var(--cream)] font-medium tracking-wide transition-all duration-300 hover:border-[var(--gold)]/70 sm:w-72"
              >
                <span className="flex items-center justify-center gap-3">
                  <X className="w-5 h-5" />
                  Regretfully Decline
                </span>
              </button>
            </div>
          ) : (
            <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
              <div className="border border-[var(--gold)]/35 bg-[var(--gold)]/10 p-8 backdrop-blur-sm md:p-10">
                <div className="mb-6 flex justify-center text-[var(--gold)]">
                  <Heart className="h-10 w-10 fill-current" />
                </div>
                <h3 className="font-serif text-3xl text-[var(--gold)] mb-4">
                  Response Received
                </h3>
                <p className="text-[var(--cream)]/80 text-lg mb-4">
                  Thank you. Your response has been marked as {responseLabels[response]}.
                </p>
                <p className="text-[var(--gold)] text-sm tracking-wide">
                  {submitMode === "google-form"
                    ? "Your RSVP has been privately recorded."
                    : "Please send the email draft that opened so we can record your RSVP."}
                </p>
              </div>
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
