import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, browse our products, select the items you want, add them to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. All transactions are secure and encrypted.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Shipping times vary depending on your location and the shipping method selected. Standard shipping typically takes 3-5 business days, while express shipping can take 1-2 business days. International shipping may take 7-14 business days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Some items, such as personalized products or intimate apparel, may not be eligible for return. Please see our Returns & Refunds page for more details.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Import duties and taxes may apply and are the responsibility of the customer.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.",
    },
    {
      question: "What if my order arrives damaged?",
      answer:
        "If your order arrives damaged, please contact our customer service team within 48 hours of receiving your package. Include photos of the damaged items and packaging, and we'll arrange for a replacement or refund.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 1 hour of placing it. After that, we begin processing orders and may not be able to make changes. Please contact customer service immediately if you need to modify your order.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, we offer gift wrapping services for a small additional fee. You can select this option during checkout and include a personalized message for the recipient.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of our website. You'll need to provide your email address and create a password. Having an account allows you to track orders, save your shipping information, and receive personalized recommendations.",
    },
  ]

  const categories = [
    "Ordering & Payment",
    "Shipping & Delivery",
    "Returns & Refunds",
    "Account & Security",
    "Products & Inventory",
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h1>

        <div className="mb-8">
          <p className="text-gray-700">
            Find answers to the most common questions about our products, ordering process, shipping, returns, and more.
            If you can't find what you're looking for, please don't hesitate to contact our customer service team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start">
                    {category}
                  </Button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-semibold mb-2">Still have questions?</h3>
                <p className="text-sm text-gray-600 mb-4">Our customer service team is here to help.</p>
                <Link href="/contact">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium px-2">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-2 pt-2 text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  )
}
