"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
    setEmail("")

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section className="bg-gray-100 rounded-lg p-8 mb-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with our latest products, promotions, and exclusive offers.</p>

        {isSuccess ? (
          <div className="flex items-center justify-center text-green-600 mb-4">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
