import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, Menu, X,
  Code2, Database, Globe, Smartphone, ExternalLink, Download,
  ChevronDown, Send
} from "lucide-react";
import "./index.css";

const projects = [
  {
    title: "Komo Restaurant",
    type: "Restaurant Management System",
    description: "A modern restaurant website and management concept with menu browsing, food ordering, reservations, delivery options and a planned PHP/MySQL backend.",
    tech: ["React", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Shiv Car Rental",
    type: "Car Rental Website",
    description: "Responsive car rental platform concept with vehicle listings, subscription plans, booking flow, payment page and PHP/MySQL backend planning.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Profile Card",
    type: "React Mini Project",
    description: "Simple Instagram-style profile card built while learning React state management with follow/unfollow interaction.",
    tech: ["React", "JSX", "CSS", "useState"],
    github: "#",
    demo: "#"
  },
  {
    title: "Mini Book Store",
    type: "React Mini Project",
    description: "A beginner-friendly book store interface with Fiction and Non-Fiction category filtering.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    demo: "#"
  }
];

const skills = [
  { name: "HTML5", icon: Globe },
  { name: "CSS3", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React.js", icon: Code2 },
  { name: "PHP", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "Bootstrap", icon: Smartphone },
  { name: "MongoDB", icon: Database },
  { name: "Git & GitHub", icon: Github }
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button className="logo" onClick={() => go("home")}>PP<span>.</span></button>

        <div className={`nav-links ${menu ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "journey", "contact"].map((item) => (
            <button key={item} onClick={() => go(item)}>{item}</button>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="menu-btn" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">HELLO, I'M</div>
            <h1>Prem<br /><span>Patel.</span></h1>
            <p className="hero-role">BCA Student • Web Developer • React Learner</p>
            <p className="hero-text">
              I build responsive and interactive websites while learning modern
              frontend and full-stack development.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => go("projects")}>
                View Projects <ArrowUpRight size={19} />
              </button>
              <button className="secondary-btn" onClick={() => go("contact")}>
                Contact Me <Mail size={18} />
              </button>
            </div>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href="mailto:your-email@example.com"><Mail /></a>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card">
              <div className="card-top">
                <span>PREM_PATEL.EXE</span><span>● ● ●</span>
              </div>
              <pre>{`const developer = {
  name: "Prem Patel",
  education: "BCA",
  focus: [
    "Web Development",
    "React.js",
    "PHP + MySQL"
  ],
  learning: true,
  problemSolver: true
};`}</pre>
              <div className="terminal-line"><span>➜</span> build --portfolio</div>
              <div className="scan"></div>
            </div>
          </div>

          <button className="scroll-cue" onClick={() => go("about")}><ChevronDown /></button>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span><h2>About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <h3>Learning. Building. Improving.</h3>
              <p>
                I am Prem Patel, a BCA student interested in web development and
                practical software projects. I enjoy turning ideas into clean,
                responsive interfaces and learning how frontend applications connect
                with real backends and databases.
              </p>
              <p>
                My current learning path includes React.js, JavaScript, PHP,
                MySQL, MongoDB, Bootstrap and Git/GitHub. I prefer hands-on projects
                because they help me understand concepts faster.
              </p>
            </div>
            <div className="fact-box">
              <div><b>BCA</b><span>Education</span></div>
              <div><b>React</b><span>Current Focus</span></div>
              <div><b>PHP + MySQL</b><span>Backend Learning</span></div>
              <div><b>Web Dev</b><span>Main Interest</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span>02</span><h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map(({name, icon: Icon}) => (
              <div className="skill-card" key={name}>
                <Icon size={25} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span>03</span><h2>Projects</h2>
          </div>
          <p className="section-intro">A selection of my learning and college projects.</p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-type">{p.type}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-links">
                  <a href={p.github}><Github size={18}/> Code</a>
                  <a href={p.demo}><ExternalLink size={18}/> Demo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section">
          <div className="section-heading">
            <span>04</span><h2>My Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">CURRENT</span>
              <div><h3>BCA Student</h3><p>Building academic projects and strengthening programming, database and web-development fundamentals.</p></div>
            </div>
            <div className="timeline-item">
              <span className="year">2026</span>
              <div><h3>Full-Stack Learning</h3><p>Working with React, PHP, MySQL, MongoDB and practical responsive web projects.</p></div>
            </div>
            <div className="timeline-item">
              <span className="year">NEXT</span>
              <div><h3>Build More Real Projects</h3><p>Continue improving UI/UX, backend development, APIs, authentication and deployment.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <span>05</span><h2>Let's Connect</h2>
          </div>
          <div className="contact-grid">
            <div>
              <h3>Have a project or opportunity?</h3>
              <p>I'm open to learning opportunities, collaborations and interesting web-development projects.</p>
              <a className="email-link" href="mailto:your-email@example.com"><Mail /> your-email@example.com</a>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! Connect your Formspree/email service to receive messages."); }}>
              <input required placeholder="Your Name" />
              <input required type="email" placeholder="Your Email" />
              <textarea required rows="5" placeholder="Your Message"></textarea>
              <button className="primary-btn" type="submit">Send Message <Send size={18}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Prem Patel</span>
        <span>Built with React + CSS</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);