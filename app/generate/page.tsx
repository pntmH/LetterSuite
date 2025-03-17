"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FadeIn from "@/components/animations/fade-in"
import { ArrowRight, FileText, Send, Download } from "lucide-react"

export default function GeneratePage() {
  const [formData, setFormData] = useState({
    recipient: "",
    recipientEmail: "",
    subject: "",
    purpose: "",
    wordCount: "300",
    additionalContent: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to AI service
    console.log("Form submitted:", formData)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-6 text-center">Generate Your Formal Letter</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Fill in the details below and our AI will create a professional letter tailored to your needs.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <FadeIn className="md:col-span-3 space-y-6" delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                Letter Parameters
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="recipient" className="text-gray-700">
                    To
                  </Label>
                  <Input
                    id="recipient"
                    name="recipient"
                    placeholder="Recipient name or organization"
                    value={formData.recipient}
                    onChange={handleChange}
                    className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipientEmail" className="text-gray-700">
                    Recipient Email (optional)
                  </Label>
                  <Input
                    id="recipientEmail"
                    name="recipientEmail"
                    placeholder="recipient@example.com"
                    type="email"
                    value={formData.recipientEmail}
                    onChange={handleChange}
                    className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject of your letter"
                    value={formData.subject}
                    onChange={handleChange}
                    className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose" className="text-gray-700">
                    Purpose
                  </Label>
                  <Input
                    id="purpose"
                    name="purpose"
                    placeholder="What's the purpose of this letter?"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wordCount" className="text-gray-700">
                    Word Count
                  </Label>
                  <Select value={formData.wordCount} onValueChange={(value) => handleSelectChange("wordCount", value)}>
                    <SelectTrigger className="transition-all duration-300 focus:ring-emerald-600 focus:border-emerald-600">
                      <SelectValue placeholder="Select word count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="150">Short (~150 words)</SelectItem>
                      <SelectItem value="300">Medium (~300 words)</SelectItem>
                      <SelectItem value="500">Long (~500 words)</SelectItem>
                      <SelectItem value="750">Extended (~750 words)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalContent" className="text-gray-700">
                    Additional Context (Optional)
                  </Label>
                  <Textarea
                    id="additionalContent"
                    name="additionalContent"
                    placeholder="Add any additional details or context for your letter"
                    rows={4}
                    value={formData.additionalContent}
                    onChange={handleChange}
                    className="transition-all duration-300 focus-visible:ring-emerald-600 focus-visible:border-emerald-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-emerald-600 transition-colors duration-300 group flex items-center justify-center gap-2"
                >
                  Generate
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </FadeIn>

          <FadeIn className="md:col-span-2" direction="left" delay={300}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                Preview
              </h2>

              <div className="border border-gray-200 rounded-md p-6 h-[400px] bg-gray-50 flex flex-col items-center justify-center">
                <div className="text-center space-y-4">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto" />
                  <p className="text-gray-400 text-center">Your letter preview will appear here after generation</p>

                  <div className="pt-4 flex flex-col gap-2">
                    <Button variant="outline" disabled className="text-gray-400 opacity-50">
                      <Send className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline" disabled className="text-gray-400 opacity-50">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
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

