import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Utensils, MapPin, Compass, Mountain, MessageSquare, Calendar, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the place data type
type PlaceData = {
  name: string
  description: string
  bestTimeToVisit: {
    text: string
    bestMonths: string[]
  }
  food: {
    name: string
    description: string
  }[]
  mustVisit: {
    name: string
    description: string
  }[]
  thingsToDo: {
    name: string
    description: string
  }[]
  scenicPoints: {
    name: string
    description: string
  }[]
  experience: string
  gallery: string[]
}

// Sample data for places
const placesData: Record<string, PlaceData> = {
  manali: {
    name: "Manali",
    description: "Mountain paradise in the Himalayas",
    bestTimeToVisit: {
      text: "The best time to visit Manali is from March to June when the weather is pleasant for outdoor activities. Winter (December to February) offers snow activities but some roads may be closed. Monsoon season (July to September) brings lush landscapes but also risk of landslides.",
      bestMonths: ["Mar", "Apr", "May", "Jun", "Oct"],
    },
    food: [
      { name: "Siddu", description: "A local bread stuffed with poppy seeds and served with ghee" },
      { name: "Trout Fish", description: "Freshwater fish from the Beas river, usually served grilled or fried" },
      { name: "Tibetan Momos", description: "Steamed dumplings filled with vegetables or meat" },
    ],
    mustVisit: [
      { name: "Solang Valley", description: "Known for adventure sports like paragliding and skiing" },
      { name: "Hadimba Temple", description: "Ancient wooden temple dedicated to Goddess Hadimba" },
      { name: "Old Manali", description: "Bohemian area with cafes, shops, and a relaxed vibe" },
    ],
    thingsToDo: [
      { name: "River Rafting", description: "Experience white water rafting in the Beas River" },
      { name: "Paragliding", description: "Soar above the Kullu Valley with stunning mountain views" },
      { name: "Trek to Bhrigu Lake", description: "A moderate trek to a high-altitude glacial lake" },
    ],
    scenicPoints: [
      { name: "Rohtang Pass", description: "High mountain pass with panoramic views of glaciers and peaks" },
      { name: "Jogini Falls", description: "Beautiful waterfall accessible via a short trek" },
      { name: "Gulaba", description: "Meadows and viewpoints with snow-capped mountain vistas" },
    ],
    experience:
      "My trip to Manali was a perfect blend of adventure and tranquility. The crisp mountain air, majestic Himalayan views, and the sound of the Beas River created a serene atmosphere. I spent days exploring the valleys, trying local cuisine, and meeting fellow travelers from around the world. The highlight was paragliding over the valley - an experience I'll never forget!",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Manali+Mountains",
      "/placeholder.svg?height=400&width=600&text=Manali+River",
      "/placeholder.svg?height=400&width=600&text=Manali+Temple",
      "/placeholder.svg?height=400&width=600&text=Manali+Adventure",
    ],
  },
  goa: {
    name: "Goa",
    description: "Beach vibes and Portuguese influence",
    bestTimeToVisit: {
      text: "The best time to visit Goa is from November to February when the weather is pleasant and perfect for beach activities. Monsoon season (June to September) offers lush green landscapes but some activities may be limited.",
      bestMonths: ["Nov", "Dec", "Jan", "Feb", "Oct"],
    },
    food: [
      { name: "Fish Curry Rice", description: "Goan staple dish with coconut-based curry and local fish" },
      { name: "Bebinca", description: "Traditional layered Goan dessert made with coconut milk" },
      { name: "Vindaloo", description: "Spicy curry dish with Portuguese influence" },
    ],
    mustVisit: [
      { name: "Calangute Beach", description: "Popular beach with water sports and vibrant atmosphere" },
      { name: "Basilica of Bom Jesus", description: "UNESCO World Heritage site and important religious monument" },
      { name: "Anjuna Flea Market", description: "Famous market selling handicrafts, clothes, and souvenirs" },
    ],
    thingsToDo: [
      { name: "Water Sports", description: "Try parasailing, jet skiing, or banana boat rides" },
      { name: "Cruise on Mandovi River", description: "Evening cruises with cultural performances" },
      { name: "Beach Hopping", description: "Explore the many beautiful beaches along the coastline" },
    ],
    scenicPoints: [
      { name: "Dudhsagar Falls", description: "One of India's tallest waterfalls, accessible by trek or jeep" },
      { name: "Fort Aguada", description: "17th-century Portuguese fort with lighthouse and sea views" },
      { name: "Chapora Fort", description: "Ancient fort with panoramic views of the coastline" },
    ],
    experience:
      "Goa was a perfect escape with its laid-back vibe and beautiful beaches. I spent mornings exploring Portuguese architecture in Old Goa, afternoons relaxing on beaches, and evenings enjoying the vibrant nightlife. The fusion of Indian and Portuguese cultures is evident in the food, architecture, and local traditions. The seafood was incredibly fresh, and the sunset views from the beaches were absolutely magical.",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Goa+Beach",
      "/placeholder.svg?height=400&width=600&text=Goa+Church",
      "/placeholder.svg?height=400&width=600&text=Goa+Sunset",
      "/placeholder.svg?height=400&width=600&text=Goa+Food",
    ],
  },
  rishikesh: {
    name: "Rishikesh",
    description: "Spiritual journey by the Ganges",
    bestTimeToVisit: {
      text: "The best time to visit Rishikesh is from September to November and February to April when the weather is pleasant. Summer (May to June) can be hot, and monsoon season (July to August) brings heavy rainfall and possible flooding.",
      bestMonths: ["Feb", "Mar", "Apr", "Sep", "Oct", "Nov"],
    },
    food: [
      { name: "Chole Bhature", description: "Spicy chickpea curry served with fried bread" },
      { name: "Aloo Puri", description: "Potato curry served with deep-fried bread" },
      { name: "Fresh Fruit Bowls", description: "Healthy option available at many cafes along the river" },
    ],
    mustVisit: [
      { name: "Laxman Jhula", description: "Famous suspension bridge across the Ganges" },
      { name: "Triveni Ghat", description: "Sacred bathing spot and site of evening Ganga Aarti ceremony" },
      { name: "Beatles Ashram", description: "Abandoned ashram where the Beatles stayed in the 1960s" },
    ],
    thingsToDo: [
      { name: "White Water Rafting", description: "Navigate rapids on the Ganges River" },
      { name: "Yoga and Meditation", description: "Join classes at one of the many ashrams" },
      { name: "Bungee Jumping", description: "Experience India's highest bungee jump" },
    ],
    scenicPoints: [
      { name: "Neelkanth Mahadev Temple", description: "Ancient temple with mountain backdrop" },
      { name: "Kunjapuri Temple", description: "Sunrise viewpoint with Himalayan panorama" },
      { name: "Neer Garh Waterfall", description: "Refreshing waterfall with natural pools" },
    ],
    experience:
      "Rishikesh offered me a perfect balance of spirituality and adventure. Mornings began with yoga by the Ganges, followed by exploring the town's temples and ashrams. The evening Ganga Aarti at Triveni Ghat was a mesmerizing spiritual experience. I also embraced the adventurous side of Rishikesh with white water rafting and a trek to Neelkanth Mahadev Temple. The peaceful energy of this place, combined with the sound of the flowing Ganges, created a truly rejuvenating experience.",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Rishikesh+River",
      "/placeholder.svg?height=400&width=600&text=Rishikesh+Bridge",
      "/placeholder.svg?height=400&width=600&text=Rishikesh+Temple",
      "/placeholder.svg?height=400&width=600&text=Rishikesh+Yoga",
    ],
  },
  bangalore: {
    name: "Bangalore",
    description: "Tech hub of India",
    bestTimeToVisit: {
      text: "The best time to visit Bangalore is from October to February when the weather is pleasant. The city enjoys a moderate climate throughout the year, but summer (March to May) can be warm.",
      bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    },
    food: [
      { name: "Dosa", description: "Crispy rice crepe served with chutney and sambar" },
      { name: "Bisi Bele Bath", description: "Spicy rice dish with lentils and vegetables" },
      { name: "Filter Coffee", description: "Strong South Indian coffee served in a traditional steel tumbler" },
    ],
    mustVisit: [
      { name: "Cubbon Park", description: "Lush green space in the heart of the city" },
      { name: "Lalbagh Botanical Garden", description: "Historic garden with diverse plant species" },
      { name: "Bangalore Palace", description: "Tudor-style palace with beautiful architecture" },
    ],
    thingsToDo: [
      { name: "Explore Microbreweries", description: "Bangalore is known for its craft beer scene" },
      { name: "Visit Art Galleries", description: "Check out the contemporary art scene" },
      { name: "Shop at Commercial Street", description: "Popular shopping destination for clothes and accessories" },
    ],
    scenicPoints: [
      { name: "Nandi Hills", description: "Hill station with sunrise views, just outside the city" },
      { name: "Ulsoor Lake", description: "Serene lake in the middle of the city" },
      { name: "Bannerghatta National Park", description: "Wildlife sanctuary with safari options" },
    ],
    experience:
      "Living in Bangalore has been an incredible experience. The city perfectly balances its tech-forward identity with traditional South Indian culture. I love the pleasant weather, diverse food scene, and the abundance of parks that give it the nickname 'Garden City.' The tech ecosystem is vibrant, with countless meetups and events happening every week. What I appreciate most is how the city embraces both innovation and tradition, with ancient temples standing alongside modern skyscrapers.",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Bangalore+Park",
      "/placeholder.svg?height=400&width=600&text=Bangalore+Palace",
      "/placeholder.svg?height=400&width=600&text=Bangalore+Tech+Park",
      "/placeholder.svg?height=400&width=600&text=Bangalore+Food",
    ],
  },
  mumbai: {
    name: "Mumbai",
    description: "City of dreams",
    bestTimeToVisit: {
      text: "The best time to visit Mumbai is from October to March when the weather is pleasant and less humid. Monsoon season (June to September) brings heavy rainfall, while summer (April to May) can be hot and humid.",
      bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    },
    food: [
      { name: "Vada Pav", description: "Mumbai's iconic street food - potato fritter in a bun" },
      { name: "Pav Bhaji", description: "Spicy vegetable curry served with buttered bread" },
      { name: "Bombay Sandwich", description: "Multi-layered vegetable sandwich with chutney" },
    ],
    mustVisit: [
      { name: "Gateway of India", description: "Historic monument overlooking the Arabian Sea" },
      { name: "Marine Drive", description: "Scenic promenade along the coastline" },
      { name: "Elephanta Caves", description: "Ancient cave temples on Elephanta Island" },
    ],
    thingsToDo: [
      { name: "Bollywood Tour", description: "Visit film studios and learn about Indian cinema" },
      { name: "Street Food Tour", description: "Sample the city's diverse street food offerings" },
      { name: "Ferry to Alibaug", description: "Take a day trip to nearby beaches" },
    ],
    scenicPoints: [
      { name: "Bandra-Worli Sea Link", description: "Iconic bridge with panoramic sea views" },
      { name: "Sanjay Gandhi National Park", description: "Urban forest with ancient Kanheri Caves" },
      { name: "Juhu Beach", description: "Popular beach with sunset views" },
    ],
    experience:
      "Living in Mumbai was an exhilarating experience. The city's energy is unmatched - it truly never sleeps. I loved the contrast between the colonial architecture in South Mumbai and the modern skyline of the suburbs. The local trains, though crowded, are the city's lifeline and an experience in themselves. What I miss most is the incredible food scene - from street food in Chowpatty to upscale restaurants in Bandra. Mumbai taught me resilience and adaptability, as the city continues to thrive despite all challenges.",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Mumbai+Gateway",
      "/placeholder.svg?height=400&width=600&text=Mumbai+Marine+Drive",
      "/placeholder.svg?height=400&width=600&text=Mumbai+Street+Food",
      "/placeholder.svg?height=400&width=600&text=Mumbai+Skyline",
    ],
  },
  delhi: {
    name: "Delhi",
    description: "The capital experience",
    bestTimeToVisit: {
      text: "The best time to visit Delhi is from October to March when the weather is pleasant. Summer (April to June) can be extremely hot, while monsoon (July to September) brings humidity and occasional flooding.",
      bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    },
    food: [
      { name: "Chole Bhature", description: "Spicy chickpea curry with fried bread" },
      { name: "Paratha at Paranthe Wali Gali", description: "Stuffed flatbreads from the famous lane in Old Delhi" },
      { name: "Butter Chicken", description: "Delhi's famous creamy chicken curry" },
    ],
    mustVisit: [
      { name: "Red Fort", description: "UNESCO World Heritage site and historic Mughal monument" },
      { name: "Humayun's Tomb", description: "Beautiful tomb that inspired the Taj Mahal" },
      { name: "Qutub Minar", description: "Tallest brick minaret in the world" },
    ],
    thingsToDo: [
      { name: "Shop at Chandni Chowk", description: "Explore the bustling markets of Old Delhi" },
      { name: "Visit India Gate", description: "War memorial and popular evening spot" },
      { name: "Explore Hauz Khas Village", description: "Trendy area with boutiques, art galleries, and restaurants" },
    ],
    scenicPoints: [
      { name: "Lodhi Gardens", description: "Historic park with tombs and monuments" },
      { name: "Akshardham Temple", description: "Elaborate Hindu temple complex" },
      { name: "Agrasen ki Baoli", description: "Ancient stepwell with architectural significance" },
    ],
    experience:
      "Living in Delhi was a journey through India's rich history and diverse culture. The city is a fascinating blend of old and new - from the narrow lanes of Old Delhi to the wide boulevards of New Delhi. I loved exploring the numerous historical monuments that tell the story of various dynasties that ruled India. The food scene is incredible, with each area offering its own specialties. Delhi taught me to appreciate India's cultural heritage while embracing its modern aspirations.",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Delhi+Red+Fort",
      "/placeholder.svg?height=400&width=600&text=Delhi+India+Gate",
      "/placeholder.svg?height=400&width=600&text=Delhi+Street+Food",
      "/placeholder.svg?height=400&width=600&text=Delhi+Qutub+Minar",
    ],
  },
  jaipur: {
    name: "Jaipur",
    description: "The pink city of royalty",
    bestTimeToVisit: {
      text: "The best time to visit Jaipur is from October to March when the weather is pleasant and perfect for sightseeing. Summer (April to June) can be extremely hot, while monsoon (July to September) brings occasional heavy rainfall.",
      bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    },
    food: [
      {
        name: "Dal Baati Churma",
        description: "Traditional Rajasthani dish with lentils, baked wheat balls, and sweet churma",
      },
      { name: "Pyaaz Kachori", description: "Deep-fried pastry filled with spiced onions" },
      { name: "Laal Maas", description: "Spicy red meat curry, a Rajasthani specialty" },
    ],
    mustVisit: [
      { name: "Amber Fort", description: "Magnificent fort overlooking Maota Lake" },
      { name: "Hawa Mahal", description: "Palace of Winds with its unique honeycomb facade" },
      { name: "City Palace", description: "Royal residence with museums and courtyards" },
    ],
    thingsToDo: [
      { name: "Elephant Ride at Amber Fort", description: "Traditional way to ascend to the fort" },
      { name: "Shop for Textiles and Jewelry", description: "Jaipur is famous for its crafts and gemstones" },
      { name: "Hot Air Balloon Ride", description: "See the Pink City from above" },
    ],
    scenicPoints: [
      { name: "Jal Mahal", description: "Palace in the middle of Man Sagar Lake" },
      { name: "Nahargarh Fort", description: "Hilltop fort with panoramic city views" },
      { name: "Jantar Mantar", description: "UNESCO World Heritage astronomical observation site" },
    ],
    experience:
      "Jaipur captivated me with its royal heritage and vibrant culture. The pink-hued buildings create a magical atmosphere, especially during sunrise and sunset. I was amazed by the architectural marvels like Amber Fort and Hawa Mahal, which showcase the ingenuity of ancient builders. The local markets were a treasure trove of handicrafts, textiles, and jewelry. What made my experience special was the warmth of the locals and their pride in sharing their rich cultural traditions.",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Jaipur+Amber+Fort",
      "/placeholder.svg?height=400&width=600&text=Jaipur+Hawa+Mahal",
      "/placeholder.svg?height=400&width=600&text=Jaipur+City+Palace",
      "/placeholder.svg?height=400&width=600&text=Jaipur+Market",
    ],
  },
}

