import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="skills column is-gapless is-narrow">
      <h5 className="subtitle is-5 has-text-weight-bold">Skills</h5>
      <ul>
        {skills.map(s => {
          if (typeof s === "string") return <li key={s}>{s}</li>;
          else
            return s.map(sub => (
              <li className="tabbed" key={sub}>
                {sub}
              </li>
            ));
        })}
      </ul>
    </div>
  );
};

export default Skills;
