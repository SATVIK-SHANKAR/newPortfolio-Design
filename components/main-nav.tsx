"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Blogs", path: "/blogs" },
  { name: "Photography", path: "/photography" },
  { name: "Quotes", path: "/quotes" },
  { name: "Contact", path: "/contact" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`text-base transition-colors hover:text-theme-500 ${pathname === item.path ? "font-medium" : ""}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
