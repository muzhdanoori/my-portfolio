
import "./App.css";
import myLibraryScreenshot from "./assets/images/mylibrart-dashboard.png";
import smartCalculatorScreenshot from "./assets/images/smart-calculator.jpeg";
import profilePhoto from "./assets/images/profile.png";
import homeProfilePhoto from "./assets/images/profile-home.png";

const skills = [
  {
    title: "Front-End Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Tools & Design",
    items: ["Git", "GitHub", "VS Code", "Responsive Design"],
  },
  {
    title: "Personal & Team Skills",
    items: ["Leadership", "Teamwork", "Problem Solving", "Communication"],
  },
];

const experiences = [
  {
    number: "01",
    title: "Robotics & STEM",
    description:
      "Participated in robotics team activities and developed an interest in science, technology, and problem-solving.",
    tags: ["Robotics", "STEM", "Teamwork"],
  },
  {
    number: "02",
    title: "Leadership & Collaboration",
    description:
      "Developing leadership skills through teamwork, responsibility, communication, and collaborative learning.",
    tags: ["Leadership", "Responsibility", "Collaboration"],
  },
];

const projects = [
  {
    number: "01",
    title: "MyLibrary",
    image: myLibraryScreenshot,
    imageAlt: "MyLibrary dashboard screenshot",
    type: "Library & Book Discovery Website",
    description:
      "A React-based website that helps users discover books, explore libraries, find study centers, and access book marketplaces.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "React Router",
    ],
    symbol: "ML",
    status: "Completed",
    liveDemo: "https://mylibrary-react.netlify.app/",
    github: "https://github.com/muzhdanoori/mylibrary-react",
  },
  {
    number: "02",
    title: "Smart Calculator",
    image: smartCalculatorScreenshot,
    imageAlt: "Smart Calculator screenshot",
    type: "Interactive Web Application",
    description:
      "An interactive calculator that performs mathematical operations through a clean and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    symbol: "±",
    status: "Completed",
    liveDemo: "https://comforting-pothos-ac028a.netlify.app",
    github: "https://github.com/muzhdanoori/my-first-website",
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo" aria-label="Muzhda Noori home">
          MN<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

            <h1>
              <span>Muzhda Noori</span>
            </h1>

            <h2>
              Front-End Developer
              <span className="hero-subtitle">
                STEM, Robotics &amp; Leadership
              </span>
            </h2>

            <p className="description">
              I build responsive web interfaces using HTML, CSS,
              JavaScript, and React. My background also includes
              robotics, STEM learning, and leadership activities.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Projects <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Get in Touch
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot"></span>
              Always learning. Always building.
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="visual-circle">
              <img
                className="hero-profile-photo"
                src={homeProfilePhoto}
                alt="Profile photo"
              />
              <span className="circle-caption">
                CREATE · LEARN · GROW
              </span>
            </div>

            <div className="floating-card floating-top">
              <span className="floating-symbol">&lt;/&gt;</span>
              <span>
                <strong>Front-End</strong>
                <small>Web Development</small>
              </span>
            </div>

            <div className="floating-card floating-bottom">
              <span className="floating-symbol">✦</span>
              <span>
                <strong>STEM &amp; Robotics</strong>
                <small>Curiosity in action</small>
              </span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="content-section about-section">
          <div className="section-heading">
            <p className="section-label">A LITTLE ABOUT ME</p>
            <h2>
              Learning with <span>Purpose</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-mark">
              <img className="about-photo" src={profilePhoto} alt="Profile photo" />
            </div>

            <div className="about-text">
              <p>
                I am a front-end development learner interested in
                building useful, accessible, and responsive web
                experiences. I enjoy turning ideas into interfaces
                and improving my skills through practical projects.
              </p>

              <p>
                Alongside technology, my interests include STEM,
                robotics, leadership, and collaborative learning.
                I value responsibility, curiosity, and using education
                to make a positive contribution to my community.
              </p>

              <a href="#experience" className="text-link">
                Discover my experience <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="content-section skills-section">
          <div className="section-heading">
            <p className="section-label">WHAT I BRING</p>
            <h2>
              Skills &amp; <span>Strengths</span>
            </h2>
            <p className="section-intro">
              Technical skills and personal strengths I continue
              to develop through learning and practice.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-icon">
                  {group.title === "Front-End Development"
                    ? "</>"
                    : group.title === "Tools & Design"
                    ? "✧"
                    : "✦"}
                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience & Leadership */}
        <section
          id="experience"
          className="content-section experience-section"
        >
          <div className="section-heading">
            <p className="section-label">BEYOND THE SCREEN</p>
            <h2>
              Experience &amp; <span>Leadership</span>
            </h2>
            <p className="section-intro">
              My interests in technology, teamwork, and taking
              responsibility continue to shape how I learn and grow.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-card"
                key={experience.number}
              >
                <span className="experience-number">
                  {experience.number}
                </span>

                <div className="experience-details">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="leadership-note">
            <span className="leadership-icon">✦</span>
            <p>
              <strong>My approach to leadership</strong>
              <span>
                Listen carefully, support the team, take responsibility,
                and keep learning from challenges.
              </span>
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="content-section projects-section"
        >
          <div className="section-heading">
            <p className="section-label">IDEAS INTO INTERFACES</p>
            <h2>
              Selected <span>Projects</span>
            </h2>
            <p className="section-intro">
              Practical projects that help me strengthen my
              front-end development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-screenshot">
                  <img src={project.image} alt={project.imageAlt} />
                </div>

                <div className="project-top">
                  <div className="project-icon">
                    {project.symbol}
                  </div>

                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-status">
                    <span className="status-dot"></span>
                    {project.status}
                  </span>

                  <div className="project-links">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note">
            More projects and improvements will be added as I continue
            learning and building.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="content-section contact-section">
          <div className="contact-panel">
            <p className="section-label">LET'S CONNECT</p>

            <h2>Let&apos;s Connect</h2>

            <p className="contact-description">
              Have a project in mind or an opportunity to discuss? Feel free to
              reach out or explore my projects on GitHub.
            </p>

            <div className="contact-links">
              <a
                href="mailto:muzhdanoori124@gmail.com"
                className="primary-button contact-link"
              >
                Email Muzhda
              </a>
              <a
                href="https://github.com/muzhdanoori"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button contact-link"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="footer-logo">
          Muzhda<span>.</span>
        </a>

        <p>
          Built with React and a commitment to continuous learning.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} Muzhda Noori. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
