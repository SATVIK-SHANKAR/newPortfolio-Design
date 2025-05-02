import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="highlight">Designer</span> <span className="inline-block">&</span> <br />
            <span>Developer</span> <br />
            crafting <span className="highlight">digital</span> <br />
            experiences
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            I create <span className="highlight">thoughtful</span> user interfaces and digital experiences that blend
            form and function seamlessly.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button
              variant="outline"
              className="border-orange-200 dark:border-orange-500 hover:bg-orange-100 dark:hover:bg-orange-900/20"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-square max-w-md">
          <Image
            src="/38.jpeg"
            alt="Portfolio hero image"
            width={500}
            height={500}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* <section className="space-y-4">
        <h2 className="text-3xl font-bold">
          <span className="highlight">Featured</span> Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden group hover:shadow-md transition-all">
              <div className="relative aspect-video">
                <Image
                  src={`/placeholder.svg?height=300&width=500&text=Project+${i}`}
                  alt={`Project ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Project Title {i}</h3>
                <p className="text-muted-foreground">
                  A <span className="highlight">brief description</span> of this amazing project and the technologies
                  used.
                </p>
                <Link href={`/projects/${i}`} className="text-orange-500 hover:underline inline-block pt-2">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-6">
          <Button
            variant="outline"
            asChild
            className="border-orange-200 dark:border-orange-500 hover:bg-orange-100 dark:hover:bg-orange-900/20"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section> */}
    </div>
  )
}
