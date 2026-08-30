import type { Metadata } from "next"
import { ShopHeader } from "@/components/shop/shop-header"
import { ShopFooter } from "@/components/shop/shop-footer"
import { ShopHowItWorks } from "@/components/shop/shop-how-it-works"
import { shopConfig } from "@/lib/shop-config"

export const metadata: Metadata = {
  title: `How to Order | ${shopConfig.name}`,
  description:
    "Order pooja items from Shiv Shambho Shop on WhatsApp in three steps. Pay by UPI after confirmation.",
}

export default function HowToOrderPage() {
  return (
    <main className="shop-theme min-h-screen">
      <div className="bg-[var(--shop-night)] pt-24">
        <ShopHeader />
        <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
          <h1 className="shop-heading text-[var(--shop-ash)]">How to order</h1>
        </div>
      </div>
      <ShopHowItWorks />
      <ShopFooter />
    </main>
  )
}
