import { getProducts } from "@/lib/api"
import ProductCard from "./product-card"

export default async function FeaturedProducts() {
  const allProducts = await getProducts()

  // Get 4 random products to feature
  const featuredProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 4)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
