import { FormEvent, ReactNode, useEffect, useRef, useState } from "react"

type IconName = "arrow" | "close" | "code" | "design" | "external" | "layers" | "mail" | "menu" | "phone" | "spark"

type Project = {
  id: string
  index: string
  title: string
  type: string
  image: string
  gallery?: string[]
  media?: "video"
  layout: "browser" | "device" | "landscape"
  theme: "coral" | "aqua" | "butter" | "red" | "violet" | "coffee" | "sage"
  description: string
  goals: string[]
  features: string[]
  role: string
  tools: string[]
  visualDirection?: string
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    design: (
      <>
        <path d="M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3Z" />
        <path d="m4.7 7.5 7.3 4 7.3-4" />
        <path d="M12 21v-9.5" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    ),
    spark: (
      <>
        <path d="m12 3-1.2 4.2a5 5 0 0 1-3.6 3.6L3 12l4.2 1.2a5 5 0 0 1 3.6 3.6L12 21l1.2-4.2a5 5 0 0 1 3.6-3.6L21 12l-4.2-1.2a5 5 0 0 1-3.6-3.6L12 3Z" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  )
}

const projects: Project[] = [
  {
    id: "roofing",
    index: "01",
    title: "Abilene Roofing",
    type: "Roofing website",
    image: "/projects/roofing-website.png",
    layout: "browser",
    theme: "coral",
    description:
      "A roofing service website that helps homeowners explore solutions, understand available services, and request professional assistance through a trustworthy, easy-to-navigate experience.",
    goals: [
      "Build trust with a clean, professional layout",
      "Present repair, replacement, and inspection services clearly",
      "Make quote requests easy and accessible",
      "Create a responsive desktop and mobile experience",
    ],
    features: [
      "Service-led homepage",
      "Roofing services and service areas",
      "Customer trust elements",
      "Quote request and contact sections",
      "Responsive page layouts",
    ],
    role: "UI/UX Designer and Website Designer",
    tools: [
      "Figma",
      "Wireframing",
      "Information Architecture",
      "Responsive UI Design",
    ],
  },
  {
    id: "dental",
    index: "02",
    title: "Bright Smile Dental & Aesthetics",
    type: "Healthcare website",
    image: "/projects/dental-website.png",
    layout: "browser",
    theme: "aqua",
    description:
      "A welcoming website concept for a dental and aesthetic clinic where visitors can explore treatments, learn about the clinic, and confidently move toward booking an appointment.",
    goals: [
      "Create a clean, calming, professional identity",
      "Make treatment information easy to find",
      "Help patients feel comfortable and informed",
      "Simplify the appointment enquiry journey",
    ],
    features: [
      "Welcoming homepage and clinic introduction",
      "Dental and aesthetic treatment categories",
      "Treatment details and clinic information",
      "FAQs and contact details",
      "Appointment booking calls to action",
    ],
    role: "UI/UX Designer and Website Designer",
    tools: ["Figma", "User Flows", "Wireframing", "Responsive UI Design"],
  },
  {
    id: "commerce",
    index: "03",
    title: "Shopping App",
    type: "E-commerce mobile application",
    image: "/projects/mobile-commerce-duo.png",
    gallery: [
      "/projects/mobile-commerce-duo.png",
      "/projects/mobile-commerce-welcome.png",
      "/projects/mobile-commerce-wishlist.png",
    ],
    layout: "device",
    theme: "butter",
    description:
      "A mobile e-commerce concept focused on making online shopping simple, organised, and enjoyable from product discovery through cart and checkout.",
    goals: [
      "Simplify product discovery and navigation",
      "Present product information clearly",
      "Reduce friction throughout the shopping journey",
      "Maintain a consistent mobile interface",
    ],
    features: [
      "Product browsing, search, and categories",
      "Filtering and product detail pages",
      "Wishlist and shopping cart",
      "Quantity selection and order summary",
      "Streamlined checkout screens",
    ],
    role: "UI/UX Designer and Mobile App Designer",
    tools: ["Figma", "User Journey Mapping", "Wireframing", "Prototyping"],
  },
  {
    id: "food",
    index: "04",
    title: "Food Ordering App",
    type: "Food delivery application",
    image: "/projects/food-mobile.png",
    layout: "device",
    theme: "red",
    description:
      "A mobile food-ordering concept that helps users discover restaurants, explore menus, customise orders, and complete a clear, convenient ordering flow.",
    goals: [
      "Make restaurant and food discovery effortless",
      "Keep menus readable and easy to explore",
      "Simplify customisation and checkout",
      "Provide clear order information and status updates",
    ],
    features: [
      "Restaurant discovery and search",
      "Food categories and menu browsing",
      "Item details and customisation",
      "Cart, order summary, address, and payment",
      "Order confirmation and tracking concept",
    ],
    role: "UI/UX Designer and Mobile App Designer",
    tools: ["Figma", "User Flows", "Wireframing", "Interactive Prototyping"],
  },
  {
    id: "academy",
    index: "05",
    title: "Crash Course Landing Page",
    type: "Online education",
    image: "/projects/design-academy.png",
    layout: "landscape",
    theme: "violet",
    description:
      "A landing page concept for an online course, designed to communicate its value quickly, present learning details, and guide visitors toward enrolment.",
    goals: [
      "Communicate course benefits clearly",
      "Establish a strong visual hierarchy",
      "Make course information easy to scan",
      "Guide visitors toward enrolment",
    ],
    features: [
      "Hero section with a clear CTA",
      "Course introduction and learning objectives",
      "Curriculum and module breakdown",
      "Instructor information and benefits",
      "FAQs and enrolment section",
    ],
    role: "UI/UX Designer and Landing Page Designer",
    tools: ["Figma", "Content Hierarchy", "Wireframing", "Responsive Design"],
  },
  {
    id: "coffee",
    index: "06",
    title: "Coffee Carousel Animation",
    type: "Interactive UI concept",
    image: "/projects/coffee-concept.jpg",
    layout: "landscape",
    theme: "coffee",
    description:
      "An interactive design experiment exploring how a circular carousel and purposeful motion can make a coffee-selection interface more engaging.",
    goals: [
      "Explore smooth, visually appealing transitions",
      "Distinguish active and inactive items clearly",
      "Use motion to support navigation",
      "Keep the interaction intuitive and responsive",
    ],
    features: [
      "Circular coffee arrangement",
      "Active and inactive product states",
      "Rotational drink transitions",
      "Dynamic featured coffee presentation",
      "Interactive animation prototype",
    ],
    role: "UI Designer and Motion Design Explorer",
    tools: ["Figma", "Smart Animate", "Interactive Components", "Prototyping"],
  },
  {
    id: "website",
    index: "07",
    title: "Pinkart.co",
    type: "Handmade art & crafts e-commerce website",
    image: "/projects/website-experience.png",
    layout: "browser",
    theme: "aqua",
    description:
      "A playful pink-and-white e-commerce concept for a creative small business selling handmade and personalised products, crochet art, craft cards, gifts, and accessories.",
    goals: [
      "Create a cohesive kawaii-inspired identity",
      "Showcase handmade products attractively",
      "Make product categories easy to explore",
      "Support a smooth browse-to-checkout journey",
    ],
    features: [
      "Branded homepage and hero",
      "Product categories and featured collections",
      "Product cards and detail pages",
      "Cart and checkout experience",
      "Custom order and support sections",
    ],
    role: "UI/UX Designer and E-commerce Website Designer",
    tools: [
      "Figma",
      "Visual Design",
      "Information Architecture",
      "Responsive UI Design",
    ],
  },
  {
    id: "motion",
    index: "08",
    title: "Interaction Animation",
    type: "UI motion & microinteractions",
    image: "/projects/project-motion.mp4",
    media: "video",
    layout: "landscape",
    theme: "violet",
    description:
      "A UI motion exploration focused on feedback, state changes, and subtle transitions that make digital interfaces feel natural and responsive.",
    goals: [
      "Make interactions feel natural and intuitive",
      "Provide clear visual feedback",
      "Explore timing, easing, and transition behaviour",
      "Improve the interface through purposeful motion",
    ],
    features: [
      "Button hover and press states",
      "Animated cards and interactive elements",
      "Expandable and revealing content",
      "Smooth interface-state transitions",
      "Feedback microinteractions and prototypes",
    ],
    role: "UI/UX Designer and Motion Design Explorer",
    tools: ["Figma", "Interactive Components", "Smart Animate", "Prototyping"],
  },
  {
    id: "piercing",
    index: "09",
    title: "My First Piercing",
    type: "Piercing studio website",
    image: "/projects/piercing-hero.png",
    gallery: [
      "/projects/piercing-hero.png",
      "/projects/piercing-placement.mp4",
      "/projects/piercing-experience.png",
      "/projects/piercing-statement.png",
    ],
    layout: "browser",
    theme: "sage",
    description:
      "A modern piercing studio website combining a distinctive brand identity with clear services, placement information, aftercare guidance, and booking pathways.",
    goals: [
      "Create a distinctive contemporary identity",
      "Make services and information easy to navigate",
      "Present aftercare guidance accessibly",
      "Build a cohesive desktop and mobile experience",
    ],
    features: [
      "Branded homepage and studio introduction",
      "Piercing services and placement information",
      "Aftercare guidance and FAQs",
      "Booking and contact calls to action",
      "Reusable UI elements and responsive layouts",
    ],
    role: "UI/UX Designer and Website Designer",
    tools: [
      "Figma",
      "Brand-Led UI Design",
      "Information Architecture",
      "Responsive Design",
    ],
    visualDirection:
      "Deep Petrol #102F35, Glacier Mint #C8F2E8, Ocean Slate #263F45, and Pearl Stone #F0EDE4 create a refined, modern, and recognisable visual character.",
  },
]

