export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-2">
        Work <span className="highlight">Experience</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-12">
        My <span>professional</span> journey - “Where I’ve Been, What I’ve Built”
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <h2 className="text-2xl font-bold">
            Work <span className="highlight">History</span>
          </h2>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold">👨‍💻 Software Engineer – ML Intern</h3>
              <span className="text-muted-foreground">May 2024 – Jul 2024</span>
            </div>
            <p className="font-medium">National Informatics Centre (NIC), India</p>
            <p className="text-muted-foreground">
              Trained a face recognition system that doesn’t just stare blankly—it identifies humans with 
              <span className="highlight">85.3% accuracy</span> across 200+ subjects, even when they blink, sneeze, or wear questionable sunglasses 😎.
            </p>

            <p className="text-muted-foreground">
              Used Haar-Cascade, LBP, HOG & ORB (not a Marvel squad) for robust feature extraction, and delivered results via a Flask UI with low latency—basically faster than your morning brain.
            </p>
          </div>

          {/* <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <span className="text-muted-foreground">2018 - 2021</span>
            </div>
            <p className="font-medium">DesignStudio</p>
            <p className="text-muted-foreground">
              Designed user interfaces for various clients across fintech, healthcare, and e-commerce sectors. Conducted
              <span className="highlight"> user research</span> and usability testing to inform design decisions.
              Created interactive prototypes and design specifications for development teams.
            </p>
          </div> */}

  
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold">Freelance Designer</h3>
              <span className="text-muted-foreground">2022 - present</span>
            </div>
            <p className="font-medium">Self-employed</p>
            <p className="text-muted-foreground">
              Wore many hats—designer, developer, and video sorcerer. Whipped up slick UIs, responsive websites, 
              and edits so smooth they could moonwalk 🕺. From Figma to Final Cut, I turned client chaos into s
              croll-stopping, click-worthy magic.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-2xl font-bold">
            <span className="highlight">Education</span>
          </h2>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
            <p className="font-medium">National Universoty of Singapore (NUS), 2022-2024</p>
            <p className="text-muted-foreground">Minored in Economics and Quantitative Finance</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">High School Diploma</h3>
            <p className="font-medium">Sanskriti School, 2016-2021</p>
            <p className="text-muted-foreground">Grade: 95.4% (CBSE)</p>
          </div>

          <h2 className="text-2xl font-bold mt-12"><span className="highlight">Certifications</span></h2>

          <div className="space-y-6">
            {/* <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">U</h3>
              <p className="text-muted-foreground">
                Google, <span className="highlight">2020</span>
              </p>
            </div> */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">
                <a 
                  href="https://credentials.nus.edu.sg/323cced0-3b26-4278-9f02-2b7381138968#acc.hAuf3jWK" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-semibold hover:underline"
                >
                  Investly (Orbital)
                </a>
              </h3>
              <p className="text-muted-foreground">
                National Universoty of Singapore (NUS), 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
