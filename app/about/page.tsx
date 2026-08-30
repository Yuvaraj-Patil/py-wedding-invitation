import type { Metadata } from "next"
import { ShopHeader } from "@/components/shop/shop-header"
import { ShopFooter } from "@/components/shop/shop-footer"
import { shopConfig, whatsappUrl } from "@/lib/shop-config"

export const metadata: Metadata = {
  title: `About | ${shopConfig.name}`,
  description: shopConfig.description,
}

export default function AboutPage() {
  return (
    <main className="shop-theme min-h-screen bg-[var(--shop-cream)]">
      <div className="bg-[var(--shop-night)] pb-10 pt-24">
        <ShopHeader />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="shop-eyebrow text-[var(--shop-saffron)]">Our story</p>
          <h1 className="shop-heading text-[var(--shop-ash)]">
            About Shiv Shambho
          </h1>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-display text-3xl leading-snug text-[var(--shop-ink)] sm:text-4xl">
          A small shop for everyday devotion — rudraksha, incense, idols, and
          kits you can order without fuss.
        </p>
        <p className="mt-8 font-sans text-base leading-relaxed text-[var(--shop-ink)]/70">
          {shopConfig.description} We keep the catalog honest and the ordering
          simple: message us on WhatsApp, confirm stock and delivery, then pay
          by UPI.
        </p>
        <p className="mt-6 font-sans text-base leading-relaxed text-[var(--shop-ink)]/70">
          Looking for festival kits, a brass Shivling, or a jap mala? Start on
          the product page and tap <strong>Order on WhatsApp</strong>.
        </p>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="shop-cta mt-10 inline-flex"
        >
          Message {shopConfig.phoneDisplay}
        </a>
      </article>
      <ShopFooter />
    </main>
  )
}