function ProjectMockup({
  project,
  caseStudy = false,
}: {
  project: Project
  caseStudy?: boolean
}) {
  const media =
    project.media === "video" ? (
      <video
        src={project.image}
        controls={caseStudy}
        muted={!caseStudy}
        loop={!caseStudy}
        autoPlay={!caseStudy}
        playsInline
        aria-label={project.title}
      />
    ) : (
      <img
        src={project.image}
        alt={caseStudy ? `${project.title} project presentation` : ""}
        loading={caseStudy ? "eager" : "lazy"}
      />
    )

  const browserMedia =
    project.id === "piercing" && project.gallery ? (
      <div className="mockup-page-sequence">
        {project.gallery.map((item, index) => (
          <div
            className={`mockup-page-section${
              index > 0 ? " is-continuation" : ""
            }`}
            key={item}
          >
            {item.endsWith(".mp4") ? (
              <video
                src={item}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                aria-label="Piercing placement interaction"
              />
            ) : (
              <img
                src={item}
                alt={
                  index === 0
                    ? "My First Piercing homepage"
                    : `My First Piercing website section ${index + 1}`
                }
                loading={index === 0 && caseStudy ? "eager" : "lazy"}
              />
            )}
          </div>
        ))}
      </div>
    ) : (
      media
    )

  return (
    <div className={`mockup-shell mockup-${project.layout}`}>
      {project.layout === "browser" && (
        <div className="mini-browser-bar">
          <span />
          <span />
          <span />
          <i />
        </div>
      )}
      {project.layout === "browser" ? (
        <div
          className="mockup-scroll"
          tabIndex={0}
          aria-label={`Scrollable preview of ${project.title}`}
        >
          {browserMedia}
        </div>
      ) : (
        media
      )}
      {project.layout === "landscape" && (
        <span className="monitor-stand" aria-hidden="true" />
      )}
    </div>
  )
}

