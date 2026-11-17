import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ArrowDown, ArrowUp, Download, Github, Linkedin, Menu, X, Code2, Layers, Database, Terminal, GraduationCap, MapPin, Mail, Phone, Copy, Check, HeartPulse, Brain, Scissors, Wallet, Gamepad2, Cpu, Braces, Smartphone, GitBranch, PenTool, Globe } from 'lucide-react';
import { profile, skills, interests, projects, experience } from './content';
import './styles.css';

const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
const icons = { code: Code2, layers: Layers, database: Database, terminal: Terminal };
const techIcons = { Kotlin: Smartphone, Python: Braces, JavaScript: Code2, C: Code2, 'C#': Code2, HTML: Globe, CSS: PenTool, 'React Native': Layers, 'Jetpack Compose': Smartphone, PyTorch: Cpu, MySQL: Database, Supabase: Database, Git: GitBranch, GitHub: Github, 'Android Studio': Smartphone, Unity: Gamepad2, Figma: PenTool };

function ExternalLink({ href, children, className = '', ...rest }) { return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>{children}</a>; }
function Socials() { return <div className="socials"><ExternalLink href={profile.github} aria-label="Dwiky on GitHub"><Github size={19} /></ExternalLink><ExternalLink href={profile.linkedin} aria-label="Dwiky on LinkedIn"><Linkedin size={19} /></ExternalLink></div>; }
function SectionHeading({ number, label, title, children }) { return <div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2>{children && <p className="section-subtitle">{children}</p>}</div>; }

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max * 100 : 0);
      const current = nav.map(n => document.getElementById(n.toLowerCase())).filter(Boolean).filter(s => s.getBoundingClientRect().top <= 180).at(-1);
      if (current) setActive(current.id);
    };
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  useEffect(() => { const escape = e => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }; if (open) window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape); }, [open]);
  return <header className="header"><div className="scroll-progress" style={{ width: `${progress}%` }} /><div className="nav-wrap container"><a href="#home" className="wordmark" onClick={() => setOpen(false)}>Dwiky<span>.</span>CF</a><nav id="main-nav" aria-label="Main navigation" className={open ? 'nav-links open' : 'nav-links'}>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? 'active' : ''} aria-current={active === n.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{n}</a>)}</nav><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a><button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}

function TypewriterRole() {
  const [text, setText] = useState(profile.roles[0]);

  useEffect(() => {
    const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    let timer;

    const start = () => {
      clearTimeout(timer);
      if (motionPreference.matches) {
        setText(profile.roles[0]);
        return;
      }

      let roleIndex = 0;
      let characterCount = 0;
      let deleting = false;
      setText('');

      const tick = () => {
        const role = profile.roles[roleIndex];
        characterCount += deleting ? -1 : 1;
        setText(role.slice(0, characterCount));

        let delay = deleting ? 45 : 85;
        if (!deleting && characterCount === role.length) {
          deleting = true;
          delay = 1900;
        } else if (deleting && characterCount === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % profile.roles.length;
          delay = 320;
        }
        timer = setTimeout(tick, delay);
      };

      timer = setTimeout(tick, 180);
    };

    start();
    motionPreference.addEventListener('change', start);
    return () => {
      clearTimeout(timer);
      motionPreference.removeEventListener('change', start);
    };
  }, []);

  return <><span className="role-typewriter" aria-hidden="true">{text}</span><span className="sr-only">{profile.roles.join('. ')}.</span></>;
}

function Hero() {
  return <section id="home" className="hero container"><div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="tiny-line" /> HELLO, I’M</p><h1>Dwiky Christian<br /><span>Febriano.</span></h1><div className="role"><span className="code-chevron">&gt;</span><TypewriterRole /><span className="cursor" /></div><p className="hero-description">A Computer Science student at Universitas Multimedia Nusantara, passionate about building impactful software solutions, developing intelligent systems, and transforming ideas into meaningful digital experiences.</p><div className="hero-actions"><a href="#projects" className="button primary">Explore My Work <ArrowUpRight size={18} /></a><a href={profile.cv} download className="button secondary"><Download size={17} /> Download CV</a></div><div className="hero-social"><Socials /><span className="social-divider" /><span>Code. Create. Keep learning.</span></div></div><div className="hero-portrait"><div className="portrait-frame"><picture><source srcSet="/images/dwiky-profile.webp" type="image/webp" /><img src={profile.photo} alt="Dwiky Christian Febriano wearing his blue UMN blazer outdoors" fetchPriority="high" width="1247" height="1280" /></picture><div className="portrait-shade" /><div className="portrait-caption"><span><MapPin size={14} /> BASED IN INDONESIA</span><span>01 / INTRODUCTION</span></div></div><div className="portrait-corner top" /><div className="portrait-corner bottom" /><div className="availability"><span className="status-dot" /><div>Open to opportunities<small>Software Engineering Internships</small></div><ArrowUpRight size={18} /></div><span className="portrait-side-label">CURIOUS MIND. BUILDER AT HEART.</span></div><div className="hero-bottom"><a href="#about"><span className="scroll-icon"><ArrowDown size={15} /></span> Scroll to Explore</a><span>SOFTWARE ENGINEERING <i /> ARTIFICIAL INTELLIGENCE</span></div></section>;
}

