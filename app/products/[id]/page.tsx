import { getProduct } from "@/lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Share2, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RelatedProducts from "@/components/related-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center">
          <div className="relative h-[400px] w-full">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating.rate) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {product.category}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">In Stock</span>
            </div>
            <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-2">Product Description</h3>
          <p className="text-gray-700">{product.description}</p>
        </TabsContent>
        <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-2">Product Specifications</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-600">Category</div>
            <div>{product.category}</div>
            <div className="text-gray-600">Material</div>
            <div>Premium Quality</div>
            <div className="text-gray-600">Weight</div>
            <div>0.5 kg</div>
            <div className="text-gray-600">Dimensions</div>
            <div>10 x 20 x 5 cm</div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-2">Customer Reviews</h3>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating.rate) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">Based on {product.rating.count} reviews</span>
          </div>
          <p className="text-gray-600 italic">No reviews yet. Be the first to review this product!</p>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </section>
    </main>
  )
}
