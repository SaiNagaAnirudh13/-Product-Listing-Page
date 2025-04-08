import Image from "next/image"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4 pb-0">
        <div className="relative h-48 w-full mb-4 bg-gray-100 rounded-md overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
          <div className="ml-2 flex-shrink-0">
            <span className="font-bold text-sm">${product.price.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-gray-500 text-xs line-clamp-3">{product.description}</p>
        <div className="mt-2">
          <span className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1">
            {product.category}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
