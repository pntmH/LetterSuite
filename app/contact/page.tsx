"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import FadeIn from "@/components/animations/fade-in"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
    // In a real app, you would send this data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Learn more about LetterSuite AI and get in touch with our team.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn className="space-y-8" delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                At LetterSuite, we've built a team of expert linguists, writers, and AI specialists to create the most
                advanced letter generation platform available today. Our mission is to simplify professional
                communication and help people create impactful formal letters without the stress and time investment.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2022, LetterSuite has already helped thousands of professionals, students, and businesses
                craft perfect letters for every occasion. We're constantly improving our AI models to deliver even
                better results for our users.
              </p>
              <p className="text-gray-600">
                Our team is passionate about combining cutting-edge technology with the nuance and sophistication of
                professional writing. We believe that everyone deserves access to tools that help them communicate
                effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">support@lettersuite.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      123 AI Boulevard, Suite 456
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 5pm PST
                      <br />
                      Weekend: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
                  <p className="text-gray-600">
                    Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back
                    to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-emerald-600 transition-colors duration-300 group flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop"
                      alt="Customer support team ready to help"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

