"use client"

import { useState, useEffect, useRef, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Info,
  MapPin,
  Mail,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  Award,
  Code,
  Home,
  GraduationCap,
  PanelsTopLeft,
  Route,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Section = "home" | "projects" | "experience" | "education" | "skills"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedExp, setSelectedExp] = useState(null)

  const openModal = (exp: SetStateAction<null>) => {
    setSelectedExp(exp)
    setModalOpen(true)
  }

  const sectionRefs = useRef<{ [key in Section]: HTMLDivElement | null }>({
    home: null,
    projects: null,
    experience: null,
    education: null,
    skills: null,
  })

  const animatedTitles = [
    "Full Stack Developer",
    "Software Craftsman",
    "Team Player",
    "Backend Specialist",
    "Product-Oriented Thinker",
    "Problem Solver",
    "User-Centric Designer",
    "Agile Practitioner",
    "Continuous Learner",
    "System Design Enthusiast",
    "Test-Driven Developer",
    "Mentor & Collaborator",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % animatedTitles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [animatedTitles.length])

  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    if (section !== activeSection) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  const navigationItems = [
    { id: "home" as Section, label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "projects" as Section, label: "Projects", icon: <PanelsTopLeft className="h-5 w-5" /> },
    { id: "experience" as Section, label: "Experience", icon: <Route className="h-5 w-5" /> },
    { id: "education" as Section, label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { id: "skills" as Section, label: "Skills", icon: <Code className="h-5 w-5" /> },
  ]

  const projects = [
    {
      title: "Millennium Treasury - Payment Reconciliation AI Agent",
      description:
        "An AI-powered Glean Agent that processes 100+ daily treasury emails, extracts payment data from email bodies and attachments, cross-checks it with treasury portal records, and shares a Slack report highlighting verified payments and discrepancies.",
      tech: ["Glean Agent Framework", "Microsoft Graph Outlook API"],
      impact:
        "Streamlines daily reconciliation, saving 2-3 hours of manual effort and improving accuracy for treasury teams.",
      image: "/assets/glean.svg",
    },
    {
      title: "Explainable AI with H2O",
      description:
        "A practical exploration of explainability in bike rental prediction models using H2O's AutoML suite. Visualizes SHAP, feature importance, and model diagnostics.",
      tech: ["Python", "H2O", "Kaggle"],
      impact: "Demonstrated transparent AI modeling techniques for real-world forecasting use cases.",
      image: "/assets/bike.svg",
      link: "https://www.kaggle.com/code/syedasifmn/explainable-ai-using-h2o",
    },
    {
      title: "Voter CRM",
      description:
        "An advanced, data-driven dashboard visualizing Telangana's 2023 voter base. It provides granular demographic insights - by gender, age and district. Thus empowering political campaigns and researchers. Developed and funded by IIIT-Hyderabad for election analytics.",
      tech: ["Python", "Flask", "Streamlit", "Docker"],
      impact: "Delivered actionable insights from 20M+ voter records, enabling data-informed political strategies.",
      image: "/assets/vote.svg",
      link: "https://github.com/syed-asif-mn/Voter-CRM",
    },
    {
      title: "OMNI Microservices Orchestrator",
      description:
        "A local orchestration platform with an intuitive dashboard for discovering, provisioning, and running Nasdaq OMNI microservices in Dockerized containers directly on developers' machines - ensuring consistent, production-parity environments.",
      tech: ["Vue 3", "PowerShell", "Docker"],
      impact:
        "Reduced environment setup time from 30 minutes to couple of minutes while eliminating configuration inconsistencies across teams.",
      image: "/assets/dashboard.svg",
    },
    {
      title: "Best",
      description:
        "A minimalistic web app featuring a handpicked collection of timeless song lyrics. Built for lovers of clean design and classic writing.",
      tech: ["React", "Tailwind CSS", "Glitch"],
      impact: "Offers a curated, personal archive of evergreen lyrics with a sleek UI.",
      image: "/assets/best.svg",
      link: "https://best-lyrics.stackblitz.io/",
    },
    {
      title: "unFold",
      description:
        "An open-source full-stack code generator that scaffolds complete projects based on user-defined inputs. Choose frameworks, name your app, and get instant boilerplate code.",
      tech: ["Angular", ".NET", "AWS"],
      impact:
        "Ranked Top 5 at Airbus Aerothon 2022. Supports auto-generation for 4 server-side and 3 client-side frameworks.",
      image: "/assets/unfold.svg",
      link: "https://unfold.stackblitz.io/",
    },
    {
      title: "Agile Project Management Tool",
      description:
        "A visual reporting solution for Agile teams with Epic, Feature, and Defect tracking. Built to streamline sprint planning and project oversight.",
      tech: ["Power BI", "Azure Analytic Views", "Python", "Pandas", "Matplotlib"],
      impact: "Deployed across 15+ teams within Siemens Healthineers (Advanced Therapies Division).",
      image: "/assets/chart.svg",
    },
  ]

  const experiences = [
    {
      company: "Millenium Management",
      role: "Software Engineering Consultant",
      period: "September 2024 - Present",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Millennium_logo.svg",
      projects: [
        {
          name: "Regulatory Reporting",
          description: [
            "Building regulatory reporting microservices using .NET, Angular, Kafka and PostgreSQL, with AWS cloud deployment and TeamCity CI/CD integration."
          ],
        },
      ],
    },
    {
      company: "Nasdaq",
      role: "Senior Analyst - Software Engineering",
      period: "Dec 2024 - July 2025",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/NASDAQ_Logo.svg",
      projects: [
        {
          name: "Nasdaq eVestment OMNI",
          description: [
            "Developed and maintained eVestment Omni and 5+ .NET microservices with SQL Server, Vue.js, and AWS.",
            "Containerized services with Docker, reducing setup time by ~90%.",
            "Integrated systems with Salesforce CRM for real-time data synchronization."
          ],
        },
      ],
    },
    {
      company: "Siemens Healthineers",
      role: "Engineer - Design & Development",
      period: "Sept 2020 - Nov 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Siemens_Healthineers_logo.svg",
      projects: [
        {
          name: "OnScreen Menu Configurator",
          description: [
            "Developed a .NET REST microservice with MySQL and Fluent NHibernate, handling 10K+ daily transactions.",
            "Applied LINQ, SOLID principles, and design patterns across 20+ core classes to improve scalability and maintainability.",
            "Automated server/client SSIT using .NET, Selenium, and SpecFlow (BDD), cutting manual testing by ~80% and accelerating release cycles.",
            "Built Azure CI/CD pipelines for automated builds and nightly test runs.",
            "Wrote Server Unit tests with MsTest, Client Unit tests using Jasmine.",
            "Used Scaled AGILE methodologies during development."
          ],
        },
        {
          name: "Position List Editor",
          description: [
            "Subsystem Product Owner - Managed product backlog and refined scope in collaboration with UX/QT teams.",
            "Implemented state management using NgRx with Angular.",
            "Automated SSIT, increasing coverage to 95% and improving regression stability.",
            "Proposed 3 product innovations adopted into production.",
            "Mentored team through workshops and knowledge-sharing sessions."
          ],
        },
        {
          name: "OnScreen Display",
          description: [
            "Led the migration of legacy UI to a modular design, elevating brand consistency and user experience.",
            "Resolved 25+ defects, significantly improving release confidence and stability.",
          ],
        },
      ],
    },
    {
      company: "Siemens Healthineers",
      role: "Intern",
      period: "Jan 2020 - May 2020",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Siemens_Healthineers_logo.svg",
      projects: [
        {
          name: "OnScreen Menu Configurator",
          description: [
            "Automated ~35 On Screen display subsystem workflows using C#, Python and Selenium, reducing manual testing efforts from around 2 days to 4 hours.",
          ],
        },
      ],
    },
  ]

  const education = [
    {
      type: "degree",
      title: "PG Certificate in Software Engineering for Data Science",
      institution: "IIIT Hyderabad",
      period: "2022 - 2023",
      description: "Advanced coursework in Statistics, Python, Machine Learning and Data Science",
    },
    {
      type: "degree",
      title: "Bachelor of Engineering in Electronics & Communication",
      institution: "JSS Science and Technology University, Mysuru",
      period: "2016 - 2020",
      description: "CGPA: 9.14 / 10",
    },
  ]

  const certifications = [
    {
      name: "Generative AI Mastermind",
      issuer: "Outskill",
      date: "2025",
      credentialId: "OUTSKILL",
      url: "/assets/outsill_certificate.pdf",
    },
    {
      name: "GenAI Engineering Mastermind",
      issuer: "Outskill",
      date: "2025",
      credentialId: "OUTSKILL",
      url: "/assets/outsill_engineering_certificate.pdf",
    },
    {
      name: "Backend Development Path",
      issuer: "Scrimba",
      date: "2025",
    },
    {
      name: "AWS DevOps Engineer Pro 2024: Mastering CI/CD Pipelines",
      issuer: "SkillSoft",
      date: "2025",
      credentialId: "11104808",
      url: "https://skillsoft.digitalbadges-eu.skillsoft.com/84d6c503-0635-410b-9ad8-5313ee3d4658",
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2020",
      credentialId: "GDZA77AZUVRV",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/GDZA77AZUVRV",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Udacity",
      date: "2020",
      credentialId: "DSA-UD",
    },
    {
      name: "Secure Coding",
      issuer: "CodeBashing",
      date: "2025",
      credentialId: "SC-CB",
    },
    {
      name: "AI on Cloud",
      issuer: "Great Learning",
      date: "2023",
      credentialId: "JTWYHSGM",
      url: "https://www.mygreatlearning.com/certificate/JTWYHSGM",
    },
    {
      name: "Scrum Product Owner",
      issuer: "Skillsoft",
      date: "2024",
      credentialId: "10920581",
      url: "https://skillsoft.digitalbadges-eu.skillsoft.com/cacefea2-37c4-4574-8625-7356a4a4c7de",
    },
    {
      name: "Front-End Web Development",
      issuer: "Udemy",
      date: "2021",
      credentialId: "FE-UD",
    },
  ]

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "C#", level: "Professional" },
        { name: "TypeScript", level: "Professional" },
        { name: "JavaScript", level: "Professional" },
        { name: "Python", level: "Intermediate" },
      ],
    },
    {
      category: "AI & Automation",
      items: [
        { name: "Glean Agent builder", level: "Professional" },
        { name: "Claude Code", level: "Professional" },
        { name: "Copilot Studio", level: "Professional" },
      ],
    },
    {
      category: "Architecture",
      items: [
        { name: "Event-Driven Architecture", level: "Professional" },
        { name: "Microservices", level: "Professional" },
        { name: "REST API Design", level: "Professional" },
      ],
    },
    {
      category: "Backend Technologies",
      items: [
        { name: ".NET Core", level: "Professional" },
        { name: ".NET Framework", level: "Professional" },
        { name: "Kafka", level: "Professional" },
        { name: "LINQ", level: "Professional" },
        { name: "Entity Framework", level: "Intermediate" },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "Angular (v8 - v20)", level: "Professional" },
        { name: "Vue.js", level: "Intermediate" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", level: "Professional" },
        { name: "SQL Server", level: "Professional" },
        { name: "MongoDB", level: "Intermediate" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", level: "Intermediate" },
        { name: "Azure DevOps", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
      ],
    },
    {
      category: "Observability",
      items: [
        { name: "Datadog", level: "Intermediate" },
        { name: "Kibana", level: "Intermediate" },
      ],
    },
    {
      category: "Testing & Quality Assurance",
      items: [
        { name: "Test-Driven Development", level: "Professional" },
        { name: "BDD (SpecFlow)", level: "Professional" },
        { name: "Selenium", level: "Professional" },
        { name: "MSTest", level: "Professional" },
        { name: "Jasmine", level: "Professional" },
      ],
    },
    {
      category: "Version Control",
      items: [
        { name: "Git (Github, Gitlab)", level: "Professional" },
        { name: "TFS", level: "Professional" },
      ],
    },
    {
      category: "Methodologies",
      items: [
        { name: "Scaled Agile Framework", level: "Professional" },
        { name: "Domain-Driven Design", level: "Professional" },
      ],
    },
  ];

  const highlights = [
    {
      title: "DAQ - Act as an Owner",
      organization: "Nasdaq",
      type: "Award",
      icon: "🔷",
      year: "2025",
    },
    {
      title: "Star of the Sprints",
      organization: "Siemens Healthineers",
      type: "Award",
      icon: "⭐",
      year: "2024",
    },
    {
      title: "Leadership Launchpad",
      organization: "Siemens Healthineers",
      type: "Mentorship Programme",
      icon: "❇️",
      year: "2024",
    },
    {
      title: "Contributer - AI Hack-celerator",
      organization: "Millenium",
      type: "Competition",
      icon: "🤖",
      year: "2026",
    },
    {
      title: "Top 10 - HackWave",
      organization: "Nasdaq",
      type: "Competition",
      icon: "🌐",
      year: "2025",
    },
    {
      title: "AVM Analyzer POC selected for evaluation at SHIFT Hackathon",
      organization: "Siemens Healthineers",
      type: "Competition",
      icon: "🧠",
      year: "2024",
    },
    {
      title: "Hackathon Winner",
      organization: "IIITH PGCSEDS",
      type: "Competition",
      icon: "🏅",
      year: "2022",
    },
    {
      title: "Finalist - HackerEarth Aerothon",
      organization: "HackerEarth",
      type: "Competition",
      icon: "✈️",
      year: "2022",
    },
    {
      title: "Volunteer - Project Rise",
      organization: "Save The Child NGO",
      type: "Volunteer",
      icon: "🧍",
      year: "2021-23",
    },
    {
      title: "Volunteer - Veteran Hiring Program",
      organization: "Siemens Healthineers",
      type: "Volunteer",
      icon: "🪖",
      year: "2022-24",
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional":
        return isDarkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-800"
      case "Intermediate":
        return isDarkMode ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-800"
      case "Beginner":
        return isDarkMode ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-800"
      default:
        return isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-800"
    }
  }

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div
            ref={(el: HTMLDivElement | null) => (sectionRefs.current.home = el)}
            className="flex items-center justify-center min-h-screen px-responsive pt-responsive md:pt-0 pb-18 md:pb-10"
          >
            <div className="text-center max-w-4xl mx-responsive">
              <h1
                className={`text-hero font-light mb-responsive ${isDarkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Asif Syed
              </h1>

              <div className="relative h-12 mb-responsive flex items-center justify-center">
                <p
                  key={currentTitleIndex}
                  className={`font-light animate-fade-in-out text-title ${isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  {animatedTitles[currentTitleIndex]}
                </p>
              </div>

              <h3
                className={`text-subtitle font-light mb-responsive ${isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Building accessible, human-centered products at the intersection of
                technology, data, and design.
              </h3>

              <p
                className={`mb-responsive font-light text-body ${isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                With 5+ years of hands-on experience in cloud-native and enterprise-grade
                solutions, powered by .NET, Angular, Azure, SQL Server and AWS.
              </p>

              <div
                className={`flex flex-wrap items-center justify-center gap-responsive mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                <Link
                  href="https://linkedin.com/in/syed-asif-mn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-base">syed-asif-mn</span>
                </Link>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-base">syedasifm.n@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-base">Bangalore, India</span>
                </div>
              </div>

              <div
                className={`inline-flex backdrop-blur-sm border rounded-xl p-1 mb-8 shadow-md ${isDarkMode ? "border-gray-700" : "bg-white/95 border-gray-200"
                  } shadow-black/5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)]`}
                style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
              >
                <button
                  onClick={() => setActiveSection("projects")}
                  className={`px-3 py-1.5 rounded-lg text-small font-medium transition-all duration-300 cursor-pointer ${activeSection === "projects"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-zinc-800"
                      : "text-gray-600 hover:text-white hover:bg-zinc-800"
                    }`}
                >
                  View Projects
                </button>

                <button
                  onClick={() => window.open("/assets/cv.pdf", "_blank")}
                  className={`px-3 py-1.5 rounded-lg text-small font-medium transition-all duration-300 ${isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-zinc-800"
                    : "text-gray-600 hover:text-white hover:bg-zinc-800"
                    }`}
                >
                  View CV
                </button>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div ref={(el: HTMLDivElement | null) => (sectionRefs.current.projects = el)} className="min-h-screen px-responsive py-responsive">
            <h2
              className={`block md:hidden text-title font-medium mb-responsive text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              Portfolio Showcase
            </h2>
            <div className="max-w-6xl mx-auto w-full">
              <div className="grid md:grid-cols-2 gap-responsive">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl flex items-center transition-all duration-700 hover:-translate-y-2 rounded-2xl overflow-hidden card-hover ${isDarkMode ? "border-0" : "bg-white border-gray-100 hover:border-gray-200"
                      }`}
                    style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={300}
                            height={150}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-700 mx-auto my-4 max-w-md h-auto"
                            priority
                          />
                        </div>

                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                          <div>
                            <h3 className={`text-xl font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {project.title}
                            </h3>
                            <p
                              className={`mb-3 text-small leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {project.tech.slice(0, 3).map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className={`rounded-lg px-2 py-0.5 text-xs ${isDarkMode
                                    ? "border-gray-600 text-gray-300 hover:bg-zinc-800 hover:text-white"
                                    : "border-gray-200 text-gray-600 hover:bg-zinc-800 hover:text-white"
                                    }`}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between  mt-responsive ">
                            <span
                              className={`text-xs font-medium px-3 py-1 rounded-lg ${isDarkMode ? "bg-zinc-800 text-gray-200" : "bg-gray-100 text-gray-800"
                                }`}
                            >
                              {project.impact}
                            </span>
                            {project.link && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`rounded-lg cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-white ml-2"
                                  }`}
                                onClick={() => window.open(project.link, "_blank", "noopener noreferrer")}
                              >
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="https://github.com/syed-asif-mn?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-zinc-800"
                    : "text-gray-600 hover:text-white hover:bg-zinc-800"
                    }`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm">{"View More on GitHub\n"}</span>
                </Link>
              </div>
            </div>
          </div>
        )

      case "experience":
        return (
          <div ref={(el: HTMLDivElement | null) => (sectionRefs.current.experience = el)} className="min-h-screen px-responsive py-responsive">
            <div className="max-w-5xl mx-auto w-full">
              <h2 className={`text-2xl font-medium mb-responsive text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Professional Journey
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className={`rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 card-hover ${isDarkMode ? "border-0" : "bg-white border-gray-100 hover:border-gray-200"
                      }`}
                    style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
                  >
                    <CardContent className="p-0 text-center">
                      <div className="mb-4">
                        <Image
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          width={50}
                          height={50}
                          className="mx-auto"
                        />
                      </div>
                      <h3 className={`font-medium text-body mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {exp.company}
                      </h3>
                      <p className={`font-medium mb-2 text-small ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                        {exp.role}
                      </p>
                      {exp.role && (
                        <div className="relative flex items-center mt-2">
                          <p
                            className={`absolute left-1/2 transform -translate-x-1/2 text-xs px-3 py-1 rounded-lg ${isDarkMode ? "text-gray-300 bg-zinc-800" : "text-gray-500 bg-gray-50"
                              }`}
                          >
                            {exp.period}
                          </p>

                          <div className="ml-auto">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`rounded-lg ml-2 cursor-pointer ${isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-zinc-800"
                                : "text-gray-500 hover:text-white hover:bg-zinc-800"
                                }`}
                              onClick={() => openModal(exp)}
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {isModalOpen && selectedExp && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                  onClick={() => setModalOpen(false)}
                >
                  <div
                    className={`relative rounded-2xl shadow-xl max-w-md w-full transition-colors duration-300
${isDarkMode ? "bg-zinc-800" : "bg-white"} overflow-hidden`}
                    style={{ maxHeight: "80vh", maxWidth: "80vw" }}
                    onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
                  >
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={() => setModalOpen(false)}
                        className={`p-1 rounded-full 
${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-700"}`}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* 📋 Scrollable content */}
                    <div
                      className={`p-6 overflow-y-auto pr-4 ${isDarkMode ? "bg-zinc-800" : "bg-white"}`}
                      style={{ maxHeight: "calc(80vh - 48px)" }}
                    >
                      <h2 className="sr-only">Experience Details</h2>
                      <h2
                        className={`text-lg font-semibold mb-responsive mt-2 
${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        {selectedExp.company}
                      </h2>
                      <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
                        Role: <strong className={isDarkMode ? "text-white" : ""}>{selectedExp.role}</strong>
                      </p>

                      {selectedExp.projects.map((project: { name: any; description: any[] }, idx: any) => (
                        <div key={idx} className="mb-4">
                          {project.name && (
                            <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
                              Project: <strong className={isDarkMode ? "text-white" : ""}>{project.name}</strong>
                            </p>
                          )}
                          <ul className={`list-disc ml-4 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
                            {project.description.map((item: any, index: any) => (
                              <li key={index} className="mb-1">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Highlights Section */}
              <div>
                <h2 className={`text-2xl font-medium mb-responsive text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Highlights & Awards
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {highlights.map((highlight, index) => (
                    <Card
                      key={index}
                      className={`rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 card-hover ${isDarkMode ? "border-0" : "bg-white border-gray-100 hover:border-gray-200"
                        }`}
                      style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{highlight.icon}</span>
                          <div className="flex-1">
                            <h4 className={`font-medium text-small mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {highlight.title}
                            </h4>
                            <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                              {highlight.organization}
                            </p>
                            {highlight.year && (
                              <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {highlight.year}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "education":
        return (
          <div ref={(el: HTMLDivElement | null) => (sectionRefs.current.education = el)} className="min-h-screen px-responsive py-responsive">
            <div className="max-w-6xl mx-auto w-full">
              <div className="mb-12">
                <h2 className={`text-2xl font-medium mb-responsive text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Academic Background
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 rounded-2xl hover:-translate-y-1 card-hover ${isDarkMode ? "border-0" : "bg-white border-gray-100 hover:border-gray-200"
                        }`}
                      style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h4 className={`text-2xl font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {edu.title}
                            </h4>
                            <p className={`mb-1 text-subtitle ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                              {edu.institution}
                            </p>
                            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {edu.description}
                            </p>
                          </div>
                          <div className=" mt-responsive  md:mt-0">
                            <span
                              className={`px-4 py-2 rounded-xl font-medium ${isDarkMode ? "bg-zinc-800 text-gray-200" : "bg-gray-100 text-gray-800"
                                }`}
                            >
                              {edu.period}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div>
                <h3 className={`text-2xl font-medium mb-responsive text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Certifications & Specializations
                </h3>
                <div className="grid md:grid-cols-2 gap-responsive">
                  {certifications.map((cert, index) => (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 rounded-2xl hover:-translate-y-1 card-hover ${isDarkMode ? "border-0" : "bg-white border-gray-100 hover:border-gray-200"
                        }`}
                      style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${isDarkMode ? "bg-zinc-800" : "bg-gray-100"}`}>
                            <Award className={`h-6 w-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {cert.name}
                            </h4>
                            <p className={`text-sm mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                              {cert.issuer}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {cert.date}
                              </span>
                              {cert.url && (
                                <Badge
                                  onClick={() => window.open(cert.url, "_blank")}
                                  variant="outline"
                                  className={`text-xs cursor-pointer ${isDarkMode ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-600"
                                    }`}
                                >
                                  {cert.credentialId}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "skills":
        return (
          <div ref={(el: HTMLDivElement | null) => (sectionRefs.current.skills = el)} className="min-h-screen px-responsive py-responsive">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className={`text-2xl font-medium mb-responsive text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Skills & Expertise
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-responsive">
                {skills.map((skillGroup, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 rounded-2xl hover:-translate-y-1 card-hover ${isDarkMode ? "border-0" : "bg-white border-gray-100 hover:border-gray-200"
                      }`}
                    style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
                  >
                    <CardContent className="p-6">
                      <h3 className={`text-lg font-medium mb-responsive ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {skillGroup.category}
                      </h3>
                      <div className="space-y-3">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex justify-between items-center">
                            <span className={`text-small font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                              {skill.name}
                            </span>
                            <Badge
                              variant="outline"
                              className={`text-xs px-2 py-1 rounded-md border-0 ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div role="main"
      className={`transition-colors duration-300 ${isDarkMode ? "" : "bg-white"}`}
      style={isDarkMode ? { backgroundColor: "#1F2022" } : {}}
    >
      {/* Desktop Navigation Pills - Hidden on mobile */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block border-transparent">
        <div
          className={`backdrop-blur-sm border rounded-xl p-1 shadow-sm border-transparent ${isDarkMode ? "border-gray-700" : "bg-white/95 border-gray-200"
            }`}
          style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
        >
          <div className="flex gap-1 items-center">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`px-3 py-1.5 text-xs font-medium transition-all duration-300 rounded-lg cursor-pointer ${activeSection === item.id
                  ? "bg-zinc-800 text-white shadow-sm"
                  : isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-zinc-700"
                    : "text-gray-600 hover:bg-zinc-200"
                  }`}
              >
                <span>{item.label}</span>
              </button>
            ))}

            <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-600">
              <Button
                variant="ghost"
                size="icon"
                className={`w-7 h-7 rounded-lg transition-all duration-300 cursor-pointer ${isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-zinc-800"
                  : "text-gray-500 hover:text-white hover:bg-zinc-800"
                  }`}
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div
          className={`backdrop-blur-sm border-t shadow-lg ${isDarkMode ? "border-gray-700" : "bg-white/95 border-gray-200"
            }`}
          style={isDarkMode ? { backgroundColor: "#41434B" } : {}}
        >
          <div className="flex items-center justify-around px-2 py-2 gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`flex flex-col items-center justify-center p-2 flex-1 rounded-lg transition-all duration-300 cursor-pointer ${activeSection === item.id
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "hover:bg-zinc-700 hover:text-white " + (isDarkMode ? "text-gray-400" : "text-gray-500")
                  }`}
              >
                {item.icon}
              </button>
            ))}

            <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-600 flex-shrink-0">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`flex flex-col items-center justify-center p-2 flex-1 rounded-lg transition-all duration-300 cursor-pointer ${isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-zinc-800"
                  : "text-gray-500 hover:text-white hover:bg-zinc-800"
                  }`}
              >
                {isDarkMode ? <Sun className="h-4 w-4 mb-1" /> : <Moon className="h-4 w-4 mb-1" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with bottom padding for mobile navigation */}
      <main
        className={`transition-all duration-500 ease-in-out pt-0 sm:pt-8 md:pt-16 ${activeSection === "home" ? "pb-0" : "pb-8"}`}
      >
        {renderSection()}
      </main>
    </div>
  )
}
