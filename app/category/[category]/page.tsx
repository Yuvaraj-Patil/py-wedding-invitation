import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShopHeader } from "@/components/shop/shop-header"
import { ShopFooter } from "@/components/shop/shop-footer"
import { ProductCard } from "@/components/shop/shop-products"
import {
  categoryMeta,
  getProductsByCategory,
  type ShopCategory,
} from "@/lib/shop-products"
import { shopConfig } from "@/lib/shop-config"

const categories = Object.keys(categoryMeta) as ShopCategory[]

export function generateStaticParams() {
  return categories.map((category) => ({ category }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const key = category as ShopCategory
  const meta = categoryMeta[key]
  if (!meta) return { title: shopConfig.name }
  return {
    title: `${meta.seoTitle} | ${shopConfig.name}`,
    description: `${meta.blurb} Order online via WhatsApp from ${shopConfig.name}.`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const key = category as ShopCategory
  const meta = categoryMeta[key]
  if (!meta) notFound()

  const items = getProductsByCategory(key)

  return (
    <main className="shop-theme min-h-screen bg-[var(--shop-cream)]">
      <div className="bg-[var(--shop-night)] pb-8 pt-24">
        <ShopHeader />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/products"
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--shop-saffron)]"
          >
            ← All products
          </Link>
          <h1 className="mt-4 shop-heading text-[var(--shop-ash)]">
            {meta.label}
          </h1>
          <p className="mt-4 max-w-lg font-sans text-[var(--shop-ash)]/65">
            {meta.blurb}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <ShopFooter />
    </main>
  )
}
