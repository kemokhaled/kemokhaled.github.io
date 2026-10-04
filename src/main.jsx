import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const profile = {
  name: 'Karem Khaled',
  role: 'Frontend Developer · React Developer',
  email: 'kemokhaled_210@gmail.com',
  github: 'https://github.com/kemokhaled',
  linkedin: 'https://www.linkedin.com/in/karem-khaled',
}

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    text: 'Responsive, polished interfaces built with HTML, CSS, JavaScript and React.',
    tags: ['React', 'JavaScript', 'Responsive UI'],
  },
  {
    number: '02',
    title: 'React Applications',
    text: 'Reusable components and interactive experiences with a clean, maintainable structure.',
    tags: ['Components', 'State', 'API Integration'],
  },
  {
    number: '03',
    title: 'Website Customization',
    text: 'Adapt existing products for different businesses with flexible layouts, branding and configurable sections.',
    tags: ['Branding', 'Templates', 'Multi-tenant'],
  },
  {
    number: '04',
    title: 'Backend Integration',
    text: 'Connect frontend experiences to Node.js services, REST APIs and MongoDB-backed applications.',
    tags: ['Node.js', 'REST APIs', 'MongoDB'],
  },
]

const projects = [
  {
    id: '01',
    title: 'Grocery Delivery Web Application',
    type: 'Full-Stack Web Application',
    description: 'A grocery delivery experience built around product management, ordering flows and a React frontend connected to a Node.js + MongoDB backend.',
    tech: ['React', 'Node.js', 'MongoDB', 'Mongoose'],
    featured: true,
    accent: 'mint',
    visual: 'shop',
  },
  {
    id: '02',
    title: 'Multi-Tenant Business Dashboard',
    type: 'React / Next.js Frontend',
    description: 'Flexible interfaces for a hierarchical multi-tenant system, where each office can control branding, layouts and visible sections while sharing the same backend.',
    tech: ['React', 'Next.js', 'REST API', 'Reusable UI'],
    accent: 'purple',
    visual: 'dashboard',
  },
  {
    id: '03',
    title: 'Travel & Destination Interface',
    type: 'Responsive Frontend Project',
    description: 'A visual travel interface with destination cards, map content, embedded media and animated sections designed for responsive screens.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    accent: 'blue',
    visual: 'travel',
    image: './flat-design.png',
  },
  {
    id: '04',
    title: 'Contact Us Page',
    type: 'Responsive Business Interface',
    description: 'A clean business contact experience covering phone, email, message submission and file upload in a focused layout.',
    tech: ['HTML', 'CSS', 'Forms', 'Responsive Design'],
    accent: 'orange',
    visual: 'contact',
  },
  {
    id: '05',
    title: 'Engineering & Embedded Systems',
    type: 'AVR / Embedded C',
    description: 'Hands-on engineering work using microcontrollers, sensors, LCDs, 7-segment displays, interrupts and relay-based control in Proteus.',
    tech: ['ATmega32', 'Embedded C', 'ADC', 'UART'],
    accent: 'red',
    visual: 'embedded',
  },
]

const skillGroups = [
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Responsive Design'] },
  { label: 'Backend', items: ['Node.js', 'MongoDB', 'Mongoose', 'REST APIs'] },
  { label: 'Programming', items: ['C++', 'C', 'Java', 'OOP', 'Data Structures & Algorithms', 'Competitive Programming'] },
  { label: 'Embedded', items: ['AVR Microcontrollers', 'UART', 'ADC', 'GPIO', 'Interrupts', 'Embedded C', 'Proteus'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'npm', 'Docker', 'Linux fundamentals'] },
]

const algorithmTopics = ['Arrays', 'Strings', 'Maps & Sets', 'Binary Search', 'Prefix / Suffix Sums', 'Number Theory', 'Prime Factorization', 'Combinatorics', 'Dynamic Programming', 'Sorting']

