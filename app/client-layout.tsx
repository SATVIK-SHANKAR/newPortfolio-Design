"use client"

import type React from "react"
import { SocialIcons } from "@/components/social-icons"
import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

interface ClientRootLayoutProps {
  children: React.ReactNode
}

export function ClientRootLayout({ children }: ClientRootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-orange-500 border-[25px] min-h-screen flex flex-col">
        <header className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <div className="flex items-center gap-4">
              <MainNav />
              <MobileNav />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="flex-1 container mx-auto py-8 px-4">{children}</main>
        <FooterWrapper />
      </div>
    </div>
  )
}

export default ClientRootLayout

// Client component to conditionally render the footer
function FooterWrapper() {
  return (
    <>
      <ClientFooter />
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <SocialIcons />
      </div>
    </>
  )
}

// Client component to check the current path
function ClientFooter() {
  const pathname = usePathname()

  if (pathname === "/contact") {
    return <Footer />
  }

  return null
}
