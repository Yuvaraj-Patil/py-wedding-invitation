import { ShopHeader } from "@/components/shop/shop-header"
import { ShopHero } from "@/components/shop/shop-hero"
import { ShopCategories } from "@/components/shop/shop-categories"
import { ShopProducts } from "@/components/shop/shop-products"
import { ShopHowItWorks } from "@/components/shop/shop-how-it-works"
import { ShopFooter } from "@/components/shop/shop-footer"
import { getPopularProducts } from "@/lib/shop-products"

export default function ShopHomePage() {
  return (
    <main className="shop-theme min-h-screen">
      <ShopHeader />
      <ShopHero />
      <ShopCategories />
      <ShopProducts products={getPopularProducts()} />
      <ShopHowItWorks />
      <ShopFooter />
    </main>
  )
}
