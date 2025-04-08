import { getProducts } from "@/lib/api"
import ProductCard from "./product-card"
import { Suspense } from "react"
import ProductGridSkeleton from "./product-grid-skeleton"

interface RelatedProductsProps {
  category: string
  currentProductId: number
}

export default async function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const allProducts = await getProducts()

  // Filter products by category and exclude current product
  const relatedProducts = allProducts
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 4)

  return (
    <Suspense fallback={<ProductGridSkeleton count={4} />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Suspense>
  )
}
