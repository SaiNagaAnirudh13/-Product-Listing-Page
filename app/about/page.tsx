import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About ShopNow</h1>

        <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=800&text=Our+Story"
            alt="Our team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, ShopNow began with a simple mission: to provide high-quality products at affordable prices
            with exceptional customer service. What started as a small online store has grown into a trusted e-commerce
            destination for thousands of customers worldwide.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, Jane Doe, recognized a gap in the market for an online shopping experience that prioritized
            both quality and customer satisfaction. With a background in retail and a passion for technology, she set
            out to create a platform that would revolutionize the way people shop online.
          </p>
          <p className="text-gray-700">
            Today, ShopNow offers a wide range of products across multiple categories, from electronics and jewelry to
            clothing and home goods. We continue to expand our product offerings while maintaining our commitment to
            quality, affordability, and customer satisfaction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <p className="text-gray-700 italic text-lg">
              "To provide an exceptional online shopping experience by offering high-quality products, competitive
              prices, and outstanding customer service."
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-700">
                We carefully select each product in our inventory to ensure it meets our high standards of quality and
                durability.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Affordability</h3>
              <p className="text-gray-700">
                We believe that high-quality products should be accessible to everyone, which is why we offer
                competitive prices.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
              <p className="text-gray-700">
                We are committed to providing exceptional customer service and support at every step of the shopping
                journey.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Behind ShopNow is a dedicated team of professionals who are passionate about creating the best possible
            shopping experience for our customers. From our product specialists and customer service representatives to
            our developers and marketing team, everyone plays a crucial role in our success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Jane Doe", role: "Founder & CEO" },
              { name: "John Smith", role: "CTO" },
              { name: "Emily Johnson", role: "Head of Marketing" },
              { name: "Michael Brown", role: "Customer Service Manager" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full h-40 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=160&width=160&text=${member.name}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 160px"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-700 mb-6">
            We're always looking for talented individuals to join our team. If you're passionate about e-commerce and
            want to be part of a dynamic, growing company, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button>View Careers</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </section>
      </div>
    </main>
  )
}
