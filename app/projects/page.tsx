// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// const projects = [
//   {
//     id: 1,
//     title: "Broke-Mate",
//     description:
//       "BrokeMate is an AI-powered Telegram bot that simplifies expense tracking and bill splitting for groups. It supports natural language input, receipt scanning, smart reminders, and multilingual interactions — all powered by the Gemini API.",
//     tags: ["UI/UX Design", "NextJs", "TypeScript", "TailwindCSS"],
//     image: "/brokeMate.png",
//   },
//   {
//     id: 2,
//     title: "Investly",
//     description:
//       "A comprehensive dashboard for financial analytics with real-time data visualization and reporting features.",
//     tags: ["NextJs", "TypeScript", "Chart.js", "TailwindCSS"],
//     image: "/investly.png",
//   },
  
// ]

// export default function ProjectsPage() {
//   return (
//     <div>
//       <h1 className="text-5xl font-bold mb-6">
//         My <span className="bg-orange-200 dark:bg-orange-900/50 px-2">Projects</span>
//       </h1>
//       <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
//         A collection of my recent work spanning UI/UX design, front-end development, and design systems.
//       </p>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <div key={project.id} className="border rounded-lg overflow-hidden group hover:shadow-md transition-all">
//             <div className="relative aspect-video">
//               <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
//             </div>
//             <div className="p-5 space-y-3">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-muted-foreground">{project.description}</p>
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {project.tags.map((tag) => (
//                   <span key={tag} className="px-2 py-1 bg-muted rounded-full text-xs">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <Button asChild variant="link" className="p-0 h-auto text-orange-500">
//                 <Link href={`/projects/${project.id}`}>View Project Details →</Link>
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Broke-Mate",
    description:
      "BrokeMate is an AI-powered Telegram bot that simplifies expense tracking and bill splitting for groups. It supports natural language input, receipt scanning, smart reminders, and multilingual interactions — all powered by the Gemini API.",
    tags: ["UI/UX Design", "NextJs", "TypeScript", "TailwindCSS"],
    image: "/brokeMate.png",
    liveUrl: "https://broke-mate.vercel.app/", // Replace with actual URL
  },
  {
    id: 2,
    title: "Investly",
    description:
      "Investly (Orbital) is a portfolio optimization web app that delivers personalized investment insights using real-time financial data. It features intelligent asset allocation, a responsive UI, and interactive visualizations — built with Next.js, TypeScript, and Chart.js.",
    tags: ["NextJs", "TypeScript", "Chart.js", "TailwindCSS"],
    image: "/investly.png",
    liveUrl: "https://investly-v-2-1.vercel.app/", // Replace with actual URL
  },
  {
    id: 3,
    title: "Hospital Connect",
    description:
      "Hospital Connect is a blockchain-powered web app that provides a live global directory of hospital resources. It enables hospitals to request and share critical medical supplies like ventilators and machines during emergencies.",
    tags: ["NextJs", "TypeScript", "Chart.js", "TailwindCSS"],
    image: "/hospitalConnect.png",
    liveUrl: "https://hospital-connect-delta.vercel.app/", // Replace with actual URL
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">
        My <span className="bg-orange-200 dark:bg-orange-900/50 px-2">Projects</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        A collection of my recent work spanning UI/UX design, front-end development, and design systems.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden group hover:shadow-md transition-all">
            <div className="relative aspect-video">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Project Details →
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
