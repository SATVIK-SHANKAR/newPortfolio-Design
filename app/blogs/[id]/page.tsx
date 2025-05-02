import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or markdown files
const blogs = [
  {
    id: "1",
    title: "The Evolution of Design Systems",
    content: `
# The Evolution of Design Systems

Design systems have become an <span class="highlight">essential part</span> of modern product development, enabling teams to create consistent, scalable, and efficient user interfaces. But how did we get here? Let's explore the evolution of design systems and why they're so important today.

## The Early Days: Style Guides

In the early days of web design, organizations relied on simple style guides to maintain consistency across their digital products. These guides typically included basic elements like colors, typography, and logo usage guidelines.

While style guides provided a foundation for <span class="highlight">brand consistency</span>, they often fell short when it came to implementation details, leaving developers to interpret and implement designs in various ways.

## The Rise of Pattern Libraries

As web applications became more complex, designers and developers began to recognize the need for more comprehensive documentation. This led to the emergence of pattern libraries—collections of reusable components and patterns that could be assembled to create consistent user interfaces.

Pattern libraries represented a <span class="highlight">significant step forward</span>, providing concrete examples and code snippets that developers could reference and reuse. However, they still lacked the systematic approach and tooling that modern design systems offer.

## Modern Design Systems

Today's design systems go beyond static documentation, offering a complete ecosystem of tools, components, and guidelines that support the entire product development lifecycle. A modern design system typically includes:

- **Design principles** that guide decision-making
- **Component libraries** with both design assets and code implementations
- **Documentation** that explains usage guidelines and best practices
- **Design tokens** that store visual attributes like colors, spacing, and typography
- **Governance processes** to maintain and evolve the system
- **Tooling** that supports implementation and adoption

## Benefits of Modern Design Systems

The evolution of design systems has brought numerous benefits to organizations:

### Consistency
Design systems ensure a <span class="highlight">consistent user experience</span> across products and platforms, strengthening brand identity and reducing user confusion.

### Efficiency
By providing reusable components and clear guidelines, design systems accelerate the development process and reduce redundant work.

### Collaboration
Design systems serve as a shared language between designers, developers, and other stakeholders, improving communication and collaboration.

### Scalability
As products grow and teams expand, design systems provide a foundation that can scale with the organization's needs.

## The Future of Design Systems

As technology continues to evolve, so too will design systems. We're already seeing trends like:

- Integration with AI to automate design decisions
- Support for multiple design modes (light/dark) and accessibility features
- More sophisticated tooling for design token management
- Cross-platform design systems that work seamlessly across web, mobile, and emerging platforms

Design systems have come a long way from simple style guides, and their importance in product development will only continue to grow in the years to come.
    `,
    date: "May 1, 2025",
    author: "Jane Smith",
    category: "Design",
    image: "/placeholder.svg?height=500&width=1000&text=Design+Systems",
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const blog = blogs.find((blog) => blog.id === params.id)

  if (!blog) {
    return <div>Blog post not found</div>
  }

  // Convert markdown to HTML with proper formatting
  const formatContent = (content: string) => {
    // Process headings
    let formatted = content
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mt-6 mb-3">$1</h3>')

    // Process lists
    formatted = formatted.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')

    // Process paragraphs (any line that's not a heading or list)
    formatted = formatted.replace(/^(?!<h|<li)(.*$)/gm, (match) => {
      if (match.trim() === "") return "<br />"
      return `<p class="mb-4 text-lg">${match}</p>`
    })

    // Process bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')

    return formatted
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Button variant="ghost" asChild className="mb-6 hover:bg-orange-100 dark:hover:bg-orange-900/20">
        <Link href="/blogs">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </Button>

      <div className="relative aspect-[2/1] mb-8">
        <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover rounded-lg" />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">{blog.category}</div>
        <div className="text-sm text-muted-foreground">
          {blog.date} • By <span className="highlight">{blog.author}</span>
        </div>
      </div>

      <article className="border border-muted rounded-lg p-8 bg-card">
        <div dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }} />
      </article>
    </div>
  )
}
