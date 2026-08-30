import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShopHeader } from "@/components/shop/shop-header"
import { ShopFooter } from "@/components/shop/shop-footer"
import { productWhatsappUrl, shopConfig } from "@/lib/shop-config"
import {
  categoryMeta,
  getProduct,
  products,
} from "@/lib/shop-products"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: shopConfig.name }
  return {
    title: `Buy ${product.name} | ${shopConfig.name}`,
    description: `${product.short} Price ₹${product.priceInr}. Order on WhatsApp.`,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <main className="shop-theme min-h-screen bg-[var(--shop-cream)]">
      <div className="bg-[var(--shop-night)] pt-24">
        <ShopHeader />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div
          className="relative flex min-h-[420px] items-center justify-center overflow-hidden"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${product.accent}55, transparent 45%),
              linear-gradient(160deg, #12182a, #0b1020 60%, ${product.accent}33)`,
          }}
        >
          <span className="font-display text-[8rem] text-[var(--shop-ash)]/90">
            {product.name.charAt(0)}
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <Link
            href={`/category/${product.category}`}
            className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--shop-saffron-deep)]"
          >
            {categoryMeta[product.category].label}
          </Link>
          <h1 className="mt-3 font-display text-5xl leading-none text-[var(--shop-ink)] sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-6 font-sans text-3xl text-[var(--shop-ink)]">
            ₹{product.priceInr}
          </p>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-[var(--shop-ink)]/70">
            {product.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={productWhatsappUrl(product.name, product.priceInr)}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-cta"
            >
              Order on WhatsApp
            </a>
            <Link href="/products" className="shop-cta-ghost-dark">
              Back to catalog
            </Link>
          </div>
        </div>
      </div>
      <ShopFooter />
    </main>
  )
}