const Icon = ({ name, size = 20 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }
  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="m10 14 9-9"/><path d="M19 14v5H5V5h5"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6a4.6 4.6 0 0 0-1-3.2A4.2 4.2 0 0 0 18.9 2S17.4 1.5 15 3a12.2 12.2 0 0 0-6 0C6.6 1.5 5.1 2 5.1 2A4.2 4.2 0 0 0 5 5.3 4.6 4.6 0 0 0 4 8.5c0 4.5 3 6 6 6a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.5 2-4.5-2-6-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-8h4"/><path d="M4 9h4v11H4z"/><path d="M6 4.5a2 2 0 1 0 0 .01"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M20.7 15.3A8.5 8.5 0 0 1 8.7 3.3 8.5 8.5 0 1 0 20.7 15.3Z"/>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const closeMenu = () => setMenuOpen(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Karem Khaled home">
            <span className="brand-mark">K</span>
            <span className="brand-name">KAREM<span>.</span></span>
          </a>

          <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name="menu" />
          </button>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>Let's talk <Icon name="arrow" size={17} /></a>
          </nav>

          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <Icon name={dark ? 'sun' : 'moon'} size={18} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"></span> Available for freelance & collaboration</div>
              <h1>Building <span className="accent-text">useful</span> digital experiences that feel effortless.</h1>
              <p className="hero-lead">I help small businesses turn website visitors into customers through fast, modern and user-friendly websites — with React at the center.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">See my work <Icon name="arrow" size={18} /></a>
                <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Start a project <Icon name="mail" size={18} /></a>
              </div>
              <div className="hero-meta">
                <span><strong>~2 years</strong> practical web experience</span>
                <span><strong>React-first</strong> frontend workflow</span>
                <span><strong>Full-stack</strong> perspective</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-frame">
                <img src="./profile.png" alt="Karem Khaled standing outdoors" />
                <div className="profile-overlay"></div>
                <div className="floating-card role-card">
                  <div className="mini-label">CURRENT ROLE</div>
                  <strong>Frontend Developer</strong>
                  <span>React · JavaScript · Responsive UI</span>
                </div>
                <div className="floating-card code-card">
                  <span className="code-line"><i>&lt;</i> build<span>/</span> <b>&gt;</b></span>
                  <small>clean · reusable · scalable</small>
                </div>
              </div>
              <div className="hero-glow glow-one"></div>
              <div className="hero-glow glow-two"></div>
            </div>
          </div>
        </section>

        <section className="signal-strip">
          <div className="container signal-inner">
            <span>React</span><i>✦</i><span>Next.js</span><i>✦</i><span>Node.js</span><i>✦</i><span>MongoDB</span><i>✦</i><span>C++</span><i>✦</i><span>Embedded C</span>
          </div>
        </section>

        <section id="about" className="section-pad section-light">
          <div className="container two-col">
            <div>
              <div className="section-kicker">01 / ABOUT</div>
              <h2>Frontend focus. <span className="muted-text">Engineering mindset.</span></h2>
              <p className="body-lg">I'm a Computer Engineering student and Frontend Developer with around two years of practical experience building websites and web applications.</p>
              <p>I turn designs and ideas into responsive interfaces that are clean, intuitive and built for real users. My frontend work is supported by backend knowledge in Node.js, REST APIs, MongoDB and Mongoose.</p>
              <p>My engineering background also gives me a strong problem-solving foundation through C++, data structures, algorithms, competitive programming and embedded systems.</p>
              <div className="inline-links">
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Icon name="external" size={16} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="external" size={16} /></a>
              </div>
            </div>
            <div className="about-card-grid">
              <div className="info-card highlight">
                <span className="info-number">2+</span>
                <span className="info-label">years building for the web</span>
              </div>
              <div className="info-card">
                <span className="info-number">05</span>
                <span className="info-label">projects showcased</span>
              </div>
              <div className="info-card">
                <span className="info-number">02</span>
                <span className="info-label">sides of the stack</span>
              </div>
              <div className="info-card">
                <span className="info-number">01</span>
                <span className="info-label">goal: production-ready work</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-pad">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <div className="section-kicker">02 / WHAT I DO</div>
                <h2>From interface to <span className="accent-text">integration.</span></h2>
              </div>
              <p>Flexible frontend work for business websites, dashboards and custom web applications.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="tag-row">{service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <span className="card-arrow"><Icon name="arrow" size={18} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad section-dark">
          <div className="container">
            <div className="section-heading-row light-heading">
              <div>
                <div className="section-kicker">03 / SELECTED WORK</div>
                <h2>Projects that show <span className="accent-text">range.</span></h2>
              </div>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <Icon name="external" size={16} /></a>
            </div>

            <div className="projects-list">
              {projects.map((project, index) => (
                <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.id}>
                  <div className={`project-visual ${project.accent}`}>
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} preview`} />
                    ) : (
                      <div className={`project-mock ${project.visual}`}>
                        <div className="mock-top"><span></span><span></span><span></span></div>
                        <div className="mock-content">
                          {project.visual === 'shop' && <><div className="mock-title">FreshCart</div><div className="mock-product-row"><b>Grocery</b><b>Delivery</b><b>Orders</b></div><div className="mock-bars"><span></span><span></span><span></span></div></>}
                          {project.visual === 'dashboard' && <><div className="mock-title">Office / Dashboard</div><div className="mock-dashboard"><span></span><span></span><span></span><span></span></div></>}
                          {project.visual === 'contact' && <><div className="mock-title">Contact us</div><div className="mock-form"><span></span><span></span><span className="long"></span></div></>}
                          {project.visual === 'embedded' && <><div className="mock-title">ATmega32 · CONTROL</div><div className="chip"><b>ADC</b><b>UART</b><b>GPIO</b></div><div className="signal-wave"></div></>}
                        </div>
                      </div>
                    )}
                    <span className="project-index">{project.id}</span>
                  </div>
                  <div className="project-copy">
                    <div className="project-type">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row project-tags">{project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                    <div className="project-footer">
                      <span>{index === 0 ? 'Full-stack build' : index === 1 ? 'Flexible frontend system' : 'Interface project'}</span>
                      <a href={profile.github} target="_blank" rel="noreferrer" aria-label={`Open GitHub profile for ${project.title}`}><Icon name="github" size={18} /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad section-light">
          <div className="container two-col skills-layout">
            <div>
              <div className="section-kicker">04 / TOOLKIT</div>
              <h2>A practical stack built to <span className="accent-text">ship.</span></h2>
              <p className="body-lg">I prefer technologies that make interfaces easier to maintain, easier to integrate and easier for users to understand.</p>
              <div className="algorithm-card">
                <div className="algorithm-head"><span><Icon name="code" size={18} /> Problem solving</span><small>C++ / algorithms</small></div>
                <p>Competitive programming is part of how I train my thinking: break the problem down, find the right data structure, then optimize.</p>
                <div className="topic-cloud">{algorithmTopics.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="skills-stack">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="skill-items">{group.items.map((item) => <span key={item}><Icon name="check" size={15} />{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad process-section">
          <div className="container">
            <div className="section-kicker">05 / HOW I WORK</div>
            <div className="process-grid">
              <div className="process-intro"><h2>A workflow designed for <span className="accent-text">clarity.</span></h2><p>I keep projects structured from the first requirement to the final responsive polish.</p></div>
              <div className="steps">
                {[
                  ['01', 'Understand', 'Clarify the business, users, requirements and the result that matters.'],
                  ['02', 'Plan', 'Break the work into focused components and define the structure before coding.'],
                  ['03', 'Build', 'Develop reusable UI with clean structure, responsive behavior and practical integration.'],
                  ['04', 'Test', 'Check responsiveness, usability, functionality and edge cases across screen sizes.'],
                  ['05', 'Improve', 'Refine the experience through feedback, cleanup and performance-minded iteration.'],
                ].map(([num, title, text]) => <div className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="container education-card">
            <div>
              <div className="section-kicker">06 / EDUCATION</div>
              <h2>Computer Engineering</h2>
              <p>Currently studying Computer Engineering, with practical work spanning programming, algorithms, web development, object-oriented programming, embedded systems, electronics and communication systems.</p>
            </div>
            <div className="focus-box">
              <span>Current focus</span>
              <strong>React · Next.js · TypeScript · Node.js</strong>
              <small>REST APIs · Databases · Authentication · Docker · Deployment · Software architecture</small>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="container contact-card">
            <div className="contact-topline"><span>LET'S BUILD SOMETHING USEFUL</span><span className="status-dot">●</span></div>
            <div className="contact-grid">
              <div>
                <h2>Have a website or web app in mind?</h2>
                <p>Tell me what you want to build, improve or customize. I can help turn it into a modern, functional web experience.</p>
                <div className="contact-actions">
                  <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me <Icon name="mail" size={18} /></a>
                  <button className="btn btn-ghost" onClick={copyEmail}>{copied ? 'Email copied' : 'Copy email'} <Icon name="check" size={18} /></button>
                </div>
              </div>
              <div className="contact-details">
                <a href={`mailto:${profile.email}`}><span className="contact-icon"><Icon name="mail" /></span><span><small>EMAIL</small><strong>{profile.email}</strong></span></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Icon name="github" /></span><span><small>GITHUB</small><strong>github.com/kemokhaled</strong></span></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Icon name="linkedin" /></span><span><small>LINKEDIN</small><strong>linkedin.com/in/karem-khaled</strong></span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div><strong>Karem Khaled</strong><span>Frontend Developer · React Developer · Aspiring Full-Stack Engineer</span></div>
          <span>© {new Date().getFullYear()} Karem Khaled</span>
          <a href="#top" className="back-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
