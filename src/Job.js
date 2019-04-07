import React from "react";

const Job = ({ title, employer, time, location, responsibilities }) => (
  <div className="job">
    <div className="columns is-gapless is-mobile level">
      <div className="column left">
        <h5 className="job-title subtitle is-5">{title}</h5>
        <p className="employer is-italic">{employer}</p>
      </div>
      <div className="column right content is-small">
        <p className="has-text-right">{time}</p>
        <p className="has-text-right">{location}</p>
      </div>
    </div>
    <div className="responsibilities">
      <ul>
        {responsibilities.map(r => {
          if (typeof r === "string") return <li key={r}>{r}</li>;
          else
            return r.map(sub => (
              <li className="tabbed" key={sub}>
                {sub}
              </li>
            ));
        })}
      </ul>
    </div>
  </div>
);

export default Job;
