import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    id: 1,
    title: "The Evolution of Design Systems",
    excerpt:
      "How design systems have evolved over the years and why they're <span class='highlight'>essential</span> for modern product development.",
    date: "May 1, 2025",
    readTime: "5 min read",
    category: "Design",
    image: "/placeholder.svg?height=300&width=500&text=Design+Systems",
  },
]

export default function BlogsPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">
        <span className="highlight">Blogs</span> & Articles
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Thoughts, insights, and <span className="highlight">tutorials</span> on design, development, and the
        intersection of both.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg overflow-hidden group hover:shadow-md transition-all">
            <div className="relative aspect-video">
              <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-theme-500 text-white px-2 py-1 rounded-full text-xs">
                {blog.category}
              </div>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
              <Button asChild variant="link" className="p-0 h-auto text-theme-500">
                <Link href={`/blogs/${blog.id}`}>Read More →</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