const services = [
  {
    number: "01",
    label: "Design only",
    icon: "design" as IconName,
    title: "UI/UX & product design",
    text: "Thoughtful interfaces grounded in clarity, visual hierarchy, and real user journeys.",
    items: [
      "Wireframes & prototypes",
      "Responsive website design",
      "E-commerce UI",
      "Design systems",
    ],
  },
  {
    number: "02",
    label: "Development only",
    icon: "code" as IconName,
    title: "Website development",
    text: "Clean, responsive builds that translate approved designs into refined digital products.",
    items: [
      "Landing pages",
      "Responsive development",
      "Website redesigns",
      "Front-end implementation",
    ],
  },
  {
    number: "03",
    label: "End to end",
    icon: "layers" as IconName,
    title: "Design + development",
    text: "One cohesive process from the first idea to a tested, launch-ready website.",
    items: [
      "Strategy to launch",
      "Design-to-code fidelity",
      "Unified communication",
      "Scalable foundations",
    ],
  },
]

const process = [
  ["01", "Discover", "Goals, audience, context"],
  ["02", "Plan", "Scope, structure, direction"],
  ["03", "Design", "Interface and visual system"],
  ["04", "Prototype", "Flows and interactions"],
  ["05", "Develop", "Responsive implementation"],
  ["06", "Test & launch", "Refine, validate, release"],
]

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: ReactNode
  copy?: string
}) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [formStatus, setFormStatus] = useState("")
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace("#case-study-", "")
      if (window.location.hash.startsWith("#case-study-")) {
        setActiveProject(projects.find((project) => project.id === id) ?? null)
      } else {
        setActiveProject(null)
      }
    }
    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  useEffect(() => {
    if (activeProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal()
    }
    if (!activeProject && dialogRef.current?.open) {
      dialogRef.current.close()
    }
  }, [activeProject])

  const openProject = (project: Project) => {
    window.location.hash = `case-study-${project.id}`
  }

  const closeProject = () => {
    if (window.location.hash.startsWith("#case-study-")) {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search,
      )
    }
    setActiveProject(null)
  }

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const subject = encodeURIComponent(
      `Portfolio enquiry — ${data.get("projectType")}`,
    )
    const body = encodeURIComponent(
      `Hi Aiman,\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nProject type: ${data.get("projectType")}\nBudget: ${data.get("budget") || "Not specified"}\n\nProject details:\n${data.get("details")}`,
    )
    setFormStatus("Opening your email app with the project details…")
    window.location.href = `mailto:Aimenjehanzeb@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Aiman Jehanzaib, home">
          <span className="brand-mark">AJ</span>
          <span className="brand-name">
            Aiman <strong>Jehanzaib</strong>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {["Home", "About", "Services", "Projects", "Process", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ),
          )}
        </nav>
        <a className="header-cta" href="#contact">
          Let’s talk <Icon name="arrow" size={17} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> UI/UX designer & web developer
            </p>
            <h1>
              Designing digital
              <br />
              experiences. <em>Building</em>
              <br />
              what comes next.
            </h1>
            <p className="hero-intro">
              I’m Aiman Jehanzaib. I turn ideas into thoughtful interfaces and
              responsive websites—bridging the gap between how a product looks
              and how it works.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <Icon name="arrow" />
              </a>
              <a className="button button-secondary" href="#contact">
                Let’s work together
              </a>
            </div>
            <div className="hero-note">
              <span>Based in Pakistan</span>
              <span>Available for select projects</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Selected interface work">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-label">
              <span /> Selected interface work
            </div>
            <div className="desktop-mockup hero-browser">
              <div className="desktop-screen">
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                  <div />
                </div>
                <div
                  className="desktop-viewport"
                  tabIndex={0}
                  aria-label="Scrollable preview of the Pinkart.co website"
                >
                  <img
                    src="/projects/website-experience.png"
                    alt="Pink Art e-commerce website interface"
                  />
                </div>
              </div>
              <div className="desktop-neck" aria-hidden="true" />
              <div className="desktop-foot" aria-hidden="true" />
            </div>
            <div className="phone-mockup hero-phone">
              <img
                src="/projects/mobile-commerce-welcome.png"
                alt="Mobile commerce welcome screen"
              />
            </div>
            <div className="floating-card">
              <Icon name="spark" />
              <span>From first frame</span>
              <strong>to final build.</strong>
            </div>
          </div>
        </section>

        <div className="capability-strip" aria-label="Capabilities">
          <div>
            {[
              "UI/UX Design",
              "Figma Prototypes",
              "Web Development",
              "Responsive Design",
              "E-commerce",
            ].map((item) => (
              <span key={item}>
                {item} <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section projects-section" id="projects">
          <SectionIntro
            eyebrow="Selected work / 01"
            title={
              <>
                Digital work with <em>purpose.</em>
              </>
            }
            copy="A selection of supplied interface and website projects—presented without invented metrics, clients, or outcomes."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.theme} project-${project.id}`}
                key={project.id}
              >
                <div className={`project-visual ${project.layout}`}>
                  <ProjectMockup project={project} />
                  <button
                    className="view-chip"
                    type="button"
                    onClick={() => openProject(project)}
                    aria-label={`View ${project.title} case study`}
                  >
                    View case study <Icon name="arrow" size={16} />
                  </button>
                </div>
                <div className="project-meta">
                  <span>{project.index}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                  </div>
                  <button
                    className="circle-button"
                    type="button"
                    onClick={() => openProject(project)}
                    aria-label={`Open ${project.title}`}
                  >
                    <Icon name="external" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">About / 02</p>
            <h2>
              I make the complex feel <em>clear, useful,</em> and beautifully
              considered.
            </h2>
            <p>
              My work sits at the intersection of design thinking and front-end
              craft. That means fewer handoff gaps, more intentional decisions,
              and experiences that keep their quality from Figma through to the
              browser.
            </p>
            <div className="about-values">
              <div>
                <strong>01</strong>
                <span>Clarity before decoration</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Responsive by default</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Built with real users in mind</span>
              </div>
            </div>
            <a className="text-link" href="#contact">
              Start a conversation <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="section services-section" id="services">
          <SectionIntro
            eyebrow="Services / 03"
            title={
              <>
                One partner. <em>Every layer.</em>
              </>
            }
            copy="Choose focused design support, development of an existing direction, or a complete path from idea to launch."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <div className="service-icon">
                    <Icon name={service.icon} />
                  </div>
                </div>
                <p className="service-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="advantage-section">
          <div className="advantage-copy">
            <p className="eyebrow">The advantage</p>
            <h2>
              The vision doesn’t get <em>lost in translation.</em>
            </h2>
            <p>
              When design and development live in one process, every interaction
              can be considered from both sides: creative intent and practical
              implementation.
            </p>
            <a className="button button-primary" href="#contact">
              Build something together <Icon name="arrow" />
            </a>
          </div>
          <div
            className="advantage-diagram"
            aria-label="Design to development process"
          >
            <div className="advantage-browser">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <div />
              </div>
              <div
                className="advantage-viewport"
                tabIndex={0}
                aria-label="Scrollable preview of the LUMÉA beauty studio website"
              >
                <img
                  src="/projects/lumea-hero.png"
                  alt="LUMÉA beauty studio website shown in a browser mockup"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="advantage-tablet">
              <img
                src="/projects/lumea-story.png"
                alt="LUMÉA beauty studio story page shown in a tablet mockup"
                loading="lazy"
              />
            </div>
            <div className="advantage-badge">
              <Icon name="spark" />
              <span>Design intent</span>
              <strong>preserved in build</strong>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <SectionIntro
            eyebrow="Process / 04"
            title={
              <>
                A clear path from <em>idea to impact.</em>
              </>
            }
          />
          <div className="process-list">
            {process.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Icon name="arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="section tools-section">
          <div>
            <p className="eyebrow">Confirmed toolkit / 05</p>
            <h2>
              Tools are only useful when they serve the <em>idea.</em>
            </h2>
          </div>
          <div className="tool-list" aria-label="Confirmed skills and tools">
            {[
              "Figma",
              "Adobe XD",
              "HTML",
              "CSS",
              "JavaScript",
              "Responsive design",
            ].map((tool, index) => (
              <div key={tool}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{tool}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Let’s work together / 06</p>
            <h2>
              Have an idea?
              <br />
              Let’s make it <em>real.</em>
            </h2>
            <p>
              Tell me what you’re building, redesigning, or exploring. I’ll be
              glad to hear where you are and what you need next.
            </p>
            <div className="contact-details">
              <a href="mailto:Aimenjehanzeb@gmail.com">
                <span>
                  <Icon name="mail" />
                </span>
                <div>
                  <small>Email</small>
                  <strong>Aimenjehanzeb@gmail.com</strong>
                </div>
              </a>
              <a href="tel:+923366234115">
                <span>
                  <Icon name="phone" />
                </span>
                <div>
                  <small>Phone</small>
                  <strong>0336 6234115</strong>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitContact}>
            <div className="field-row">
              <label>
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
            <div className="field-row">
              <label>
                <span>Project type</span>
                <select name="projectType" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>UI/UX design</option>
                  <option>Website development</option>
                  <option>Design + development</option>
                  <option>E-commerce</option>
                  <option>Website redesign</option>
                </select>
              </label>
              <label>
                <span>
                  Budget <small>(optional)</small>
                </span>
                <input name="budget" type="text" placeholder="Your range" />
              </label>
            </div>
            <label>
              <span>Project details</span>
              <textarea
                name="details"
                placeholder="A little about the project, goals, and timeline…"
                rows={5}
                required
              />
            </label>
            <button
              className="button button-primary submit-button"
              type="submit"
            >
              Send project enquiry <Icon name="arrow" />
            </button>
            <p className="form-note" role="status">
              {formStatus ||
                "Submitting opens your email app. No details are stored on this website."}
            </p>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a className="brand" href="#home">
            <span className="brand-mark">AJ</span>
            <span className="brand-name">
              Aiman <strong>Jehanzaib</strong>
            </span>
          </a>
          <p>
            Designing thoughtful interfaces. Building responsive digital
            experiences.
          </p>
          <a className="back-top" href="#home">
            Back to top <Icon name="arrow" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aiman Jehanzaib</span>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <span>Social links available to configure</span>
        </div>
      </footer>

      <dialog
        className="case-dialog"
        ref={dialogRef}
        onClose={closeProject}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeProject()
        }}
      >
        {activeProject && (
          <div className="case-page">
            <div className="case-nav">
              <a className="brand" href="#home" onClick={closeProject}>
                <span className="brand-mark">AJ</span>
                <span className="brand-name">
                  Aiman <strong>Jehanzaib</strong>
                </span>
              </a>
              <button type="button" onClick={closeProject}>
                Close <Icon name="close" />
              </button>
            </div>
            <header className="case-header">
              <p className="eyebrow">
                Selected project / {activeProject.index}
              </p>
              <h2>{activeProject.title}</h2>
              <div>
                <p>{activeProject.type}</p>
                <p>{activeProject.description}</p>
              </div>
            </header>
            <div
              className={`case-hero project-${activeProject.theme} project-${activeProject.id}`}
            >
              <ProjectMockup project={activeProject} caseStudy />
            </div>
            <div className="case-details">
              <div className="case-credentials">
                <p className="eyebrow">Project details</p>
                <div>
                  <small>My role</small>
                  <h3>{activeProject.role}</h3>
                </div>
                <div>
                  <small>Tools & methods</small>
                  <p>{activeProject.tools.join(" · ")}</p>
                </div>
                {activeProject.visualDirection && (
                  <div>
                    <small>Visual direction</small>
                    <p>{activeProject.visualDirection}</p>
                  </div>
                )}
              </div>
              <div className="case-insights">
                <article>
                  <h4>Design goals</h4>
                  <ul>
                    {activeProject.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <h4>Key features</h4>
                  <ul>
                    {activeProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
            {activeProject.gallery && activeProject.id !== "piercing" && (
              <div className="case-gallery">
                {activeProject.gallery
                  .slice(1)
                  .map((media) =>
                    media.endsWith(".mp4") ? (
                      <video
                        src={media}
                        key={media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        disablePictureInPicture
                        aria-label={`${activeProject.title} interaction preview`}
                      />
                    ) : (
                      <img src={media} alt="" key={media} loading="lazy" />
                    ),
                  )}
              </div>
            )}
            <div className="case-footer">
              <p>Have a project with similar ambition?</p>
              <a
                className="button button-primary"
                href="#contact"
                onClick={closeProject}
              >
                Let’s work together <Icon name="arrow" />
              </a>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}

export default App
