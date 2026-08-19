import { useEffect, useState } from "react";
import "./App.css";

const skills = [
  {
    category: "Programming",
    symbol: "</>",
    items: ["Java", "Python", "C"],
  },
  {
    category: "Core Technologies",
    symbol: "01",
    items: [
      "Data Structures & Algorithms",
      "SQL",
      "MongoDB",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    category: "Tools & Platforms",
    symbol: "✦",
    items: [
      "MySQL",
      "VS Code",
      "MATLAB",
      "Simulink",
      "Arduino",
      "Tinkercad",
      "Power BI",
      "Tableau",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "AI Driven Traffic Light Automation",
    period: "Nov 2025 – Feb 2026",
    description:
      "An intelligent traffic control system that dynamically adapts signal timing using real-time vehicle detection, lane density analysis, and emergency vehicle prioritization.",
    tags: ["Python", "YOLO", "OpenCV", "AI"],
    type: "traffic",
  },
  {
    number: "02",
    title: "Gas Leakage Detection & Prevention",
    period: "Mar 2024 – Sep 2024",
    description:
      "An IoT-based safety system that detects hazardous gas levels, triggers alerts, and activates preventive mechanisms to reduce dangerous gas buildup.",
    tags: ["ESP8266", "IoT", "Arduino", "WokWi"],
    type: "gas",
  },
  {
    number: "03",
    title: "Rain Alarm Detector",
    period: "Mar 2024 – May 2024",
    description:
      "A sensor-based rain detection system designed to identify rainfall and immediately trigger an alert through electronic circuitry.",
    tags: ["Sensors", "Electronics", "Hardware"],
    type: "rain",
  },
];

const experiences = [
  {
    year: "2024",
    title: "Adobe Career Academy",
    text: "Selected among the top 300 students nationwide for a technical development and career preparation program.",
  },
  {
    year: "2024",
    title: "Industrial IoT with Cloud",
    text: "Built practical IoT knowledge through MIT App Inventor, Firebase, Arduino, and cloud-connected applications.",
  },
  {
    year: "2025",
    title: "Accenture Project Management",
    text: "Explored project planning, stakeholder communication, risk analysis, and project lifecycle management.",
  },
  {
    year: "2025",
    title: "Deloitte Data Analytics",
    text: "Worked with data cleaning, analysis, visualization, and communicating business insights.",
  },
];

const journey = [
  {
    number: "01",
    title: "Engineering Foundation",
    text: "Started with Electronics & Communication Engineering and built strong analytical and technical fundamentals.",
  },
  {
    number: "02",
    title: "Exploring Technology",
    text: "Expanded into programming, data structures, software development, and problem-solving.",
  },
  {
    number: "03",
    title: "Building Projects",
    text: "Applied learning through IoT, AI, computer vision, embedded systems, and automation projects.",
  },
  {
    number: "04",
    title: "Growing Forward",
    text: "Continuing to explore software development, backend technologies, AI, and building meaningful solutions.",
  },
];

const exploring = [
  "Java & Backend Development",
  "AI & Computer Vision",
  "Full-Stack Development",
  "Problem Solving & DSA",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 180;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="portfolio">
      <div className="cursor-glow"></div>

      <div className="noise"></div>

      <div className="background-particles">
        {[...Array(20)].map((_, index) => (
          <span
            className="particle"
            key={index}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* NAVIGATION */}

      <nav className="navbar">
        <a href="#home" className="logo">
          B<span>S</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["about", "skills", "projects", "journey", "experience", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className={
                  activeSection === item ? "active-link" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            )
          )}
        </div>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* HERO */}

      <section id="home" className="hero">
        <div className="hero-grid"></div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="available-badge">
              <span></span>
              Open to opportunities
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Bhavyasree
              <br />
              <span>Naru.</span>
            </h1>

            <div className="hero-role">
              <span>Technology Enthusiast</span>
              <i></i>
              <span>Problem Solver</span>
            </div>

            <p className="hero-description">
              A B.Tech graduate passionate about building technology,
              solving problems, and transforming ideas into meaningful
              digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="btn secondary">
                Let's Connect
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-1"></div>
            <div className="hero-orbit orbit-2"></div>
            <div className="hero-orbit orbit-3"></div>

            <div className="core-glow"></div>

            <div className="monogram">
              <span>B</span>
              <span>S</span>
            </div>

            <div className="tech-node node-java">
              <span>JAVA</span>
            </div>

            <div className="tech-node node-python">
              <span>PYTHON</span>
            </div>

            <div className="tech-node node-ai">
              <span>AI</span>
            </div>

            <div className="tech-node node-iot">
              <span>IOT</span>
            </div>

            <div className="floating-code code-one">
              &lt;/&gt;
            </div>

            <div className="floating-code code-two">
              01
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section reveal">
        <div className="section-number">01</div>

        <div className="section-heading">
          <p className="eyebrow">ABOUT ME</p>
          <h2>
            Curious mind.
            <br />
            <span>Creative approach.</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-quote glass-card">
            <div className="quote-symbol">“</div>

            <p>
              Curious by nature. Creative in thinking. Focused on
              building meaningful technology.
            </p>

            <div className="quote-line"></div>
          </div>

          <div className="about-text">
            <p>
              I am a B.Tech graduate in Electronics and Communication
              Engineering with a <strong>9.48 CGPA</strong>.
            </p>

            <p>
              My interests lie at the intersection of software
              development, artificial intelligence, IoT, and
              problem-solving.
            </p>

            <p>
              Through projects, internships, coding experiences, and
              professional programs, I have explored technologies
              ranging from Java and Python to computer vision,
              cloud-connected IoT, and data analytics.
            </p>

            <div className="mini-stats">
              <div>
                <strong>9.48</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>3+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>Programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section skills-section reveal">
        <div className="section-number">02</div>

        <div className="section-heading">
          <p className="eyebrow">SKILLS</p>
          <h2>
            My digital
            <br />
            <span>toolkit.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card glass-card" key={skill.category}>
              <div className="skill-symbol">{skill.symbol}</div>

              <h3>{skill.category}</h3>

              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="card-glow"></div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section reveal">
        <div className="section-number">03</div>

        <div className="section-heading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h2>
            Ideas into
            <br />
            <span>impact.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card glass-card" key={project.number}>
              <div className={`project-visual ${project.type}`}>
                {project.type === "traffic" && (
                  <>
                    <div className="road horizontal"></div>
                    <div className="road vertical"></div>

                    <div className="car car-a"></div>
                    <div className="car car-b"></div>
                    <div className="car car-c"></div>

                    <div className="traffic-signal">
                      <i></i>
                      <i></i>
                      <i className="active-light"></i>
                    </div>
                  </>
                )}

                {project.type === "gas" && (
                  <>
                    <div className="gas-core">
                      <div className="gas-icon">⌁</div>
                    </div>

                    <div className="pulse pulse-one"></div>
                    <div className="pulse pulse-two"></div>
                    <div className="pulse pulse-three"></div>

                    <div className="sensor-label">
                      DETECTING...
                    </div>
                  </>
                )}

                {project.type === "rain" && (
                  <>
                    <div className="cloud-shape"></div>

                    <div className="rain-lines">
                      {[...Array(8)].map((_, i) => (
                        <span key={i}></span>
                      ))}
                    </div>

                    <div className="alarm-wave"></div>
                  </>
                )}

                <span className="visual-number">
                  {project.number}
                </span>
              </div>

              <div className="project-info">
                <span className="project-period">
                  {project.period}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* JOURNEY */}

      <section id="journey" className="section journey-section reveal">
        <div className="section-number">04</div>

        <div className="section-heading">
          <p className="eyebrow">MY JOURNEY</p>

          <h2>
            Still learning.
            <br />
            <span>Always growing.</span>
          </h2>
        </div>

        <div className="journey-path">
          {journey.map((item) => (
            <article className="journey-card" key={item.number}>
              <div className="journey-number">{item.number}</div>

              <div className="journey-dot"></div>

              <div className="journey-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="section reveal">
        <div className="section-number">05</div>

        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>

          <h2>
            Learning beyond
            <br />
            <span>the classroom.</span>
          </h2>
        </div>

        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <article className="experience-card glass-card" key={experience.title}>
              <span className="experience-index">
                0{index + 1}
              </span>

              <span className="experience-year">
                {experience.year}
              </span>

              <h3>{experience.title}</h3>

              <p>{experience.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPLORING */}

      <section className="section exploring-section reveal">
        <div className="exploring-card">
          <div className="exploring-top">
            <p className="eyebrow">CURRENTLY EXPLORING</p>

            <div className="live-indicator">
              <span></span>
              LEARNING MODE
            </div>
          </div>

          <h2>
            Always curious about
            <br />
            <span>what's next.</span>
          </h2>

          <div className="exploring-list">
            {exploring.map((item, index) => (
              <div key={item} className="exploring-item">
                <span>0{index + 1}</span>
                {item}
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section className="section reveal">
        <div className="section-number">06</div>

        <div className="education-card">
          <p className="eyebrow">EDUCATION</p>

          <h2>Bachelor of Technology</h2>

          <p className="degree">
            Electronics & Communication Engineering
          </p>

          <div className="education-details">
            <div>
              <span>INSTITUTE</span>
              <strong>
                G. Narayanamma Institute of Technology and Science
              </strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>2022 – 2026</strong>
            </div>

            <div>
              <span>CGPA</span>
              <strong className="cgpa">9.48</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="contact-section reveal">
        <div className="contact-grid"></div>

        <p className="eyebrow">LET'S CONNECT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's talk.</span>
        </h2>

        <p className="contact-description">
          Open to opportunities, collaborations, and conversations
          about technology and ideas.
        </p>

        <div className="contact-links">
          <a
            href="mailto:narubhavyasree2005@gmail.com"
            className="contact-link"
          >
            <span>EMAIL</span>
            ↗
          </a>

          <a
            href="https://github.com/Bhavyasree275"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span>GITHUB</span>
            ↗
          </a>

          <a
            href="https://www.linkedin.com/in/bhavya-sree-naru-224809255"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span>LINKEDIN</span>
            ↗
          </a>
        </div>
      </section>

      {showTopButton && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>
      )}

      <footer>
        <span>© 2026 BHAVYASREE NARU</span>

        <span>DESIGNED WITH CURIOSITY ✦</span>
      </footer>
    </main>
  );
}

export default App;