import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ShopNow</h3>
            <p className="text-sm text-gray-600">
              Your one-stop shop for all your shopping needs. Quality products at affordable prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-gray-600 hover:text-gray-900">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-600 hover:text-gray-900">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-600 hover:text-gray-900">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-600">Subscribe to our newsletter for updates and promotions.</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ShopNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
