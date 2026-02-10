
import NavBar from "./Components/NavBar/NavBar.jsx";
import Header from "./Components/Header/Header.jsx";
import Skills from "./Components/Skills/Skill.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  const navLinks = [
    { id: 1, realName: "About", path: "/about" },
    { id: 2, realName: "Skills", path: "/skills" },
    { id: 3, realName: "Projects", path: "/projects" },
    { id: 4, realName: "Contact", path: "/contact" },
  ];

  const projects = [
    { id: 1, image: "/ProjectsImages/digitalClock.png", title: "Digital Clock", button: "View Code",repo: "https://github.com/CodeWithPurnendra/Digital-Clock.git"},
    { id: 2, image: "/ProjectsImages/medicalSurvey.png", title: "Medical Survey", button: "View Code",repo: "https://github.com/CodeWithPurnendra/Medical-survey-form.git"},
    { id: 3, image: "/ProjectsImages/portfolio.png", title: "Portfolio Page", button: "View Code",repo: "https://github.com/CodeWithPurnendra/Portfolio-page.git"},
    { id: 4, image: "/ProjectsImages/tributePage.png", title: " Tribute Page", button: "View Code",repo: "https://github.com/CodeWithPurnendra/Tribute-page.git"},
    { id: 5, image: "/ProjectsImages/weatherApp.png", title: "Weather App", button: "View Code",repo: "https://github.com/CodeWithPurnendra/Wheather-app.git"},
  ];
  return (
    <div>
      <NavBar logo="purnendra" navLinks={navLinks} button="Get in Touch" />
      <Header />
      <section className="skills-section">
        <h3 className="skills">Skills</h3>
        <Skills label="HTML" value={90} max={100} />
        <Skills label="CSS" value={85} max={100} />
        <Skills label="JavaScript" value={80} max={100} />
        <Skills label="React" value={75} max={100} />
      </section>
        <Projects projects={projects} />
        <Footer/>
    </div>
  );
}

export default App;
