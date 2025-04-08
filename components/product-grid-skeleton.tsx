import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProductGridSkeletonProps {
  count?: number
}

export default function ProductGridSkeleton({ count = 8 }: ProductGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="h-full flex flex-col">
          <CardHeader className="p-4 pb-0">
            <Skeleton className="h-48 w-full rounded-md" />
          </CardHeader>
          <CardContent className="p-4 pt-2 flex-grow">
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/4 mb-4" />
            <Skeleton className="h-3 w-full mb-1" />
            <Skeleton className="h-3 w-full mb-1" />
            <Skeleton className="h-3 w-2/3 mb-3" />
            <Skeleton className="h-5 w-1/3 rounded-full" />
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Skeleton className="h-9 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
