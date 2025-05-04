"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

// Update the ColorTheme type to include the new "steel" theme
type ColorTheme = "orange" | "purple" | "steel"

interface ColorThemeContextType {
  colorTheme: ColorTheme
  toggleColorTheme: () => void
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("orange")

  useEffect(() => {
    // Load saved preference from localStorage
    const savedColorTheme = localStorage.getItem("portfolio-color-theme") as ColorTheme | null
    if (savedColorTheme) {
      setColorTheme(savedColorTheme)
      document.documentElement.setAttribute("data-color-theme", savedColorTheme)
    } else {
      document.documentElement.setAttribute("data-color-theme", "orange")
    }
  }, [])

  // Modify the toggleColorTheme function to cycle through three themes
  const toggleColorTheme = () => {
    let newTheme: ColorTheme

    if (colorTheme === "orange") {
      newTheme = "purple"
    } else if (colorTheme === "purple") {
      newTheme = "steel"
    } else {
      newTheme = "orange"
    }

    setColorTheme(newTheme)
    document.documentElement.setAttribute("data-color-theme", newTheme)
    localStorage.setItem("portfolio-color-theme", newTheme)
  }

  return <ColorThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>{children}</ColorThemeContext.Provider>
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider")
  }
  return context
}
