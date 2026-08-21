import { useState } from "react";
import "./App.css";

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Machine Learning",
  "Git & GitHub",
];

const projects = [
  {
    title: "Employee Management System",
    description:
      "A full-stack MERN application with employee registration, login, authentication and MongoDB Atlas integration.",
    tech: "React • Node.js • Express • MongoDB",
  },
  {
    title: "Online Payment Fraud Detection",
    description:
      "A machine learning project that analyzes online payment transactions and detects potentially fraudulent transactions.",
    tech: "Python • Pandas • Scikit-learn • Random Forest",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div className="container">

          <a
            className="navbar-brand portfolio-logo"
            href="#home"
            onClick={closeMenu}
          >
            Srikanth
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#home"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#education"
                  onClick={closeMenu}
                >
                  Education
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#skills"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#experience"
                  onClick={closeMenu}
                >
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero-section">

        <div className="container">

          <div className="row align-items-center min-vh-100 py-5">

            {/* LEFT */}

            <div className="col-lg-6 order-2 order-lg-1">

              <div className="hero-content">

                <p className="hero-small-title">
                  COMPUTER ENGINEERING • AI
                </p>

                <h1 className="hero-title">
                  Hi, I'm{" "}
                  <span>Chavidisetty Srikanth</span>
                </h1>

                <h2 className="hero-subtitle">
                  I'm a Full Stack Developer
                </h2>

                <p className="hero-description">
                  Specializing in modern web technologies and
                  machine learning. I build responsive,
                  user-friendly and practical applications.
                </p>

                <div className="hero-buttons">

                  <a
                    href="#contact"
                    className="btn btn-primary custom-primary-btn"
                  >
                    Contact Me
                  </a>

                  <a
                    href="#projects"
                    className="btn btn-outline-primary custom-outline-btn"
                  >
                    View Work
                  </a>

                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div className="col-lg-6 order-1 order-lg-2">

              <div className="profile-wrapper">

                <img
                  src="/profile.png"
                  alt="Chavidisetty Srikanth"
                  className="profile-image"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="portfolio-section">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-9 text-center">

              <p className="section-label">
                ABOUT ME
              </p>

              <h2 className="section-title">
                About Me
              </h2>

              <p className="section-description">
                I am a Computer Engineering (AI) student
                interested in full-stack development, machine
                learning and modern web technologies. I enjoy
                building practical applications and continuously
                improving my technical skills.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section id="education" className="portfolio-section light-section">

        <div className="container">

          <p className="section-label text-center">
            EDUCATION
          </p>

          <h2 className="section-title text-center">
            My Education
          </h2>

          <div className="row justify-content-center mt-4">

            <div className="col-lg-8">

              <div className="info-card">

                <h3>
                  B.Tech in Computer Engineering (AI)
                </h3>

                <p>
                  Ganpat University
                </p>

                <span>
                  2026
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="portfolio-section">

        <div className="container">

          <p className="section-label text-center">
            SKILLS
          </p>

          <h2 className="section-title text-center">
            My Skills
          </h2>

          <div className="row g-3 mt-4">

            {skills.map((skill) => (

              <div
                className="col-6 col-md-4 col-lg-3 col-xl-2"
                key={skill}
              >

                <div className="skill-card">
                  {skill}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="portfolio-section light-section">

        <div className="container">

          <p className="section-label text-center">
            PROJECTS
          </p>

          <h2 className="section-title text-center">
            My Projects
          </h2>

          <div className="row g-4 mt-4">

            {projects.map((project) => (

              <div
                className="col-md-6"
                key={project.title}
              >

                <div className="project-card h-100">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <span>
                    {project.tech}
                  </span>

                  <div className="mt-4">

                    <a
                      href="#contact"
                      className="btn btn-outline-primary"
                    >
                      View Project
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="portfolio-section">

        <div className="container">

          <p className="section-label text-center">
            EXPERIENCE
          </p>

          <h2 className="section-title text-center">
            Experience
          </h2>

          <div className="row justify-content-center mt-4">

            <div className="col-lg-8">

              <div className="info-card">

                <h3>
                  Student / Fresher Developer
                </h3>

                <p>
                  Currently building projects using React,
                  Node.js, Express, MongoDB, Python and
                  Machine Learning.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="container">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <p className="section-label">
                CONTACT
              </p>

              <h2 className="section-title">
                Let's Connect
              </h2>

              <p className="section-description">
                I'm open to opportunities, projects and
                conversations about software development
                and AI.
              </p>

              <div className="contact-buttons">

                <a
                  href="mailto:your-email@gmail.com"
                  className="btn btn-primary"
                >
                  Email Me
                </a>

                <a
                  href="https://github.com/Srikanthchavidisetty"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/chavidisetty-srikanth-411b082b3"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container text-center">

          <p>
            © 2026 Chavidisetty Srikanth. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;