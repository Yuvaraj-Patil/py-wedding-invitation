"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { shopConfig, whatsappUrl } from "@/lib/shop-config"

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#categories", label: "Categories" },
  { href: "/how-to-order", label: "How to order" },
  { href: "/about", label: "About" },
]

export function ShopHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="shop-header absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="group relative z-50">
          <span className="font-display text-2xl tracking-tight text-[var(--shop-ash)] sm:text-[1.65rem]">
            Shiv <span className="text-[var(--shop-saffron)]">Shambho</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--shop-ash)]/70 transition-colors hover:text-[var(--shop-saffron)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-cta-sm"
          >
            Order on WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center text-[var(--shop-ash)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-0 border-b border-[var(--shop-saffron)]/20 bg-[var(--shop-night)]/98 px-5 pb-8 pt-20 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm uppercase tracking-[0.2em] text-[var(--shop-ash)]/80"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-cta mt-2 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}

      <p className="sr-only">{shopConfig.name}</p>
    </header>
  )
}
