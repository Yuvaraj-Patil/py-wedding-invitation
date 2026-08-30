import { whatsappUrl } from "@/lib/shop-config"

const steps = [
  {
    n: "01",
    title: "Choose an item",
    body: "Browse products or categories. Prices are listed in rupees.",
  },
  {
    n: "02",
    title: "Message on WhatsApp",
    body: "Tap Order — we get the product name and price in one message.",
  },
  {
    n: "03",
    title: "Pay & receive",
    body: "Confirm address, pay by UPI when asked, and we ship to you.",
  },
]

export function ShopHowItWorks() {
  return (
    <section className="shop-section shop-section-night relative overflow-hidden">
      <div className="shop-orbit" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <p className="shop-eyebrow text-[var(--shop-saffron)]">Simple flow</p>
        <h2 className="shop-heading text-[var(--shop-ash)]">
          Order without an app
        </h2>
        <p className="mt-4 max-w-lg font-sans text-[var(--shop-ash)]/65">
          Built for Indian buyers who already live on WhatsApp. No signup. No
          payment gateway fees for you to start.
        </p>

        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n}>
              <span className="font-display text-5xl text-[var(--shop-saffron)]/80">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-2xl text-[var(--shop-ash)]">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--shop-ash)]/60">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <a
          href={whatsappUrl("Namaste! I have a question about ordering.")}
          target="_blank"
          rel="noopener noreferrer"
          className="shop-cta mt-14 inline-flex"
        >
          Ask on WhatsApp
        </a>
      </div>
    </section>
  )
}