export default function PlacePage({ params }: { params: { place: string } }) {
  const place = params.place.toLowerCase()
  const placeData = placesData[place]

  if (!placeData) {
    return <div>Place not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" asChild className="mb-6 hover:bg-theme-100 dark:hover:bg-theme-900/20">
        <Link href="/more-me">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Places
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-2">
          <span className="bg-theme-200 dark:bg-theme-900/50 px-2">{placeData.name}</span>
        </h1>
        <p className="text-xl text-muted-foreground">{placeData.description}</p>
      </div>

      <div className="space-y-12">
        {/* Best Things to Eat */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="text-theme-500 h-6 w-6" />
            <h2 className="text-3xl font-bold">
              Best Things to <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Eat</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {placeData.food.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Must-Visit Spots */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-theme-500 h-6 w-6" />
            <h2 className="text-3xl font-bold">
              Must-Visit <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Spots</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {placeData.mustVisit.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Things to Do */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Compass className="text-theme-500 h-6 w-6" />
            <h2 className="text-3xl font-bold">
              Things to <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Do</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {placeData.thingsToDo.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scenic Points */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Mountain className="text-theme-500 h-6 w-6" />
            <h2 className="text-3xl font-bold">
              Scenic <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Points</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {placeData.scenicPoints.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Experience */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-theme-500 h-6 w-6" />
            <h2 className="text-3xl font-bold">
              My <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Experience</span>
            </h2>
          </div>
          <div className="border rounded-lg p-6 bg-card">
            <p className="text-lg leading-relaxed">{placeData.experience}</p>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-theme-500 h-6 w-6" />
            <h2 className="text-3xl font-bold">
              Best Time to <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Visit</span>
            </h2>
          </div>
          <div className="border rounded-lg p-6 bg-card">
            <p className="text-lg mb-6">{placeData.bestTimeToVisit.text}</p>

            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                <div
                  key={month}
                  className={`text-center py-3 rounded-lg ${
                    placeData.bestTimeToVisit.bestMonths.includes(month)
                      ? "bg-theme-100 dark:bg-theme-900/30"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <ImageIcon className="text-theme-500 h-6 w-6" />
            <h2 className="text-3xl font-bold">
              Image <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Gallery</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placeData.gallery.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${placeData.name} ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