function About() { return <section id="about" className="section about"><div className="container reveal"><SectionHeading number="01" label="THE PERSON BEHIND THE CODE" title={<>A Little <span>About Me</span></>}>Driven by curiosity. Inspired by technology.</SectionHeading><div className="about-grid"><div className="biography"><p>I’m Dwiky Christian Febriano, a fifth-semester Computer Science student at <strong>Universitas Multimedia Nusantara</strong>, Indonesia, with a strong interest in Software Engineering, Artificial Intelligence, and modern application development.</p><p>Throughout my academic journey, I have contributed to <strong>more than 15 university projects</strong>. My experience spans web and mobile applications, deep learning research, game development, and collaborative technical projects.</p><p>I enjoy turning complex problems into practical solutions while growing my technical knowledge, creativity, and teamwork skills. Currently, I’m seeking opportunities to grow as a Software Engineer through real-world development experience, collaboration, and continuous learning.</p><a href="#contact" className="text-link">Let’s get to know each other <ArrowRight size={17} /></a></div><div className="education"><div className="education-top"><span className="icon-box"><GraduationCap /></span><span className="micro-label">EDUCATION</span></div><h3>Universitas Multimedia Nusantara</h3><p>Bachelor’s Degree in Computer Science</p><div className="education-bottom"><span>Aug 2024 — Aug 2028</span><span><MapPin size={14} /> Tangerang, Indonesia</span></div></div></div><div className="stats"><div><strong>15<span>+</span></strong><span>Academic Projects</span></div><div><Code2 /><strong className="stat-text">Computer Science</strong><span>Student at UMN</span></div><div><Cpu /><strong className="stat-text">Engineering & AI</strong><span>Areas of Focus</span></div></div></div></section>; }

function Skills() { return <section id="skills" className="section"><div className="container reveal"><SectionHeading number="02" label="MY DEVELOPER TOOLKIT" title={<>Skills & <span>Tech Stack</span></>}>Technologies and tools I use to bring ideas to life.</SectionHeading><div className="skills-grid">{skills.map(group => { const Icon = icons[group.icon]; return <div className="skill-group" key={group.title}><h3><Icon size={20} /> {group.title}</h3><div className="tech-grid">{group.items.map(item => { const TechIcon = techIcons[item]; return <div className="tech" key={item}><TechIcon size={20} /><span>{item}</span></div>; })}</div></div>; })}</div><div className="interests"><span className="micro-label">WHAT I’M DRAWN TO</span><div>{interests.map(i => <span key={i}>{i}</span>)}</div></div></div></section>; }

function ProjectVisual({ project }) {
  const Icon = { artery: HeartPulse, brain: Brain, salon: Scissors, budget: Wallet, farm: Gamepad2 }[project.visual];
  return <div className={`project-visual ${project.visual}`} aria-label={`Abstract illustration for ${project.title}`} role="img"><div className="visual-grid" /><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-icon"><Icon strokeWidth={1.2} /></div>{project.visual === 'artery' && <svg className="pulse-line" viewBox="0 0 500 100" aria-hidden="true"><path d="M0 55H140l20-10 18 15 22-48 24 76 20-33H500" /></svg>}<div className="visual-meta"><span>{project.eyebrow}</span><span>PROJECT / {String(projects.indexOf(project) + 1).padStart(2, '0')}</span></div></div>;
}
function ProjectCard({ project }) { return <article className={`project-card ${project.featured ? 'featured' : ''}`}><ExternalLink href={project.url} className="visual-link" aria-label={`${project.action}: ${project.title}`}><ProjectVisual project={project} /><span className="project-open"><ArrowUpRight size={22} /></span></ExternalLink><div className="project-content"><div className="project-kicker"><span>{project.category}</span>{project.period && <span>{project.period}</span>}</div><h3>{project.title}</h3>{project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}<p className="project-description">{project.description}</p>{project.metrics && <div className="metrics">{project.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>}{project.highlights && <ul className="project-highlights">{project.highlights.map(x => <li key={x}>{x}</li>)}</ul>}{project.note && <p className="project-note">{project.note}</p>}<div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div><ExternalLink className="project-action" href={project.url}>{project.action}<ArrowUpRight size={17} /></ExternalLink></div></article>; }
function Projects() { const [filter, setFilter] = useState('All'); const filters = ['All', 'Web Development', 'AI / Deep Learning', 'Mobile', 'Game Development']; const visible = projects.filter(p => filter === 'All' || p.category === filter); return <section id="projects" className="section projects-section"><div className="container reveal"><div className="heading-row"><SectionHeading number="03" label="FROM IDEAS TO IMPLEMENTATION" title={<>Featured <span>Projects</span></>}>A selection of projects where I explore, build, and solve real-world challenges.</SectionHeading><ExternalLink href={profile.github} className="text-link all-repos">More on GitHub <ArrowUpRight size={17} /></ExternalLink></div><div className="filters" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={filter === f ? 'selected' : ''}>{f}{f === 'All' && <span>05</span>}</button>)}</div><p className="sr-only" role="status">{visible.length} projects shown</p><div className="projects-grid">{visible.map(p => <ProjectCard project={p} key={p.id} />)}</div></div></section>; }

