"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, BriefcaseBusiness, Code2, ExternalLink, GraduationCap, Leaf, Mail, MapPin, Menu, Monitor, Sprout, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navItems = [["About", "about"], ["Education", "education"], ["Skills", "skills"], ["Projects", "projects"], ["Contact", "contact"]] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const socials = Object.entries(portfolio.social).filter(([, url]) => url.trim());
  return <>
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Junerussell Patris home"><span className="brand-mark">JP</span><span>Junerussell <b>Patris</b></span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} className={active === id ? "nav-link active" : "nav-link"} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href={`mailto:${portfolio.email}`}>Let&apos;s talk <ArrowUpRightIcon /></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot"/> AVAILABLE FOR LEARNING &amp; OPPORTUNITIES</p>
            <h1>Building with<br/><span>purpose.</span></h1>
            <p className="hero-name">I&apos;m {portfolio.name}.</p>
            <p className="hero-title">{portfolio.title}</p>
            <p className="hero-intro">A curious developer in the making, interested in practical software and thoughtful technology.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View my projects <ArrowDownRight size={17}/></a><a className="button button-ghost" href={`mailto:${portfolio.email}`}>Contact me <ArrowRight size={16}/></a></div>
            <div className="hero-meta"><span><MapPin size={15}/>{portfolio.location}</span><span><GraduationCap size={16}/>{portfolio.school}</span></div>
          </div>
          <div className="hero-visual reveal delay-1" aria-label="Junerussell Patris initials avatar">
            <div className="visual-index">PROFILE / 001</div>
            <div className="portrait-card"><Image className="portrait-photo" src={portfolio.profileImage} alt="Portrait of Junerussell Patris" fill priority sizes="(max-width: 640px) 224px, 270px"/><div className="portrait-top"><span>JP</span><span className="portrait-line"/></div><div className="portrait-bottom"><span>SOFTWARE<br/>IN PROGRESS</span><span className="portrait-sprout"><Sprout/></span></div></div>
            <div className="float-chip chip-code"><Code2 size={16}/><span>Build<br/>thoughtfully</span></div><div className="float-chip chip-leaf"><Leaf size={16}/><span>Tech for<br/>tomorrow</span></div>
            <div className="visual-caption">A student exploring where<br/>software meets everyday needs.</div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-kicker"><span>01</span><span>THE PERSON BEHIND THE CODE</span></div>
        <div className="about-layout"><div><h2>Learning by<br/><em>making.</em></h2><div className="section-marker"/></div><div className="about-content"><p className="lead">{portfolio.introduction}</p><div className="info-grid"><div className="info-item"><span className="info-label">BASED IN</span><span>{portfolio.location}</span></div><div className="info-item"><span className="info-label">CURRENTLY AT</span><span>{portfolio.school}</span></div><div className="info-item"><span className="info-label">CAREER INTEREST</span><span>Software Development</span></div><div className="info-item"><span className="info-label">EXPLORING</span><span>{portfolio.interests.join(", ")}</span></div></div></div></div>
        <div className="objective"><span className="objective-index">AIM / 01</span><div><span className="info-label">CAREER OBJECTIVE</span><p>{portfolio.objective}</p></div><ArrowDownRight className="objective-icon" size={22}/></div>
      </section>

      <section className="education-section section-pad" id="education">
        <div className="section-kicker"><span>02</span><span>FOUNDATIONS &amp; DIRECTION</span></div><div className="section-heading-row"><h2>Where I&apos;m<br/><em>learning.</em></h2><p>Building a strong foundation, one concept<br className="desktop-break"/> and one project at a time.</p></div>
        <div className="education-card"><div className="edu-icon"><GraduationCap/></div><div className="edu-main"><span className="info-label">CURRENT EDUCATION</span><h3>{portfolio.education.school}</h3><p>{portfolio.education.programConfirmed ? portfolio.education.program : "Program details to be confirmed"}</p></div><div className="edu-status"><span className="status-dot"/>{portfolio.education.status}</div><div className="edu-focus"><span className="info-label">AREAS OF INTEREST</span><div className="tag-row">{portfolio.education.focus.map((x) => <span className="tag" key={x}>{x}</span>)}</div></div></div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-kicker"><span>03</span><span>TOOLS &amp; CRAFT</span></div><div className="section-heading-row"><h2>Growing my<br/><em>toolkit.</em></h2><p>Technologies connected to my current<br className="desktop-break"/> academic project experience.</p></div>
        <div className="skills-layout"><div className="skill-card"><div className="skill-card-top"><span className="skill-symbol"><Monitor size={20}/></span><span className="skill-number">01 / DESKTOP</span></div><h3>Electron.js</h3><p>Desktop application development and building desktop interfaces with web technologies.</p><div className="skill-rule"/><span className="skill-context">CONFIRMED PROJECT TECHNOLOGY</span></div><div className="skill-card skill-card-alt"><div className="skill-card-top"><span className="skill-symbol"><Code2 size={20}/></span><span className="skill-number">02 / BACKEND</span></div><h3>Python</h3><p>Backend programming, application logic, and data processing in project work.</p><div className="skill-rule"/><span className="skill-context">CONFIRMED PROJECT TECHNOLOGY</span></div><div className="skills-note"><span className="note-star">✳</span><p>Skills grow through practice.<br/><span>More tools will be added as experience is confirmed.</span></p></div></div>
      </section>

      <section className="project-section section-pad" id="projects">
        <div className="section-kicker light-kicker"><span>04</span><span>SELECTED PROJECT</span></div><div className="project-head"><div><p className="eyebrow project-eyebrow"><span className="status-dot"/> ACADEMIC CAPSTONE</p><h2>Ideas into<br/><em>applications.</em></h2></div><p className="project-intro">A look at the capstone project shaping my current exploration of desktop software and sustainability.</p></div>
        <article className="project-feature"><div className="project-art"><div className="art-topline"><span>PROJECT / 001</span><span>DESKTOP APPLICATION</span></div><div className="eco-logo"><div className="eco-icon"><Leaf/></div><div><strong>EcoTrack</strong><span>CAPSTONE PROJECT</span></div></div><div className="art-landscape"><div className="land-sun"/><div className="land-hill hill-back"/><div className="land-hill hill-front"/><div className="land-stem stem-one"/><div className="land-stem stem-two"/></div><div className="art-foot"><span>SOFTWARE × SUSTAINABILITY</span><span>01 — 01</span></div></div><div className="project-copy"><div className="project-copy-top"><span className="project-type">FEATURED PROJECT</span><span className="project-status"><span className="status-dot"/> ACADEMIC</span></div><h3>EcoTrack</h3><p>{portfolio.project.description}</p><div className="project-tags">{["Electron.js", "Python"].map((x) => <span className="tag" key={x}>{x}</span>)}</div><div className="project-tech-note"><span className="info-label">ARCHITECTURE</span><p>Electron.js provides the desktop interface; Python handles backend functionality. Implementation details can be expanded as the project is documented.</p></div><button className="button project-details-btn" onClick={() => setDetailsOpen(true)}>Explore project <ArrowRight size={17}/></button></div></article>
        <div className="other-projects"><div><span className="info-label">MORE IN THE WORKS</span><p>Additional projects will appear here as they&apos;re ready to share.</p></div><span className="coming-soon">COMING INTO FOCUS <ArrowDownRight size={15}/></span></div>
      </section>

      <section className="experience-section section-pad" id="experience"><div className="section-kicker"><span>05</span><span>EXPERIENCE IN PRACTICE</span></div><div className="experience-row"><div><h2>Learning<br/><em>by doing.</em></h2></div><div className="experience-entry"><span className="experience-icon"><BriefcaseBusiness size={19}/></span><div><span className="info-label">ACADEMIC PROJECT</span><h3>EcoTrack Capstone</h3><p>Developing an academic software project exploring a desktop application with an Electron.js frontend and Python backend.</p><span className="experience-meta">Davao del Norte State College <i>·</i> In progress</span></div></div></div></section>

      <section className="achievements-section section-pad" id="achievements"><div className="section-kicker"><span>06</span><span>RECOGNITION &amp; GROWTH</span></div><div className="achievement-row"><div><h2>Milestones<br/><em>to come.</em></h2></div><div className="achievement-note"><span className="achievement-symbol">✳</span><div><h3>Every step counts.</h3><p>Achievements and certifications will be added as they are completed.</p></div></div></div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-orb"/><div className="section-kicker light-kicker"><span>07</span><span>GET IN TOUCH</span></div><div className="contact-content"><span className="eyebrow"><span className="status-dot"/> OPEN TO CONNECTION</span><h2>Let&apos;s make<br/><em>something matter.</em></h2><p>Have a project idea, a question, or an opportunity to learn together? I&apos;d be glad to hear from you.</p><a className="button button-contact" href={`mailto:${portfolio.email}`}>Send me an email <ArrowUpRightIcon/></a><div className="contact-email"><Mail size={16}/><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a></div>{socials.length > 0 && <div className="social-links">{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name} <ExternalLink size={13}/></a>)}</div>}</div><div className="contact-side-label">AVAILABLE FOR A GOOD CONVERSATION</div></section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">JP</span><span>Junerussell <b>Patris</b></span></a><span className="footer-note">A student portfolio in progress <span>✳</span></span><a className="back-top" href="#top">BACK TO TOP <ArrowUp size={14}/></a><span className="footer-copy">© {new Date().getFullYear()} JUNERUSSELL PATRIS</span></footer>
    {showTop && <a className="to-top" href="#top" aria-label="Scroll to top"><ArrowUp size={18}/></a>}
    {detailsOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setDetailsOpen(false); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" aria-label="Close project details" onClick={() => setDetailsOpen(false)}><X/></button><span className="info-label">ACADEMIC CAPSTONE / PROJECT 001</span><h2 id="modal-title">EcoTrack</h2><p className="modal-lead">{portfolio.project.description}</p><div className="modal-block"><span className="info-label">PROJECT PURPOSE</span><p>{portfolio.project.purpose}</p></div><div className="modal-block"><span className="info-label">FRONTEND &amp; BACKEND</span><p><strong>Electron.js</strong> is used for the desktop interface, while <strong>Python</strong> supports backend functionality. Specific integration and feature details can be added from project documentation.</p></div><div className="modal-block"><span className="info-label">TECHNOLOGY STACK</span><div className="project-tags"><span className="tag">Electron.js</span><span className="tag">Python</span></div></div><div className="modal-block"><span className="info-label">FEATURES</span><p>{portfolio.project.features.length ? portfolio.project.features.join(" · ") : "Verified feature details will be added when available."}</p></div><div className="modal-block"><span className="info-label">LEARNING OUTCOMES</span><p>{portfolio.project.challenges}</p></div><div className="modal-footer"><span>Preview images and repository links can be added when available.</span>{portfolio.project.githubUrl && <a href={portfolio.project.githubUrl} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14}/></a>}{portfolio.project.demoUrl && <a href={portfolio.project.demoUrl} target="_blank" rel="noreferrer">Demo <ExternalLink size={14}/></a>}</div></section></div>}
  </>;
}

function ArrowUpRightIcon() { return <ArrowRight size={15}/>; }
