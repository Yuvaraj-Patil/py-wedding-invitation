import Link from "next/link"
import { categoryMeta, type ShopCategory } from "@/lib/shop-products"

const order: ShopCategory[] = [
  "rudraksha",
  "pooja-kits",
  "incense",
  "idols",
  "yantras",
]

export function ShopCategories() {
  return (
    <section id="categories" className="shop-section shop-section-ash">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="shop-eyebrow">Shop by need</p>
          <h2 className="shop-heading">Categories for every ritual</h2>
          <p className="mt-4 font-sans text-[var(--shop-ink)]/65">
            Pick a path — then order the item on WhatsApp. No cart. No app.
          </p>
        </div>

        <ul className="mt-14 grid gap-px bg-[var(--shop-ink)]/10 sm:grid-cols-2 lg:grid-cols-5">
          {order.map((key, index) => {
            const cat = categoryMeta[key]
            return (
              <li key={key} className="bg-[var(--shop-ash)]">
                <Link
                  href={`/category/${key}`}
                  className="group flex h-full flex-col justify-between px-5 py-8 transition-colors hover:bg-[var(--shop-night)]"
                >
                  <span className="font-sans text-[10px] tracking-[0.28em] text-[var(--shop-saffron)] transition-colors group-hover:text-[var(--shop-saffron)]">
                    0{index + 1}
                  </span>
                  <div className="mt-10">
                    <h3 className="font-display text-2xl text-[var(--shop-ink)] transition-colors group-hover:text-[var(--shop-ash)]">
                      {cat.label}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--shop-ink)]/55 transition-colors group-hover:text-[var(--shop-ash)]/60">
                      {cat.blurb}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
