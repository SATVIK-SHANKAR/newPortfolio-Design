"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"

// Array of inspirational quotes
const quotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano",
  },
  {
    text: "Design is intelligence made visible.",
    author: "Alina Wheeler",
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames",
  },
  {
    text: "Design creates culture. Culture shapes values. Values determine the future.",
    author: "Robert L. Peters",
  },
  {
    text: "The function of design is letting design function.",
    author: "Micha Commeren",
  },
  {
    text: "Design is where science and art break even.",
    author: "Robin Mathew",
  },
  {
    text: "A user interface is like a joke. If you have to explain it, it's not that good.",
    author: "Martin LeBlanc",
  },
  {
    text: "The best design is the simplest one that works.",
    author: "Albert Einstein",
  },
]

export default function QuotesPage() {
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null)

  useEffect(() => {
    // Get a random quote or use date to determine quote of the day
    const today = new Date()
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    const quoteIndex = dayOfYear % quotes.length
    setQuote(quotes[quoteIndex])
  }, [])

  if (!quote) return <div className="flex justify-center items-center h-[60vh]">Loading quote...</div>

  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="highlight">Quote</span> of the Day
        </h1>

        <div className="relative">
          <Quote className="absolute -top-6 -left-6 text-orange-200 dark:text-orange-500/60 h-12 w-12 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-serif italic px-8 py-4">{quote.text}</blockquote>
          <div className="mt-4 text-right text-lg text-muted-foreground">
            — <span className="highlight">{quote.author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
