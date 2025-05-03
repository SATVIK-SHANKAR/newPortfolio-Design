"use client"

import { useEffect, useState } from "react"

export function EntryAnimation() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Set a timeout to match the animation duration (2s) plus a small buffer
    const timer = setTimeout(() => {
      setIsAnimating(false)

      // Add a small delay before removing from DOM to ensure animation completes
      setTimeout(() => {
        setIsVisible(false)
      }, 200)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none ${
        isAnimating ? "animate-reveal" : "opacity-0 transition-opacity duration-300"
      }`}
    >
      <div className="w-full h-full bg-background flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-[#F97315] animate-expand" />
      </div>
    </div>
  )
}
