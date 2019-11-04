import React, { Component } from "react";
import "./App.sass";
import Job from "./Job";
import Skills from "./Skills";

class App extends Component {
  render() {
    return (
      <section className="main-section">
        <div className="container">
          <header className="header columns is-gapless level">
            <div className="column left">
              <h1 className="title is-1">John Ide</h1>
              <div className="inline">
                <span className="icon">
                  <i className="fab fa-github" />
                </span>
                <a href="https://github.com/ides15">
                  <p>github.com/ides15</p>
                </a>
              </div>
            </div>
            <div className="column right">
              <p className="has-text-right">
                Dover, NH 03820
                <span className="icon">
                  <i className="fas fa-map-marker-alt" />
                </span>
              </p>
              <p className="has-text-right">
                ide.johnc@gmail.com
                <span className="icon">
                  <i className="fas fa-envelope" />
                </span>
              </p>
              <p className="has-text-right">
                (703) 853-5968
                <span className="icon">
                  <i className="fas fa-phone" />
                </span>
              </p>
            </div>
          </header>
          <div className="main section">
            <div className="summary section">
              <h5 className="subtitle is-5 has-text-weight-bold">Summary</h5>
              <p>
                Software engineer experienced in full stack web development,
                design, and architecture. Interested in learning and using new
                technologies to solve challenging problems.
              </p>
            </div>
            <div className="columns section">
              <Skills
                skills={[
                  "JavaScript / TypeScript",
                  ["React / React Native", "Redux / MobX", "Jest"],
                  "Node.js",
                  ["Express / Hapi / Nest.js"],
                  "Golang",
                  ["Gorilla Mux", "gorm"],
                  "Python",
                  [
                    "Flask",
                    "Pandas / Numpy / Jupyter",
                    "Time-Series Forecasting"
                  ],
                  "CSS / SASS / SCSS",
                  "Docker",
                  "Docker Compose",
                  "CI/CD (Bamboo)",
                  "AWS",
                  "Databases",
                  [
                    "SQLite",
                    "DynamoDB / MongoDB",
                    "MySQL / Aurora",
                    "Redis",
                    "Neo4j"
                  ],
                  "OAuth2 / OIDC",
                  "Protocol Buffers / GRPC",
                  "Hashicorp Vault",
                  "Git",
                  "Vim",
                  "Linux"
                ]}
              />
              <div className="experience column is-gapless">
                <h5 className="subtitle is-5 has-text-weight-bold">
                  Experience
                </h5>
                <Job
                  title="Software Engineer"
                  employer="Liberty Mutual Insurance"
                  time="June 2018 - Current"
                  location="Portsmouth, NH"
                  responsibilities={[
                    "Developed an AIOps solution to provide anomaly detection and forecasting to system-level metrics",
                    [
                      "Python, Time-Series Forecasting (XGBoost, FB Prophet, Keras, SKLearn, etc.)",
                      "Golang, Docker Compose, Grafana, InfluxDB, Telegraf"
                    ],
                    "Built a Telemetry API and dashboard to track external application and service usage",
                    ["Node.js API, DynamoDB"],
                    "Built a UI for tracking mainframe deployments, including importing and exporting Excel sheets",
                    ["React, MobX, Node.js (TypeScript)"],
                    "Lead the creation of a service catalog to better market our team's services to the company",
                    "Created a system for adding new detail to ITSM problem tickets",
                    ["React, Redux, Node.js API, Python (Flask), MongoDB"],
                    "Participated in a hackathon project to connect employees to potential employers within the company",
                    ["Neo4j, Java, Spring Boot"]
                  ]}
                />
                <Job
                  title="TechStart Intern"
                  employer="Liberty Mutual Insurance"
                  time="May 2017 - August 2017"
                  location="Portsmouth, NH"
                  responsibilities={[
                    "Create a Billing Modeler for phone representatives to see how a policy change would affect the recurring payments",
                    ["Learned full-stack web development in JavaScript"],
                    "Participated in Liberty Mutual's 'Agile Transformation', learned agile ceremonies and tendencies"
                  ]}
                />
                <Job
                  title="Personal"
                  employer="Self-Employed"
                  time="Current"
                  location="Portsmouth, NH"
                  responsibilities={[
                    "In the process of obtaining an AWS Solutions Architect Associate certification",
                    "Built a money management tool to practice TDD",
                    ["Golang, SQLite, Docker"],
                    "Built a Docker container management UI similar to Kitematic",
                    ["React, Docker Engine API"]
                  ]}
                />
                <Job
                  title="Residential Computing Manager"
                  employer="Penn State Residential Computing"
                  time="June 2016 - May 2018"
                  location="State College, PA"
                  responsibilities={[
                    "Managed 20-30 employees in Tier 1 IT service desk responsibilities",
                    "Used ServiceNow, a ticketing and IT service management tool"
                  ]}
                />
              </div>
            </div>
            <div className="education">
              <h5 className="subtitle is-5 has-text-weight-bold">Education</h5>
              <div className="columns is-gapless is-mobile level">
                <h5 className="degree column subtitle is-5 is-small">
                  Bachelor of Science: Information Sciences and Technology
                </h5>
                <div className="right column content is-small">
                  <p className="has-text-right">Graduated 2018</p>
                  <p className="has-text-right">University Park, PA</p>
                </div>
              </div>
              <div>
                <p>Minor: Security and Risk Analysis</p>
                <p className="college is-italic">
                  The Pennsylvania State University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
