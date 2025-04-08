"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = ["Electronics", "Jewelry", "Men's Clothing", "Women's Clothing"]

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const handleReset = () => {
    setPriceRange([0, 1000])
    setSearchTerm("")
    setSelectedCategories([])
  }

  return (
    <div className="bg-white p-4 rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <Label htmlFor="search" className="mb-2 block">
          Search
        </Label>
        <Input
          id="search"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger className="text-lg font-medium">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={category} className="cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6">
        <Button variant="outline" onClick={handleReset} className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
