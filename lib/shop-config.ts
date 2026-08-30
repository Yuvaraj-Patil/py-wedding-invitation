export const shopConfig = {
  name: "Shiv Shambho Shop",
  tagline: "Pooja essentials for every home",
  description:
    "Rudraksha, incense, idols, and complete pooja kits — ordered simply on WhatsApp, delivered with care across India.",
  phoneDisplay: "+91 98600 80676",
  phoneE164: "919860080676",
  email: "yuvarajpatil79@gmail.com",
  location: "India",
  whatsappMessage:
    "Namaste! I want to order from Shiv Shambho Shop.",
} as const

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? shopConfig.whatsappMessage)
  return `https://wa.me/${shopConfig.phoneE164}?text=${text}`
}

export function productWhatsappUrl(productName: string, priceInr: number) {
  return whatsappUrl(
    `Namaste! I want to order:\n\n*${productName}*\nPrice: ₹${priceInr}\n\nPlease confirm availability and delivery.`,
  )
}
