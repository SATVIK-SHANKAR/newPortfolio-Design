import Link from "next/link"
import Image from "next/image"
import { Plane, Home } from "lucide-react"

// Places data
const placesLived = [
  {
    name: "Delhi",
    description: "The capital experience",
    year: "2015-2023",
    image: "/43.jpeg",
  },
  {
    name: "Singapore",
    description: "The capital experience",
    year: "2022-2024",
    image: "/37.jpeg",
  },
]

const placesTraveled = [
  {
    name: "Manali",
    description: "Mountain paradise in the Himalayas",
    year: "2019",
    image: "/placeholder.svg?height=200&width=200&text=Manali",
  },
]

export default function MoreMePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">
        More <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Me</span> 🌍
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Places I've called home and destinations that have shaped my journey.
      </p>

      {/* Places I've Lived Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-theme-100 dark:bg-theme-900/30 p-3 rounded-full">
            <Home className="h-6 w-6 text-theme-500" />
          </div>
          <h2 className="text-3xl font-bold">
            Places I've <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Lived</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placesLived.map((place) => (
            <Link href={`/more-me/${place.name.toLowerCase()}`} key={place.name} className="group">
              <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-all duration-300 h-full">
                <div className="relative h-48">
                  <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-theme-500 text-white px-2 py-1 rounded-full text-xs">
                    {place.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold group-hover:text-theme-500 transition-colors">{place.name}</h3>
                  <p className="text-muted-foreground">{place.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider with plane animation */}
      <div className="relative py-12 my-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-theme-500 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-theme-500 rounded-full p-4 animate-pulse">
            <Plane className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Places I've Traveled Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-theme-100 dark:bg-theme-900/30 p-3 rounded-full">
            <Plane className="h-6 w-6 text-theme-500" />
          </div>
          <h2 className="text-3xl font-bold">
            Places I've <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Traveled</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placesTraveled.map((place) => (
            <Link href={`/more-me/${place.name.toLowerCase()}`} key={place.name} className="group">
              <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-all duration-300 h-full dark:bg-gray-800/50">
                <div className="relative h-48">
                  <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-theme-500 text-white px-2 py-1 rounded-full text-xs">
                    {place.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold group-hover:text-theme-500 transition-colors">{place.name}</h3>
                  <p className="text-muted-foreground">{place.description}</p>
                  <div className="mt-3 text-theme-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View journey</span>
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
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
