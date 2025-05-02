import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"
import { FaDribbble } from "react-icons/fa"

export function SocialIcons() {
  return (
    <div className="flex items-center space-x-5">
      <Link
        href="https://github.com/SATVIK-SHANKAR"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-orange-500 transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/satvik-shankar-49b193226/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-orange-500 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="https://dribbble.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-orange-500 transition-colors"
        aria-label="Dribbble"
      >
        <FaDribbble className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.instagram.com/satvik.i.o/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-orange-500 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </Link>
    </div>
  )
}
