import { Cpu, FileEdit, Send, UserCircle } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-6 text-center">How It Works</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Our simple 4-step process makes creating professional letters effortless.
          </p>
        </FadeIn>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-200 to-transparent"></div>

            <FadeIn className="space-y-6" delay={100}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-emerald-700">1</span>
                </div>
                <h2 className="text-2xl font-semibold">Input Your Details</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Start by providing the basic information for your letter, including recipient, subject, and purpose. The
                more details you provide, the better the result.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Enter recipient information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Specify the subject and purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Add any additional context or requirements</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={200}>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-blue-50 rounded-2xl flex items-center justify-center group hover:bg-blue-100 transition-colors duration-300 shadow-md">
                  <UserCircle className="w-32 h-32 text-blue-300 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="font-bold text-blue-500">01</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-200 to-transparent"></div>

            <FadeIn direction="right" delay={200} className="order-2 md:order-1">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-purple-50 rounded-2xl flex items-center justify-center group hover:bg-purple-100 transition-colors duration-300 shadow-md">
                  <Cpu className="w-32 h-32 text-purple-300 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="font-bold text-purple-500">02</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="space-y-6 order-1 md:order-2" delay={100}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-emerald-700">2</span>
                </div>
                <h2 className="text-2xl font-semibold">AI Generation</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Our advanced AI analyzes your input and generates a professional, contextually appropriate letter. The
                AI considers tone, formality level, and purpose.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>AI processes your requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Generates appropriate content and structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Applies professional formatting</span>
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-200 to-transparent"></div>

            <FadeIn className="space-y-6" delay={100}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-emerald-700">3</span>
                </div>
                <h2 className="text-2xl font-semibold">Review and Edit</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Review the generated letter and make any necessary edits or adjustments to perfect the content before
                finalizing.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Preview your generated letter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Make any desired adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Finalize the content and formatting</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={200}>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-amber-50 rounded-2xl flex items-center justify-center group hover:bg-amber-100 transition-colors duration-300 shadow-md">
                  <FileEdit className="w-32 h-32 text-amber-300 group-hover:text-amber-400 transition-colors duration-300" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="font-bold text-amber-500">03</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" delay={200} className="order-2 md:order-1">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-sky-50 rounded-2xl flex items-center justify-center group hover:bg-sky-100 transition-colors duration-300 shadow-md">
                  <Send className="w-32 h-32 text-sky-300 group-hover:text-sky-400 transition-colors duration-300" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="font-bold text-sky-500">04</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="space-y-6 order-1 md:order-2" delay={100}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-emerald-700">4</span>
                </div>
                <h2 className="text-2xl font-semibold">Export or Send</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Once you're happy with your letter, export it as a PDF or Word document, or send it directly via email
                through our platform.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Export to PDF, Word, or other formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Send directly via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Save to your account for future reference</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* AI Technology Section */}
        <FadeIn className="mt-32">
          <h2 className="text-3xl font-bold mb-8 text-center">Our AI Technology</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Powered by state-of-the-art language models and trained on millions of professional documents.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                Expertise
              </h3>
              <p className="text-gray-600">
                Trained on millions of professional business letters from various industries and contexts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                Smart
              </h3>
              <p className="text-gray-600">
                Adapts to context, purpose, and tone requirements to create perfectly tailored communications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                AI
              </h3>
              <p className="text-gray-600">
                Powered by state-of-the-art natural language processing and large language models.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                Continuous
              </h3>
              <p className="text-gray-600">
                Constantly learning and improving with feedback from users and professional writers.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

