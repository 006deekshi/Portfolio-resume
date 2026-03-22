import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Smooth scroll utility
const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

// --- Components ---

function Navbar({ sectionRefs }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <span className="text-lg font-extrabold text-white">Deekshitha Lingala</span>
        <div className="space-x-6 text-[16px]">
          {[
            ["Projects", sectionRefs.projectsRef],
            ["About", sectionRefs.aboutRef],
            ["Skills", sectionRefs.skillsRef],
            ["Experience", sectionRefs.experienceRef],
            ["Contact", sectionRefs.contactRef],
          ].map(([label, ref]) => (
            <button
              key={label}
              onClick={() => scrollToSection(ref)}
              className="text-neutral-300 hover:text-indigo-400 transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}


function Hero({ projectsRef }) {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-12 text-center bg-neutral-950">
      
      <motion.img
        src="/Profile.jpg"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-64 h-64 rounded-full object-cover border-4 border-indigo-600 shadow mb-8"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-extrabold text-white mb-4"
      >
        Deekshitha Lingala
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-indigo-400 mb-4"
      >
        Full-Stack Developer | MERN Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-xl text-neutral-300 mb-8"
      >
        I build scalable full-stack applications with secure authentication,
        clean UI, and real-world problem solving.
      </motion.p>

      {/* --- Buttons Section --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        {/* View Projects Button */}
        <button
          onClick={() => scrollToSection(projectsRef)}
          className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition flex items-center gap-2"
        >
          View Projects <FaArrowDown />
        </button>

        {/* GitHub Button */}
        <a
          href="https://github.com/006deekshi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full border border-neutral-700 hover:border-indigo-500 flex items-center gap-2"
        >
          <FaGithub /> GitHub
        </a>

        {/* Resume Download Button */}
        <a
          href="/Deekshitha-resume.pdf"
          download
          className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 transition flex items-center gap-2"
        >
          <FaDownload /> Resume
        </a>
      </motion.div>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4" id="about">
      <h3 className="text-xl font-semibold text-indigo-500 mb-2 uppercase tracking-wide">
        About Me
      </h3>
      <div className="text-neutral-200 text-lg">
        <ul className="list-disc list-inside space-y-1">
          <li>
            Third-year B.Tech Computer Science student at SRM University (<span className="font-semibold">GPA: 9.0</span>)
          </li>
          <li>Strong foundation in Data Structures, OOP, REST APIs</li>
          <li>Interested in Full-Stack Development and AI/ML systems</li>
          <li>Oracle Certified Professional Java SE 17 Developer</li>
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "Python"],
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      category: "Databases",
      items: ["MongoDB"],
    },
    {
      category: "Core",
      items: ["DSA", "OOP", "REST APIs", "JWT Authentication"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10" id="skills">
      <h3 className="text-xl font-semibold text-indigo-500 mb-6 uppercase tracking-wide">
        Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
        {skills.map(({ category, items }) => (
          <div
            key={category}
            className="bg-neutral-900 rounded-lg shadow border border-neutral-800 p-5 flex flex-col"
          >
            <h4 className="font-semibold text-indigo-400 mb-2 text-lg">{category}</h4>
            <ul className="space-y-1">
              {items.map((skill) => (
                <li key={skill} className="text-neutral-200">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Quick Complaint Box",
      desc: "Full-stack complaint system with Admin Dashboard, JWT authentication, role-based access, and real-time complaint tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/006deekshi/Complaint-System",
      live: "https://complaint-system-delta.vercel.app/",
    },
    {
      title: "Smart Task Manager",
      desc: "Task manager with CRUD operations, and efficient state management.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/006deekshi/Taskify",
      live: "https://soft-caramel-68939b.netlify.app/"
    },
    {
      title: "Gym Tracker",
      desc: "Workout tracker using React Hooks with optimized rendering.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/006deekshi/gymtracker",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h3 className="text-2xl font-bold text-indigo-500 mb-12 text-center">
        Projects
      </h3>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-500 transition"
          >
            <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
            <p className="text-neutral-400 mb-3">{proj.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((t) => (
                <span key={t} className="text-xs bg-indigo-600/20 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={proj.github} target="_blank" className="text-indigo-400">
                Github Link
              </a>
              {proj.live && (
                <a href={proj.live} target="_blank" className="text-green-400">
                  Live Link
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10" id="experience">
      <h3 className="text-xl font-semibold text-indigo-500 mb-5 uppercase tracking-wide">
        Experience
      </h3>
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 shadow p-5">
        <h4 className="font-semibold text-white mb-1">
          Research Intern – AI/ML Water Quality Assessment
        </h4>
        <ul className="list-disc list-inside text-neutral-300 text-lg space-y-1">
          <li>Data preprocessing</li>
          <li>Feature engineering</li>
          <li>Model experimentation & evaluation</li>
        </ul>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10" id="achievements">
      <h3 className="text-xl font-semibold text-indigo-500 mb-5 uppercase tracking-wide">
        Achievements
      </h3>
      <ul className="list-disc list-inside text-neutral-200 text-lg space-y-1">
        <li>Oracle Certified Professional Java SE 17 Developer</li>
        <li>Hackathon participation</li>
        <li>Strong collaborative problem-solving</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-14" id="contact">
      <h3 className="text-xl font-semibold text-indigo-500 mb-5 uppercase tracking-wide">Contact</h3>
      <div className="flex flex-col gap-4 text-neutral-300 text-base">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-xl text-indigo-400" />
          <a
            href="mailto:deekshitha.lingala.work@gmail.com"
            className="hover:underline"
          >
            deekshitha.lingala.work@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub className="text-xl text-indigo-400" />
          <a
            href="https://github.com/006deekshi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/006deekshi
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Main App ---

export default function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans scroll-smooth">
      <Navbar
        sectionRefs={{
          projectsRef,
          aboutRef,
          skillsRef,
          experienceRef,
          contactRef,
        }}
      />
      <div>
        <Hero projectsRef={projectsRef} />
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <Achievements />
        <div ref={contactRef}>
          <Contact />
        </div>
        <footer className="text-center text-neutral-500 py-8 text-sm">
          © 2026 Deekshitha Lingala
        </footer>
      </div>
    </main>
  );
}