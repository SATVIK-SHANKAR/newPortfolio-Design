import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t mt-12 py-8 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-muted-foreground">
              Creating <span className="bg-theme-200 dark:bg-theme-900/50 px-1">thoughtful</span> digital experiences
              that blend form and function.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">satvik.shankar2003@gmail.com</li>
              <li className="text-muted-foreground">+65 96502726</li>
              <li className="text-muted-foreground">New Delhi, India</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/SATVIK-SHANKAR" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/satvik-shankar-49b193226/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/satvik.i.o/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center dark:border-gray-800">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            <span className="bg-theme-200 dark:bg-theme-900/50 px-1">Designed</span> and{" "}
            <span className="bg-theme-200 dark:bg-theme-900/50 px-1">developed</span> with passion
          </p>
        </div>
      </div>
    </footer>
  )
}
