import { RefreshCw, AlertCircle, CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReturnsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Returns & Refunds</h1>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-8">
            We want you to be completely satisfied with your purchase. If you're not entirely happy with your order,
            we're here to help. Please review our returns and refunds policy below.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <RefreshCw className="mr-2 h-6 w-6" /> Return Policy
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border mb-4">
              <h3 className="font-semibold mb-2">30-Day Return Period</h3>
              <p>
                You have 30 days from the date of delivery to return most items purchased from ShopNow. To be eligible
                for a return, your item must be in the same condition that you received it, unworn or unused, with tags,
                and in its original packaging.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Items Eligible for Return</h3>
            <p className="mb-4">
              Most items purchased from ShopNow can be returned within the 30-day period, provided they meet the
              conditions mentioned above.
            </p>

            <h3 className="text-xl font-semibold mb-3">Non-Returnable Items</h3>
            <p className="mb-2">The following items cannot be returned:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Personal care items (for hygiene reasons)</li>
              <li>Intimate apparel</li>
              <li>Custom or personalized orders</li>
              <li>Perishable goods</li>
              <li>Items marked as "Final Sale" or "Non-Returnable"</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2 h-6 w-6" /> How to Return an Item
            </h2>
            <p className="mb-4">To initiate a return, please follow these steps:</p>
            <ol className="list-decimal pl-5 space-y-3 mb-4">
              <li>
                <span className="font-medium">Contact Customer Service:</span> Email us at returns@shopnow.com or call
                our customer service at (555) 123-4567 to request a return authorization.
              </li>
              <li>
                <span className="font-medium">Prepare Your Package:</span> Pack the item securely in its original
                packaging if possible. Include your order number and the return authorization number we provide.
              </li>
              <li>
                <span className="font-medium">Ship Your Return:</span> Send your package to the address provided by our
                customer service team. We recommend using a trackable shipping method.
              </li>
              <li>
                <span className="font-medium">Wait for Processing:</span> Once we receive your return, we'll inspect the
                item and process your refund. This typically takes 3-5 business days.
              </li>
            </ol>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  For your protection, we recommend insuring your return shipment and keeping the tracking information
                  until your refund is processed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <HelpCircle className="mr-2 h-6 w-6" /> Refunds
            </h2>
            <p className="mb-4">
              Once we receive and inspect your return, we'll send you an email to notify you that we have received your
              returned item. We'll also notify you of the approval or rejection of your refund.
            </p>
            <p className="mb-4">
              If approved, your refund will be processed, and a credit will automatically be applied to your original
              method of payment within 5-10 business days. Please note that depending on your credit card company, it
              may take an additional 2-10 business days for the refund to appear on your statement.
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6">Refund Options</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <span className="font-medium">Original Payment Method:</span> Refunds are typically issued to the
                original payment method used for the purchase.
              </li>
              <li>
                <span className="font-medium">Store Credit:</span> In some cases, we may offer store credit for returns,
                especially for items returned after the 30-day period but still in good condition.
              </li>
              <li>
                <span className="font-medium">Exchanges:</span> If you prefer to exchange an item rather than receive a
                refund, please indicate this when contacting our customer service team.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">Shipping Costs</h3>
            <p>
              The cost of return shipping is the responsibility of the customer, except in cases where the item received
              was defective or incorrect. Original shipping charges are non-refundable unless the return is due to our
              error.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Damaged or Defective Items</h2>
            <p className="mb-4">
              If you receive a damaged or defective item, please contact our customer service team within 48 hours of
              receiving your order. Please provide photos of the damaged item and packaging to help us resolve the issue
              quickly.
            </p>
            <p>
              For damaged or defective items, we will cover the cost of return shipping and will either send a
              replacement or issue a full refund, including original shipping costs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about our returns and refunds policy, please contact our customer service team:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Email: returns@shopnow.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Hours: Monday-Friday, 9am-5pm EST</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button>Contact Customer Service</Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline">View FAQs</Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
