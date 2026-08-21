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
  "HTML & CSS",
  "REST API"
];

const projects = [
  {
    category: "MERN • WEB APPLICATION",
    title: "Employee Management System",
    description:
      "A full-stack employee management application with registration, login, authentication and MongoDB Atlas integration.",
    tech: "React • Node.js • Express • MongoDB"
  },
  {
    category: "MACHINE LEARNING • AI",
    title: "Online Payment Fraud Detection",
    description:
      "A machine learning system that analyzes online payment transactions and identifies potentially fraudulent transactions.",
    tech: "Python • Pandas • Scikit-learn • Random Forest"
  },
  {
    category: "FRONTEND • REACT",
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio designed to showcase my skills, projects, education and technical journey.",
    tech: "React • Bootstrap • CSS • JavaScript"
  }
];

export default function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand portfolio-logo" href="#home">
            portfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navMenu"
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center">

            {/* TEXT */}

            <div className="col-lg-7 order-2 order-lg-1">
              <div className="hero-content">

                <span className="hero-small-title">
                  COMPUTER ENGINEERING • AI
                </span>

                <h1 className="hero-title">
                  Hi, I'm
                  <span>Chavidisetty</span>
                  <span>Srikanth.</span>
                </h1>

                <p className="hero-subtitle">
                  I'm a Full Stack Developer
                </p>

                <p className="hero-description">
                  I build responsive web applications and intelligent
                  solutions using modern web technologies, Python and
                  Machine Learning. I enjoy turning ideas into practical,
                  user-friendly applications.
                </p>

                <div className="hero-buttons">
                  <a
                    href="#projects"
                    className="btn custom-primary-btn"
                  >
                    View My Work
                  </a>

                  <a
                    href="#contact"
                    className="btn custom-outline-btn"
                  >
                    Get In Touch
                  </a>
                </div>

              </div>
            </div>

            {/* PROFILE */}

            <div className="col-lg-5 order-1 order-lg-2">
              <div className="profile-wrapper">

                <img
                  src="/profile.png"
                  alt="Srikanth"
                  className="profile-image"
                />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="portfolio-section" id="about">
        <div className="container">

          <div className="row mb-5">
            <div className="col-lg-8">

              <div className="section-label">
                ABOUT ME
              </div>

              <h2 className="section-title">
                My Journey
              </h2>

              <p className="section-description">
                I am a Computer Engineering (AI) student with an interest
                in Full Stack Development, Machine Learning and Artificial
                Intelligence. I enjoy building real-world projects and
                continuously improving my programming and software
                development skills.
              </p>

            </div>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="info-card">

                <span>EDUCATION</span>

                <h3>
                  B.Tech in Computer Engineering (AI)
                </h3>

                <p>
                  Ganpat University
                </p>

                <p>
                  Computer Engineering with Artificial Intelligence
                  specialization.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="info-card">

                <span>CAREER GOAL</span>

                <h3>
                  Full Stack & ML Developer
                </h3>

                <p>
                  Software Development
                </p>

                <p>
                  Interested in developing scalable web applications
                  and intelligent machine-learning solutions.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section
        className="portfolio-section alt-section"
        id="education"
      >
        <div className="container">

          <div className="row mb-5">
            <div className="col-lg-8">

              <div className="section-label">
                EDUCATION
              </div>

              <h2 className="section-title">
                Academic Journey
              </h2>

              <p className="section-description">
                My academic background in computer engineering and
                artificial intelligence.
              </p>

            </div>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="info-card">

                <span>2022 — 2026</span>

                <h3>
                  B.Tech in Computer Engineering (AI)
                </h3>

                <p>
                  Ganpat University
                </p>

                <p>
                  Focused on programming, data structures,
                  databases, artificial intelligence and machine learning.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="info-card">

                <span>ACADEMIC FOCUS</span>

                <h3>
                  Computer Engineering & AI
                </h3>

                <p>
                  Programming • Web Development • Machine Learning
                </p>

                <p>
                  Building practical projects using modern development
                  technologies.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        className="portfolio-section"
        id="skills"
      >
        <div className="container">

          <div className="row mb-5">
            <div className="col-lg-8">

              <div className="section-label">
                TOOLKIT
              </div>

              <h2 className="section-title">
                Technical Skills
              </h2>

              <p className="section-description">
                Technologies and tools I use to build applications
                and machine-learning projects.
              </p>

            </div>
          </div>

          <div className="row g-3">

            {skills.map((skill) => (
              <div
                className="col-6 col-md-3"
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

      <section
        className="portfolio-section alt-section"
        id="projects"
      >
        <div className="container">

          <div className="row mb-5">
            <div className="col-lg-8">

              <div className="section-label">
                WORK
              </div>

              <h2 className="section-title">
                Selected Projects
              </h2>

              <p className="section-description">
                Some of the projects I have built while developing
                my software engineering and machine-learning skills.
              </p>

            </div>
          </div>

          <div className="row g-4">

            {projects.map((project) => (
              <div
                className="col-md-6 col-lg-4"
                key={project.title}
              >
                <div className="project-card">

                  <div>

                    <span>
                      {project.category}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                  </div>

                  <div className="project-tech">
                    {project.tech}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        className="portfolio-section"
        id="experience"
      >
        <div className="container">

          <div className="row mb-5">
            <div className="col-lg-8">

              <div className="section-label">
                EXPERIENCE
              </div>

              <h2 className="section-title">
                What I Build
              </h2>

              <p className="section-description">
                I am focused on developing practical software projects
                and strengthening my skills in full-stack development
                and machine learning.
              </p>

            </div>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="info-card">
                <span>01</span>
                <h3>Full Stack Development</h3>
                <p>
                  Building responsive frontend applications with
                  React and backend services using Node.js and Express.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <span>02</span>
                <h3>Machine Learning</h3>
                <p>
                  Developing machine-learning models using Python,
                  Pandas, Scikit-learn and data-processing techniques.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <span>03</span>
                <h3>Problem Solving</h3>
                <p>
                  Applying programming, DSA and software engineering
                  concepts to solve practical problems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >
        <div className="container text-center">

          <div className="section-label">
            GET IN TOUCH
          </div>

          <h2 className="section-title">
            Let's build something.
          </h2>

          <p className="section-description mx-auto">
            I'm open to software development opportunities,
            projects and conversations about technology,
            full-stack development and AI.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:srikanthchavidisetty@gmail.com"
              className="btn custom-primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Srikanthchavidisetty"
              target="_blank"
              rel="noreferrer"
              className="btn custom-outline-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chavidisetty-srikanth-411b082b3"
              target="_blank"
              rel="noreferrer"
              className="btn custom-outline-btn"
            >
              LinkedIn
            </a>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="container text-center">
          <p>
            © 2026 Chavidisetty Srikanth. Built with React.
          </p>
        </div>
      </footer>
    </>
  );
}