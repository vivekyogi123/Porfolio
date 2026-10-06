
import React from "react";
import { motion } from "framer-motion";
import "./App.css"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
];

const projects = [
  {
    title: "MERN Portfolio",
    description:
      "A modern responsive developer portfolio built using React, Node.js, Express and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management application with authentication and CRUD functionality.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Student Management System",
    description:
      "A web application for managing student records, information and academic data.",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const education = [
  {
    year: "2024 - Present",
    title: "Bachelor's Degree",
    institute: "JECRC College",
    description:
      "Currently pursuing my graduation with a focus on technology, programming and software development.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">
            V<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="container hero-container">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-small">
              Hello, I'm
            </p>

            <h1>
              Vivek <span>Yogi</span>
            </h1>

            <h2>
              Full Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly web applications
              using the MERN stack and modern web technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work <FaArrowRight />
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-icons">
              <a href="#" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-circle">
              <div className="profile-placeholder">
                VY
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <div className="container">

          <motion.div
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </motion.div>

          <div className="about-grid">

            <motion.div
              className="about-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>Who Am I?</h3>

              <p>
                I'm Vivek Yogi, a passionate Full Stack Developer who enjoys
                creating modern and interactive web applications.
              </p>

              <p>
                I have an interest in frontend development, backend
                development, databases and problem solving.
              </p>

              <p>
                My goal is to continuously improve my development skills and
                build useful real-world applications.
              </p>

              <a href="#contact" className="primary-button">
                Let's Connect <FaArrowRight />
              </a>
            </motion.div>

            <motion.div
              className="about-stats"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="stat-card">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>

              <div className="stat-card">
                <h3>5+</h3>
                <p>Projects</p>
              </div>

              <div className="stat-card">
                <h3>1+</h3>
                <p>Years Learning</p>
              </div>

              <div className="stat-card">
                <h3>100%</h3>
                <p>Passion</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">
        <div className="container">

          <motion.div
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>MY TECHNOLOGIES</p>
            <h2>My <span>Skills</span></h2>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>{skill.name}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <div className="container">

          <motion.div
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>MY WORK</p>
            <h2>Featured <span>Projects</span></h2>
          </motion.div>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -10 }}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github}>
                    <FaGithub /> Code
                  </a>

                  <a href={project.live}>
                    Live Demo <FaExternalLinkAlt />
                  </a>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="section education-section">
        <div className="container">

          <motion.div
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>MY JOURNEY</p>
            <h2>Education & <span>Experience</span></h2>
          </motion.div>

          <div className="timeline">

            {education.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={item.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <span>{item.year}</span>

                  <h3>{item.title}</h3>

                  <h4>{item.institute}</h4>

                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= RESUME ================= */}
      <section className="resume-section">
        <div className="container">

          <motion.div
            className="resume-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <p>WANT TO KNOW MORE?</p>
              <h2>Download My Resume</h2>
            </div>

            <a href="/resume.pdf" download className="primary-button">
              <FaDownload /> Download Resume
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">
        <div className="container">

          <motion.div
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>GET IN TOUCH</p>
            <h2>Contact <span>Me</span></h2>
          </motion.div>

          <div className="contact-grid">

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <h3>Let's work together</h3>

              <p>
                Have a project idea or want to connect? Feel free to send me
                a message.
              </p>

              <div className="contact-item">
                <div>
                  <FaEnvelope />
                </div>

                <span>
                  your-email@example.com
                </span>
              </div>

              <div className="contact-item">
                <div>
                  <FaPhone />
                </div>

                <span>
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="contact-item">
                <div>
                  <FaMapMarkerAlt />
                </div>

                <span>
                  Jaipur, Rajasthan, India
                </span>
              </div>

            </motion.div>

            <motion.form
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                required
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit" className="primary-button">
                Send Message <FaArrowRight />
              </button>

            </motion.form>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container footer-container">

          <div>
            <h2>V<span>.</span></h2>

            <p>
              Building modern experiences with code.
            </p>
          </div>

          <div className="footer-socials">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Vivek Yogi. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;
