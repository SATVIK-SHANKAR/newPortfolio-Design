import Image from "next/image"

const photos = [
  { id: 37, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/37.jpeg" },
  { id: 38, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/38.jpeg" },
  { id: 39, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/39.jpeg" },
  { id: 40, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/40.jpeg" },
  { id: 41, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/41.jpeg" },
  { id: 42, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/42.jpeg" },
  { id: 43, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/43.jpeg" },
  { id: 44, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/44.jpeg" },
  { id: 45, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/45.jpeg" },
  { id: 46, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/46.jpeg" },
  { id: 1, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/1.jpeg" },
  { id: 2, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/2.jpeg" },
  { id: 3, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/3.jpeg" },
  { id: 4, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/4.jpeg" },
  { id: 5, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/5.jpeg" },
  { id: 6, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/6.jpeg" },
  { id: 7, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/7.jpeg" },
  { id: 8, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/8.jpeg" },
  { id: 9, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/9.jpeg" },
  { id: 10, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/10.jpeg" },
  { id: 11, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/11.jpeg" },
  { id: 12, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/12.jpeg" },
  { id: 13, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/13.jpeg" },
  { id: 14, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/14.jpeg" },
  { id: 15, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/15.jpeg" },
  { id: 16, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/16.jpeg" },
  { id: 17, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/17.jpeg" },
  { id: 18, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/18.jpeg" },
  { id: 19, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/19.jpeg" },
  { id: 20, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/20.jpeg" },
  { id: 21, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/21.jpeg" },
  { id: 22, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/22.jpeg" },
  { id: 23, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/23.jpeg" },
  { id: 24, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/24.jpeg" },
  { id: 25, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/25.jpeg" },
  { id: 26, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/26.jpeg" },
  { id: 27, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/27.jpeg" },
  { id: 28, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/28.jpeg" },
  { id: 29, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/29.jpeg" },
  { id: 30, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/30.jpeg" },
  { id: 31, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/31.jpeg" },
  { id: 32, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/32.jpeg" },
  { id: 33, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/33.jpeg" },
  { id: 34, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/34.jpeg" },
  { id: 35, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/35.jpeg" },
  { id: 36, title: "Mountain Landscape", location: "Triund Trek, HP, India", date: "June 2023", image: "/36.jpeg" },
  
]

export default function PhotographyPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">
        <span className="bg-orange-200 dark:bg-orange-900/50 px-2">Photography</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        A collection of my favorite photographs from my travels and explorations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src={photo.image || "/placeholder.svg"}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-semibold">{photo.title}</h3>
              <p>
                {photo.location} • {photo.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
