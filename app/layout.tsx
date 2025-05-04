import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ColorThemeProvider } from "@/components/theme-context"
import { ClientRootLayout } from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Designer & Developer",
  description: "Personal portfolio website for a designer and developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <ColorThemeProvider>
            <ClientRootLayout>{children}</ClientRootLayout>
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
