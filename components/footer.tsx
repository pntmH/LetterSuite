import Link from "next/link"
import { Mail, Phone, Twitter, Instagram, Facebook, Linkedin, Youtube, Github, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold">LS</span>
              </div>
              <span className="font-semibold text-lg">LetterSuite</span>
            </div>
            <p className="text-gray-600 text-sm">
              Creating professional formal letters with AI technology. Save time and ensure perfect communication every
              time.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Link href="#" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/generate"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Generate Letter
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Letter Templates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Writing Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Stay updated with our latest features and tips on creating perfect formal letters.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white focus-visible:ring-emerald-600"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">©{new Date().getFullYear()} LetterSuite AI. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
              <Phone className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-emerald-600 transition-colors duration-300">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

