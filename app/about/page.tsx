// import Image from "next/image"

// export default function AboutPage() {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-5xl font-bold mb-6">
//         A little bit <span className="highlight">about</span> me
//       </h1>
//       <p className="text-lg text-muted-foreground mb-12">Get to know me better - “Who is Satvik, really?”</p>

//       <div className="grid md:grid-cols-2 gap-12 items-start">
//         <div className="space-y-6">
//           <p className="text-lg">
//              I’m Satvik — a full-stack developer, machine learning enthusiast, and certified adrenaline 
//             junkie (<span className="highlight">self-certified, but still counts</span>).
//           </p>

//           <p className="text-lg">
//             My weekdays are spent building things that don’t break (often), fine-tuning AI models that mostly mind their manners, 
//             and crafting interfaces that feel like buttered toast: smooth and satisfying. From investment algorithms to 
//             cross-platform playlist teleporters, I like solving problems with code and a little creative chaos.
//           </p>

//           <p className="text-lg">
//             But hey — I’m not just pushing commits all day. When the weekend hits, I trade IDEs for inclines, swap bugs for boulders, 
//             and go from debugging to bungee jumping (sometimes literally). I’m happiest when I’m either refactoring code or 
//             dangling off a rock with a camera in one hand and a granola bar in the other.
//           </p>

//           <p className="text-lg">
//             Whether it’s pushing commits or pushing my luck on a mountain trail, I’m always 
//             chasing the next thrill in code and life.
//           </p>

//           <div className="pt-4">
//             <h2 className="text-2xl font-semibold mb-4">
//               <span className="highlight">Skills</span>
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "UI/UX Design",
//                 "Front-end Development",
//                 "React",
//                 "Next.js",
//                 "TypeScript",
//                 "Figma",
//                 "Responsive Design",
//               ].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <Image
//             src="/44.jpeg"
//             alt="Profile"
//             width={500}
//             height={600}
//             className="rounded-lg object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }




// import Image from "next/image"
// import { SpotifyPlayer } from "@/components/spotify-player"

// export default function AboutPage() {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-5xl font-bold mb-6">
//         A little bit <span className="highlight">about</span> me
//       </h1>
//       <p className="text-lg text-muted-foreground mb-12">Get to know me better - “Who is Satvik, really?”</p>

//       <div className="grid md:grid-cols-2 gap-12 items-start">
//         <div className="space-y-6">
//         <p className="text-lg">
//                 I’m Satvik — a full-stack developer, machine learning enthusiast, and certified adrenaline 
//                junkie (<span className="highlight">self-certified, but still counts</span>).
//              </p>

//              <p className="text-lg">
//                My weekdays are spent building things that don’t break (often), fine-tuning AI models that mostly mind their manners, 
//                and crafting interfaces that feel like buttered toast: smooth and satisfying. From investment algorithms to 
//                cross-platform playlist teleporters, I like solving problems with code and a little creative chaos.
//              </p>

//              <p className="text-lg">
//                But hey — I’m not just pushing commits all day. When the weekend hits, I trade IDEs for inclines, swap bugs for boulders, 
//                and go from debugging to bungee jumping (sometimes literally). I’m happiest when I’m either refactoring code or 
//                dangling off a rock with a camera in one hand and a granola bar in the other.
//              </p>

//              <p className="text-lg">
//                Whether it’s pushing commits or pushing my luck on a mountain trail, I’m always 
//                chasing the next thrill in code and life.
//              </p>

//           <div className="pt-4">
//             <h2 className="text-2xl font-semibold mb-4">
//               <span className="highlight">Skills</span>
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "UI/UX Design",
//                 "Front-end Development",
//                 "React",
//                 "Next.js",
//                 "TypeScript",
//                 "Figma",
//                 "Responsive Design",
//               ].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="pt-6">
//             <h2 className="text-2xl font-semibold mb-4">
//               <span className="highlight">Music I Love</span>
//             </h2>
//             <div className="mt-4">
//               <SpotifyPlayer playlistId="0aGu9GaMc4Af0anGtlICFt" />
//             </div>
//           </div>
//         </div>

//         <div className="space-y-12">
//           <div className="relative">
//             <Image
//               src="/44.jpeg"
//               alt="Profile"
//               width={500}
//               height={600}
//               className="rounded-lg object-cover"
//             />
//           </div>

//           <div className="bg-muted p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-3">
//               <span className="highlight">Fun Facts</span>
//             </h3>
//             <ul className="space-y-2">
//               <li>• Coffee enthusiast with a home espresso setup</li>
//               <li>• Amateur photographer specializing in street photography</li>
//               <li>• Avid reader with a focus on design theory and philosophy</li>
//               <li>• Enjoy rock climbing on weekends</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }





import Image from "next/image"
import { SpotifyPlayer } from "@/components/spotify-player"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">
        A little bit <span className="highlight">about</span> me
      </h1>
      <p className="text-lg text-muted-foreground mb-12">Get to know me better</p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg">
            I'm a <span className="highlight">designer and developer</span> with over 5 years of experience creating
            digital products that users love. I specialize in user interface design, front-end development, and creating
            cohesive design systems.
          </p>

          <p className="text-lg">
            My approach combines <span className="highlight">aesthetic sensibility</span> with technical expertise to
            build experiences that are both beautiful and functional. I believe in{" "}
            <span className="highlight">thoughtful design</span> that solves real problems.
          </p>

          <p className="text-lg">
            When I'm not designing or coding, you can find me exploring <span className="highlight">hiking trails</span>
            , taking photographs, or experimenting with new creative techniques. I'm passionate about continuous
            learning and staying on top of industry trends.
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
                "Design Systems",
                "Responsive Design",
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">
              <span className="highlight">Music I Love</span>
            </h2>
            <div className="mt-4">
              <SpotifyPlayer playlistId="0aGu9GaMc4Af0anGtlICFt" />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="relative">
            <Image
              src="/44.jpeg"
              alt="Profile"
              width={500}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              <span className="highlight">Fun Facts</span>
            </h3>
            <ul className="space-y-2">
              <li>• Coffee enthusiast with a home espresso setup</li>
              <li>• Amateur photographer specializing in street photography</li>
              <li>• Avid reader with a focus on design theory and philosophy</li>
              <li>• Enjoy rock climbing on weekends</li>
            </ul>
          </div>

          <div className="mt-12 relative">
            <div className="relative">
              <h3 className="text-xl font-semibold mb-3 bg-orange-100 dark:bg-orange-900/30 px-3 py-2 inline-block rounded-md">
                Discover More
              </h3>

              <div className="relative mt-8">
                <svg
                  className="absolute -top-12 right-32 w-24 h-24 text-orange-500 z-10"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70,10 Q50,30 60,60 Q65,80 40,80"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  />
                  <path
                    d="M45,75 L40,80 L35,75"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <Link href="/more-me" className="inline-block">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                    <span>More Me</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plane"
                    >
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
