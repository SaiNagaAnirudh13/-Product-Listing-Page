import { Suspense } from "react"
import ProductGridSkeleton from "@/components/product-grid-skeleton"
import FeaturedProducts from "@/components/featured-products"
import CategoryBanner from "@/components/category-banner"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10 flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Summer Collection 2025</h1>
          <p className="text-white text-lg md:text-xl mb-6 max-w-md">
            Discover the latest trends and styles for the upcoming season.
          </p>
          <div>
            <a
              href="/products"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Summer Collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category Banners */}
      <CategoryBanner />

      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a href="/products" className="text-sm font-medium text-gray-600 hover:text-black">
            View All
          </a>
        </div>
        <Suspense fallback={<ProductGridSkeleton count={4} />}>
          <FeaturedProducts />
        </Suspense>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </main>
  )
}