function ExperienceTimeline() { return <section id="experience" className="section"><div className="container reveal"><SectionHeading number="04" label="BEYOND THE CLASSROOM" title={<>Experience & <span>Involvement</span></>}>Learning, collaborating, and contributing beyond the classroom.</SectionHeading><div className="timeline">{experience.map(e => <article className="timeline-entry" key={e.title}><div className="timeline-date"><span>{e.period}</span><small>{e.type}</small></div><div className="timeline-content"><div className="timeline-title"><h3>{e.title}</h3>{e.ongoing && <span className="ongoing"><span className="status-dot" /> Ongoing</span>}</div><p className="organization">{e.organization}</p><p>{e.description}</p>{e.details && <ul>{e.details.map(d => <li key={d}>{d}</li>)}</ul>}<div className="tags">{e.tags.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div></div></section>; }

function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  useEffect(() => { if (!copyStatus) return; const t = setTimeout(() => setCopyStatus(''), 4000); return () => clearTimeout(t); }, [copyStatus]);
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email copied!'); } catch { setCopyStatus('Copy unavailable. Select the email address below.'); } };
  return <section id="contact" className="section contact-section"><div className="container reveal"><p className="eyebrow"><span>05</span> / THE NEXT CHAPTER</p><div className="contact-layout"><div><span className="contact-pretitle">HAVE AN IDEA IN MIND?</span><h2>Let’s Build<br />Something <span>Together.</span><ArrowUpRight className="contact-arrow" /></h2><p>I’m always excited to connect with fellow developers, collaborate on meaningful projects, and explore new opportunities in software engineering and technology.</p><p>Have an interesting project, an internship opportunity, or simply want to exchange ideas? Feel free to reach out.</p><div className="contact-actions"><a className="button primary" href={`mailto:${profile.email}`}>Send Me an Email <ArrowUpRight size={18} /></a><ExternalLink className="button secondary" href={profile.linkedin}><Linkedin size={17} /> Connect on LinkedIn</ExternalLink></div></div><div className="contact-details"><div className="contact-detail"><Mail /><span className="micro-label">DROP ME A LINE</span><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><button className="copy-email" onClick={copy}>{copyStatus === 'Email copied!' ? <Check size={14} /> : <Copy size={14} />} Copy email</button><span role="status" className="copy-status">{copyStatus}</span></div><div className="contact-detail"><Phone /><span className="micro-label">PHONE / WHATSAPP</span><ExternalLink className="email-link" href={profile.whatsapp} aria-label={`Chat with Dwiky on WhatsApp at ${profile.phone}`}>{profile.phone} <ArrowUpRight size={14} /></ExternalLink></div><div className="contact-detail"><MapPin /><span className="micro-label">BASED IN</span><p>{profile.location}</p></div><div className="contact-profiles"><ExternalLink href={profile.github}><Github size={19} /> GitHub <ArrowUpRight size={16} /></ExternalLink><ExternalLink href={profile.linkedin}><Linkedin size={19} /> LinkedIn <ArrowUpRight size={16} /></ExternalLink></div></div></div></div></section>;
}
function Footer() { return <footer className="footer container"><div className="footer-top"><div><a className="wordmark" href="#home">Dwiky<span>.</span>CF</a><p>Dwiky Christian Febriano</p><p>Building ideas into meaningful digital experiences.</p></div><Socials /></div><div className="footer-bottom"><span>© 2026 Dwiky Christian Febriano. All rights reserved.</span><a href="#home">Back to top <ArrowUp size={15} /></a></div></footer>; }
function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => { el.classList.add('reveal-ready'); observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><About /><Skills /><Projects /><ExperienceTimeline /><Contact /></main><Footer /></>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
