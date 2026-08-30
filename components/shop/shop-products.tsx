import Link from "next/link"
import { productWhatsappUrl } from "@/lib/shop-config"
import { categoryMeta, type ShopProduct } from "@/lib/shop-products"

export function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <article className="shop-product group">
      <Link href={`/product/${product.slug}`} className="block">
        <div
          className="shop-product-visual"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${product.accent}55, transparent 45%),
              linear-gradient(160deg, #12182a, #0b1020 60%, ${product.accent}33)`,
          }}
        >
          <span className="font-display text-5xl text-[var(--shop-ash)]/90 transition-transform duration-500 group-hover:scale-105">
            {product.name.charAt(0)}
          </span>
          {product.popular ? (
            <span className="absolute left-4 top-4 font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--shop-saffron)]">
              Popular
            </span>
          ) : null}
        </div>
        <div className="px-1 pt-5">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--shop-saffron-deep)]">
            {categoryMeta[product.category].label}
          </p>
          <h3 className="mt-2 font-display text-2xl text-[var(--shop-ink)]">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-[var(--shop-ink)]/60">
            {product.short}
          </p>
          <p className="mt-4 font-sans text-lg text-[var(--shop-ink)]">
            ₹{product.priceInr}
          </p>
        </div>
      </Link>
      <a
        href={productWhatsappUrl(product.name, product.priceInr)}
        target="_blank"
        rel="noopener noreferrer"
        className="shop-cta mt-5 w-full text-center"
      >
        Order on WhatsApp
      </a>
    </article>
  )
}

export function ShopProducts({ products }: { products: ShopProduct[] }) {
  return (
    <section id="products" className="shop-section">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="shop-eyebrow">Catalog</p>
            <h2 className="shop-heading">Blessed essentials</h2>
          </div>
          <Link
            href="/products"
            className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--shop-saffron-deep)] hover:text-[var(--shop-ink)]"
          >
            View all products →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
