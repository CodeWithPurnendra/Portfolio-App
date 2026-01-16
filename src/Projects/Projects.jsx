import "./Projects.css";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Projects({ projects }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 320;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 320;
  };

  return (
    <div className="projects-container">
      <button
        className="nav-btn left"
        onClick={scrollLeft}
        aria-label="Scroll projects left"
      >
        <FaChevronLeft />
      </button>

      <ul className="projects" ref={sliderRef}>
        {projects.map((project) => (
          <li key={project.id} className="project-card">
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
            />

            <div className="project-content">
              <h4>{project.title}</h4>
              <button>{project.button}</button>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="nav-btn right"
        onClick={scrollRight}
        aria-label="Scroll projects right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Projects;
