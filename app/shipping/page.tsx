import { Truck, Package, Clock, Globe, CreditCard, ShieldCheck } from "lucide-react"

export default function ShippingPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Shipping Policy</h1>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-8">
            At ShopNow, we strive to provide fast, reliable shipping services to our customers worldwide. Please review
            our shipping policy below for information on shipping methods, delivery times, and other important details.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Truck className="mr-2 h-6 w-6" /> Shipping Methods
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border mb-4">
              <h3 className="font-semibold mb-2">Domestic Shipping (United States)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Standard Shipping:</span> 3-5 business days, $5.99 (Free on orders over
                  $50)
                </li>
                <li>
                  <span className="font-medium">Express Shipping:</span> 2 business days, $12.99
                </li>
                <li>
                  <span className="font-medium">Next Day Shipping:</span> Next business day, $19.99
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">International Shipping</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Standard International:</span> 7-14 business days, starting at $15.99
                </li>
                <li>
                  <span className="font-medium">Express International:</span> 3-5 business days, starting at $29.99
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                International shipping rates vary based on destination country, package weight, and dimensions. The
                exact shipping cost will be calculated at checkout.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Clock className="mr-2 h-6 w-6" /> Processing Times
            </h2>
            <p className="mb-4">
              All orders are processed within 1-2 business days after payment confirmation. Orders placed on weekends or
              holidays will be processed on the next business day.
            </p>
            <p>
              During peak seasons (such as holidays), processing times may be slightly longer. We will notify you if
              there are any significant delays in processing your order.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Package className="mr-2 h-6 w-6" /> Order Tracking
            </h2>
            <p className="mb-4">
              Once your order ships, you will receive a shipping confirmation email with a tracking number. You can use
              this tracking number to monitor the status of your delivery on our website or directly through the
              carrier's website.
            </p>
            <p>
              If you have any questions about your shipment or need assistance with tracking, please contact our
              customer service team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="mr-2 h-6 w-6" /> International Orders
            </h2>
            <p className="mb-4">For international orders, please note the following:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Import duties, taxes, and customs fees are not included in the item price or shipping cost. These
                charges are the buyer's responsibility.
              </li>
              <li>
                Please check your country's customs policies before placing your order to understand any potential
                additional costs.
              </li>
              <li>International delivery times may vary due to customs processing in your country.</li>
              <li>
                Some countries have restrictions on certain products. Please ensure that your order complies with your
                country's regulations.
              </li>
            </ul>
            <p>
              We currently ship to most countries worldwide. If your country is not available at checkout, please
              contact our customer service team for assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CreditCard className="mr-2 h-6 w-6" /> Shipping Costs and Free Shipping
            </h2>
            <p className="mb-4">
              Shipping costs are calculated based on the weight, dimensions, and destination of your package. The exact
              shipping cost will be displayed at checkout before you complete your purchase.
            </p>
            <p className="mb-4">
              We offer free standard shipping on domestic orders over $50. This promotion applies only to standard
              shipping within the United States and does not include express or next-day shipping options.
            </p>
            <p>
              Occasionally, we run special promotions that may include free or discounted shipping. These promotions
              will be clearly advertised on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <ShieldCheck className="mr-2 h-6 w-6" /> Shipping Insurance and Lost Packages
            </h2>
            <p className="mb-4">
              All orders are shipped with basic insurance coverage. If your package is lost or damaged during transit,
              please contact our customer service team within 14 days of the expected delivery date.
            </p>
            <p className="mb-4">To file a claim for a lost or damaged package, you will need to provide:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Your order number</li>
              <li>Tracking information</li>
              <li>Photos of damaged items (if applicable)</li>
            </ul>
            <p>
              We will work with the shipping carrier to resolve the issue and provide a replacement or refund as
              appropriate.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
