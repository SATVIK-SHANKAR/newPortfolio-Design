"use client"

import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useColorTheme } from "./theme-context"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { colorTheme, toggleColorTheme } = useColorTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="w-10 h-10 opacity-0" />
        <Button variant="ghost" size="icon" className="w-10 h-10 opacity-0" />
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"
  const isOrange = colorTheme === "orange"

  const getNextThemeName = () => {
    if (colorTheme === "orange") return "purple"
    if (colorTheme === "purple") return "steel"
    return "orange"
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleColorTheme}
        className={`w-10 h-10 rounded-full transition-colors ${
          isDark
            ? "bg-gray-800 border-theme-500 text-theme-500 hover:bg-gray-700"
            : "bg-white border-theme-500 text-theme-500 hover:bg-theme-50"
        }`}
        aria-label={`Switch to ${getNextThemeName()} theme`}
      >
        <Palette className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle color theme</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`w-10 h-10 rounded-full transition-colors ${
          isDark
            ? "bg-gray-800 border-theme-500 text-theme-500 hover:bg-gray-700"
            : "bg-white border-theme-500 text-theme-500 hover:bg-theme-50"
        }`}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
