import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FadeIn from "@/components/animations/fade-in"
import { HelpCircle } from "lucide-react"

export default function FAQsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Find answers to common questions about LetterSuite AI and how it can help you.
        </p>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        <FadeIn delay={100}>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white overflow-hidden group"
            >
              <AccordionTrigger className="text-lg font-medium py-5 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]]:text-emerald-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  What is LetterSuite AI?
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600 pl-11 text-base">
                LetterSuite AI is an advanced tool that uses artificial intelligence to help you create professional,
                formal letters for various purposes. Our AI analyzes your inputs and generates contextually appropriate
                content, saving you time and ensuring high-quality results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white overflow-hidden group"
            >
              <AccordionTrigger className="text-lg font-medium py-5 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]]:text-emerald-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  How much does LetterSuite cost?
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600 pl-11 text-base">
                LetterSuite offers a free tier that allows you to generate up to 3 letters per month. Our premium plans
                start at $9.99/month for unlimited letter generation and additional features like priority support,
                advanced customization options, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white overflow-hidden group"
            >
              <AccordionTrigger className="text-lg font-medium py-5 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]]:text-emerald-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  Can I edit the letters after they're generated?
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600 pl-11 text-base">
                Yes, absolutely! After the AI generates your letter, you have full editing capabilities to refine the
                content, adjust the tone, or make any other changes you need before finalizing it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white overflow-hidden group"
            >
              <AccordionTrigger className="text-lg font-medium py-5 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]]:text-emerald-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  What types of letters can I create?
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600 pl-11 text-base">
                LetterSuite AI can help you create a wide variety of formal letters, including business correspondence,
                cover letters, recommendation letters, complaint letters, thank you letters, and more. Our AI is trained
                on diverse letter formats and can adapt to your specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white overflow-hidden group"
            >
              <AccordionTrigger className="text-lg font-medium py-5 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]]:text-emerald-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  Is my data secure?
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600 pl-11 text-base">
                Yes, we take data security very seriously. All your information is encrypted and we never share your
                personal data with third parties. We only use your inputs to generate your letters and improve our AI
                models. You can review our privacy policy for more details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white overflow-hidden group"
            >
              <AccordionTrigger className="text-lg font-medium py-5 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]]:text-emerald-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  Can I send letters directly from the platform?
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600 pl-11 text-base">
                Yes, premium users can send letters directly via email through our platform. Alternatively, all users
                can export their letters as PDF or Word documents to send through their preferred method.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border border-gray-200 rounded-xl px-6 shadow-sm bg-white overflow-hidden group"
            >
              <AccordionTrigger className="text-lg font-medium py-5 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]]:text-emerald-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  How do I get started?
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600 pl-11 text-base">
                Getting started is easy! Simply create an account, navigate to the Generate page, input your letter
                details, and let our AI do the rest. You can then review, edit, and export or send your letter as
                needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeIn>

        <FadeIn delay={200} className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-emerald-600 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Contact Support
          </a>
        </FadeIn>
      </div>
    </div>
  )
}

