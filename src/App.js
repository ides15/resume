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
                Best-practice oriented software developer interested in building
                large, complex, and cloud-native products and tools. Skilled in
                design, architecture, and agile practices.
              </p>
            </div>
            <div className="columns section">
              <Skills
                skills={[
                  "Golang",
                  "Microservices",
                  "Docker",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  ["Redux", "MobX"],
                  "Node.js",
                  ["Express", "Hapi"],
                  "Messaging",
                  ["NATS", "RabbitMQ"],
                  "Protocol Buffers / GRPC",
                  "Cloud Design Patterns",
                  ["CQRS", "Event Sourcing", "Pub/Sub"],
                  "Linux",
                  "Python",
                  "Flask",
                  "Databases",
                  ["MongoDB", "SQLite", "MySQL"]
                ]}
              />
              <div className="experience column is-gapless">
                <h5 className="subtitle is-5 has-text-weight-bold">
                  Experience
                </h5>
                <Job
                  title="Associate Software Developer"
                  employer="Liberty Mutual Insurance"
                  time="June 2018 - Current"
                  location="Portsmouth, NH"
                  responsibilities={[
                    "Architected and developed micro-service platform to make existing automation system more flexible, available, and performant",
                    [
                      "UI written in TypeScript React / MobX, styled with Bulma",
                      "Backend plumbing / API gateway written in Go, used NATS streaming server for messaging"
                    ],
                    "Integrated AIOps software into existing products to proactively respond to issues without need for human interaction",
                    "Built a system to enable ITSM managers to reduce response times to problem remediation and root cause detection",
                    [
                      "UI written in React / Redux, styled with Blueprint.js",
                      "API written in Python / Flask, persistence with MongoDB"
                    ]
                  ]}
                />
                <Job
                  title="Personal"
                  employer="Self-Employed"
                  time="June 2016 - Current"
                  location="Portsmouth, NH"
                  responsibilities={[
                    "Co-developed 'Kneeded', a large-scale, distributed list creation tool built with micro-services",
                    "Created 'Dinero', a money management tool written in Golang and React",
                    [
                      "Learned TDD with Go, SQLite persistence",
                      "Deployed through a Docker image (users pull image from DockerHub for use)"
                    ],
                    "Built Docker container management UI using React and the Docker Engine API (similar to Kitematic)"
                  ]}
                />
                <Job
                  title="TechStart Intern"
                  employer="Liberty Mutual Insurance"
                  time="May 2017 - August 2017"
                  location="Portsmouth, NH"
                  responsibilities={[
                    "Create a Billing Modeler for phone representatives to see how a policy change would affect the recurring payments",
                    [
                      "Learned how to write an API in Node.js",
                      "Learned how to write frontends in React and vanilla JavaScript"
                    ],
                    "Participated in Liberty Mutual's 'Agile Transformation', learned agile ceremonies and tendencies"
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
