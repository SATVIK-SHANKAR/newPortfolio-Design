import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">
        A little bit <span className="highlight">about</span> me
      </h1>
      <p className="text-lg text-muted-foreground mb-12">Get to know me better - “Who is Satvik, really?”</p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg">
             I’m Satvik — a full-stack developer, machine learning enthusiast, and certified adrenaline 
            junkie (<span className="highlight">self-certified, but still counts</span>).
          </p>

          <p className="text-lg">
            My weekdays are spent building things that don’t break (often), fine-tuning AI models that mostly mind their manners, 
            and crafting interfaces that feel like buttered toast: smooth and satisfying. From investment algorithms to 
            cross-platform playlist teleporters, I like solving problems with code and a little creative chaos.
          </p>

          <p className="text-lg">
            But hey — I’m not just pushing commits all day. When the weekend hits, I trade IDEs for inclines, swap bugs for boulders, 
            and go from debugging to bungee jumping (sometimes literally). I’m happiest when I’m either refactoring code or 
            dangling off a rock with a camera in one hand and a granola bar in the other.
          </p>

          <p className="text-lg">
            Whether it’s pushing commits or pushing my luck on a mountain trail, I’m always 
            chasing the next thrill in code and life.
          </p>

          <div className="pt-4">
            <h2 className="text-2xl font-semibold mb-4">
              <span className="highlight">Skills</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "UI/UX Design",
                "Front-end Development",
                "React",
                "Next.js",
                "TypeScript",
                "Figma",
                "Responsive Design",
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/44.jpeg"
            alt="Profile"
            width={500}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}
