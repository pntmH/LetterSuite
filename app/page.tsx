import Image from "next/image"
import Link from "next/link"
import { Clock, FileText, Zap, ArrowRight, Check } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-emerald-50">
        <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <FadeIn className="w-full md:w-1/2 space-y-6" delay={100}>
            <div className="inline-flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
              <div className="w-6 h-6 bg-emerald-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">LS</span>
              </div>
              <span className="text-sm font-medium">LetterSuite</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-emerald-600">LetterSuite AI</span>
            </h1>
            <p className="text-gray-600 text-lg">Create professional formal letters with ease using AI technology.</p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/generate"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-emerald-600 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-medium px-6 py-3 rounded-md border border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Learn More
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="w-full md:w-1/2" direction="left" delay={300}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <Image
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                alt="Professional document with emerald accents"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto relative"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">Why Choose LetterSuite AI?</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Our platform combines cutting-edge AI with professional writing expertise to deliver perfect letters every
              time.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                  <Zap className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-gray-600">
                  Advanced AI algorithms create perfect letters in seconds, no templates needed. Our technology
                  understands context and purpose.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Context-aware generation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Professional tone adjustment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Grammar and style perfection</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                  <Clock className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Time-Saving</h3>
                <p className="text-gray-600">
                  Create professional letters in minutes, not hours, with our intuitive interface. Focus on what matters
                  most to you.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>80% time reduction</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Intuitive user interface</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Quick editing capabilities</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={300} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                  <FileText className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Export</h3>
                <p className="text-gray-600">
                  Export to PDF, Word, or email directly from our platform with one click. Share your professional
                  letters instantly.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Multiple export formats</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Direct email integration</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Cloud storage options</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">What Our Users Say</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Thousands of professionals trust LetterSuite AI for their formal communication needs.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100} direction="up">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "It's a lifesaver. This tool has saved countless hours writing formal letters for my business. The
                  quality is exceptional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold">
                    S
                  </div>
                  <div>
                    <div className="text-sm font-medium">Sarah Johnson</div>
                    <div className="text-xs text-gray-500">Business Owner</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The quality of my formal letters has improved dramatically since I started using LetterSuite AI. It's
                  intuitive and powerful."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    M
                  </div>
                  <div>
                    <div className="text-sm font-medium">Michael Thompson</div>
                    <div className="text-xs text-gray-500">HR Manager</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "LetterSuite AI has streamlined our communication process. It's saved us many hours of work and
                  improved our professional image."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                    J
                  </div>
                  <div>
                    <div className="text-sm font-medium">Jennifer Keller</div>
                    <div className="text-xs text-gray-500">Executive Assistant</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <FadeIn>
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold">10k+</div>
                <div className="text-emerald-100">Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">500k+</div>
                <div className="text-emerald-100">Letters Generated</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-emerald-100">Satisfaction Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">80%</div>
                <div className="text-emerald-100">Time Saved</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start creating professional letters today!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of professionals who trust LetterSuite AI for their formal communication needs.
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium px-8 py-4 rounded-md hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg group text-lg"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

