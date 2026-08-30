import Link from "next/link"
import { shopConfig, whatsappUrl } from "@/lib/shop-config"

export function ShopFooter() {
  return (
    <footer className="border-t border-[var(--shop-ink)]/10 bg-[var(--shop-night)] text-[var(--shop-ash)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">
            Shiv <span className="text-[var(--shop-saffron)]">Shambho</span>
          </p>
          <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-[var(--shop-ash)]/55">
            {shopConfig.description}
          </p>
        </div>
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[var(--shop-saffron)]">
            Explore
          </p>
          <ul className="mt-4 space-y-3 font-sans text-sm text-[var(--shop-ash)]/70">
            <li>
              <Link href="/products" className="hover:text-[var(--shop-saffron)]">
                All products
              </Link>
            </li>
            <li>
              <Link href="/how-to-order" className="hover:text-[var(--shop-saffron)]">
                How to order
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--shop-saffron)]">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[var(--shop-saffron)]">
            Contact
          </p>
          <ul className="mt-4 space-y-3 font-sans text-sm text-[var(--shop-ash)]/70">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--shop-saffron)]"
              >
                WhatsApp {shopConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${shopConfig.email}`}
                className="hover:text-[var(--shop-saffron)]"
              >
                {shopConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 font-sans text-xs text-[var(--shop-ash)]/35 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {shopConfig.name}</p>
          <p>
            Wedding guests:{" "}
            <Link href="/wedding" className="underline hover:text-[var(--shop-saffron)]">
              Pooja &amp; Yuvaraj invitation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
