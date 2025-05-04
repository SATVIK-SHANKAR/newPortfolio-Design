"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">
        Get in <span className="bg-theme-200 dark:bg-theme-900/50 px-2">Contact</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Have a project in mind or just want to say hello? I'd love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-4 pt-4">
            <div className="bg-theme-100 dark:bg-theme-900/20 p-4 rounded-lg">
              <p className="font-medium">💬</p>
              <p className="text-muted-foreground">
                When reaching out, feel free to include your Instagram, LinkedIn, or GitHub—I’d love to check out your work and connect better!
              </p>
            </div>
          </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full bg-theme-500 hover:bg-theme-600">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="text-muted-foreground">
              Feel free to reach out through any of the following channels. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-1 text-theme-500" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">satvik.shankar2003@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 mt-1 text-theme-500" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+65 96502726, +91 9390308981</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-theme-500" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold">Availability</h2>
            <div className="bg-theme-100 dark:bg-theme-900/20 p-4 rounded-lg">
              <p className="font-medium">Currently available for freelance work</p>
              <p className="text-muted-foreground">
                I'm currently accepting new projects and would love to hear about yours. Let's create something amazing
                together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}













// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin } from "lucide-react"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Here you would typically send the data to your backend
//     alert("Thanks for your message! I'll get back to you soon.")
//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     })
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-5xl font-bold mb-6">
//         Get in <span className="bg-orange-200 dark:bg-orange-900/50 px-2">Contact</span>
//       </h1>
//       <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
//         Have a project in mind or just want to say hello? I'd love to hear from you.
//       </p>

//       <div className="grid md:grid-cols-2 gap-12">
//         <div>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <label htmlFor="name" className="block font-medium">
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Your name"
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email" className="block font-medium">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="your.email@example.com"
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="subject" className="block font-medium">
//                 Subject
//               </label>
//               <Input
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 placeholder="What's this about?"
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="message" className="block font-medium">
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 placeholder="Your message here..."
//                 rows={5}
//               />
//             </div>

//             <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
//               Send Message
//             </Button>
//           </form>
//         </div>

//         <div className="space-y-8">
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">Contact Information</h2>
//             <p className="text-muted-foreground">
//               Feel free to reach out through any of the following channels. I'm always open to discussing new projects,
//               creative ideas, or opportunities to be part of your vision.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-start gap-4">
//               <Mail className="w-5 h-5 mt-1 text-orange-500" />
//               <div>
//                 <h3 className="font-medium">Email</h3>
//                 <p className="text-muted-foreground">satvik.shankar2003@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <Phone className="w-5 h-5 mt-1 text-orange-500" />
//               <div>
//                 <h3 className="font-medium">Phone</h3>
//                 <p className="text-muted-foreground">+65 96502726, +91 9390308981</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <MapPin className="w-5 h-5 mt-1 text-orange-500" />
//               <div>
//                 <h3 className="font-medium">Location</h3>
//                 <p className="text-muted-foreground">New Delhi, India</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4 pt-4">
//             <h2 className="text-2xl font-semibold">Availability</h2>
//             <div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded-lg">
//               <p className="font-medium">Currently available for freelance work</p>
//               <p className="text-muted-foreground">
//                 I'm currently accepting new projects and would love to hear about yours. Let's create something amazing
//                 together!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



