import { useEffect, useRef, useState } from "react";
import "./Skill.css";

function Skills({ label, value, max }) {
  const percentage = Math.round((value / max) * 100);
  const skillRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={skillRef} className={`skill ${inView ? "in-view" : ""}`}>
      <div className="skill-header">
        <span className="skill-name">{label}</span>
        <span className="skill-percent">{inView ? `${percentage}%` : "0%"}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: inView ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default Skills;
