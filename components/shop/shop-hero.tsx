import Link from "next/link"
import { shopConfig, whatsappUrl } from "@/lib/shop-config"

export function ShopHero() {
  return (
    <section className="shop-hero relative min-h-[100svh] overflow-hidden">
      <div className="shop-hero-glow" aria-hidden />
      <div className="shop-hero-grain" aria-hidden />
      <div className="shop-hero-wave" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24 lg:justify-center lg:pb-20">
        <div className="shop-fade-up max-w-3xl">
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-[var(--shop-saffron)]">
            Online pooja store
          </p>
          <h1 className="font-display text-[clamp(3.4rem,12vw,7.5rem)] leading-[0.9] tracking-tight text-[var(--shop-ash)]">
            Shiv
            <span className="block text-[var(--shop-saffron)]">Shambho</span>
          </h1>
          <p className="mt-7 max-w-md font-sans text-base leading-relaxed text-[var(--shop-ash)]/72 sm:text-lg">
            {shopConfig.tagline}. Rudraksha, kits, incense, and idols — order in
            one WhatsApp message.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-cta"
            >
              Order on WhatsApp
            </a>
            <Link href="/#products" className="shop-cta-ghost">
              Browse products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
