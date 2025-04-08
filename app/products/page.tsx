import ProductGrid from "@/components/product-grid"
import FilterSidebar from "@/components/filter-sidebar"
import { Suspense } from "react"
import ProductGridSkeleton from "@/components/product-grid-skeleton"

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <FilterSidebar />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-gray-600">Showing all available products</p>
          </div>
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
