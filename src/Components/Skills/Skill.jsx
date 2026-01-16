import "./Skill.css";

function Skills({ label, value, max }) {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="skill">
      <div className="skill-header">
        <span className="skill-name">{label}</span>
        <span className="skill-percent">{percentage}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Skills;
