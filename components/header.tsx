"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-600 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
            <span className="text-white font-bold">LS</span>
          </div>
          <span className="font-semibold text-lg group-hover:text-emerald-600 transition-colors duration-300">
            LetterSuite
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/generate"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-emerald-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300",
                pathname === "/generate"
                  ? "text-emerald-600 after:w-full"
                  : "text-gray-600 after:w-0 hover:after:w-full",
              )}
            >
              Generate
            </Link>
            <Link
              href="/how-it-works"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-emerald-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300",
                pathname === "/how-it-works"
                  ? "text-emerald-600 after:w-full"
                  : "text-gray-600 after:w-0 hover:after:w-full",
              )}
            >
              How It Works
            </Link>
            <Link
              href="/faqs"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-emerald-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300",
                pathname === "/faqs" ? "text-emerald-600 after:w-full" : "text-gray-600 after:w-0 hover:after:w-full",
              )}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-emerald-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300",
                pathname === "/contact"
                  ? "text-emerald-600 after:w-full"
                  : "text-gray-600 after:w-0 hover:after:w-full",
              )}
            >
              Contact Us
            </Link>
          </nav>

          <Link
            href="/generate"
            className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-emerald-600 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Get Started
          </Link>

          <button
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-6 items-center">
          <Link
            href="/generate"
            className={cn(
              "text-lg font-medium transition-colors",
              pathname === "/generate" ? "text-emerald-600" : "text-gray-800",
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Generate
          </Link>
          <Link
            href="/how-it-works"
            className={cn(
              "text-lg font-medium transition-colors",
              pathname === "/how-it-works" ? "text-emerald-600" : "text-gray-800",
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/faqs"
            className={cn(
              "text-lg font-medium transition-colors",
              pathname === "/faqs" ? "text-emerald-600" : "text-gray-800",
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-lg font-medium transition-colors",
              pathname === "/contact" ? "text-emerald-600" : "text-gray-800",
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

