"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Mail, MapPin, Phone } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border rounded-lg flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
          </div>

          <div className="p-6 border rounded-lg flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">support@shopnow.com</p>
            <p className="text-gray-600">We respond within 24 hours</p>
          </div>

          <div className="p-6 border rounded-lg flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 E-Commerce St.</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have a question, comment, or suggestion? We'd love to hear from you. Fill out the form below and we'll get
              back to you as soon as possible.
            </p>

            {submitStatus === "success" && (
              <Alert className="mb-6 bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  Your message has been sent successfully! We'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>There was an error sending your message. Please try again later.</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="rounded-lg overflow-hidden border h-[400px] bg-gray-100 flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">
                  Map placeholder - In a real application, this would be an embedded Google Map or similar service
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
