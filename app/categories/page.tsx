import { getCategories } from "@/lib/api"
import Link from "next/link"
import Image from "next/image"

export default async function CategoriesPage() {
  const categories = await getCategories()

  const categoryImages = {
    electronics: "/placeholder.svg?height=300&width=400&text=Electronics",
    jewelery: "/placeholder.svg?height=300&width=400&text=Jewelery",
    "men's clothing": "/placeholder.svg?height=300&width=400&text=Men's+Clothing",
    "women's clothing": "/placeholder.svg?height=300&width=400&text=Women's+Clothing",
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Product Categories</h1>
        <p className="text-gray-600">Browse our products by category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category} href={`/products?category=${encodeURIComponent(category)}`} className="group">
            <div className="border rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg">
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={categoryImages[category as keyof typeof categoryImages] || "/placeholder.svg"}
                  alt={category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold capitalize">{category}</h2>
                <p className="text-gray-600 mt-2">Explore our collection</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
