import Link from "next/link"

export default function CategoryBanner() {
  const categories = [
    {
      name: "Electronics",
      image: "/placeholder.svg?height=200&width=400&text=Electronics",
      link: "/products?category=electronics",
    },
    {
      name: "Jewelry",
      image: "/placeholder.svg?height=200&width=400&text=Jewelry",
      link: "/products?category=jewelery",
    },
    {
      name: "Men's Clothing",
      image: "/placeholder.svg?height=200&width=400&text=Men's+Clothing",
      link: "/products?category=men's clothing",
    },
    {
      name: "Women's Clothing",
      image: "/placeholder.svg?height=200&width=400&text=Women's+Clothing",
      link: "/products?category=women's clothing",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link key={index} href={category.link} className="group">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
