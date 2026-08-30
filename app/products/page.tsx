import type { Metadata } from "next"
import Link from "next/link"
import { ShopHeader } from "@/components/shop/shop-header"
import { ShopFooter } from "@/components/shop/shop-footer"
import { ProductCard } from "@/components/shop/shop-products"
import { products } from "@/lib/shop-products"
import { shopConfig } from "@/lib/shop-config"

export const metadata: Metadata = {
  title: `All Products | ${shopConfig.name}`,
  description:
    "Browse rudraksha, pooja kits, incense, idols, and yantras. Order on WhatsApp.",
}

export default function ProductsPage() {
  return (
    <main className="shop-theme min-h-screen bg-[var(--shop-cream)]">
      <div className="bg-[var(--shop-night)] pb-8 pt-24">
        <ShopHeader />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="shop-eyebrow text-[var(--shop-saffron)]">Catalog</p>
          <h1 className="shop-heading text-[var(--shop-ash)]">All products</h1>
          <p className="mt-4 max-w-lg font-sans text-[var(--shop-ash)]/65">
            Tap any item to read more, or order straight on WhatsApp.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 flex flex-wrap gap-3">
          <Link href="/category/rudraksha" className="shop-chip">
            Rudraksha
          </Link>
          <Link href="/category/pooja-kits" className="shop-chip">
            Pooja kits
          </Link>
          <Link href="/category/incense" className="shop-chip">
            Incense
          </Link>
          <Link href="/category/idols" className="shop-chip">
            Idols
          </Link>
          <Link href="/category/yantras" className="shop-chip">
            Yantras
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <ShopFooter />
    </main>
  )
}
