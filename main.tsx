import { createRoot } from "react-dom/client";
import { resumeData } from "./data";
import "./tailwind.css";

type Resume = typeof resumeData;

const Resume = ({ data }: { data: Resume }) => {
  return (
    <div className="printout border border-transparent mx-auto p-4 pt-2">
      <div className="flex">
        <div className="flex flex-col flex-grow justify-center">
          <h1 className="text-4xl text-left font-bold">{data.name}</h1>
          <div className="flex items-center">
            {data.links.map((link, i) => (
              <>
                <i
                  className={`fab fa-${link.icon} text-gray-700 ${i > 0 ? "ml-5 " : ""}mr-1.5`}
                />
                <a
                  href={link.url}
                  target="_blank"
                  className="text-sm text-blue-600 hover:text-blue-400"
                  rel="noreferrer"
                >
                  {link.display}
                </a>
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col leading-tight mt-2">
          <div className="flex items-center justify-end">
            <p className="text-sm text-right">{data.location}</p>
            <i className="fas fa-location-dot fa-fw text-gray-700 ml-2" />
          </div>
          <div className="flex items-center justify-end">
            <p className="text-sm text-right">{data.email}</p>
            <i className="fas fa-envelope fa-fw text-gray-700 ml-2" />
          </div>
          <div className="flex items-center justify-end">
            <p className="text-sm text-right">{data.phone}</p>
            <i className="fas fa-phone fa-fw text-gray-700 ml-2" />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-lg font-bold">Summary</p>
        <p className="text-sm mt-2">{data.summary}</p>
      </div>

      <div className="mt-3">
        <p className="text-lg font-bold">Skills</p>
        <div className="flex mt-2">
          {data.skills.map((skill) => (
            <div key={skill.category} className="flex-auto">
              <p className="text-sm font-bold">{skill.category}</p>
              <ul className="mt-1">
                {skill.items.map((item) => (
                  <p key={item} className="text-xs">
                    {item}
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <p className="text-lg font-bold">Experience</p>
        {data.experience.map((exp, i) => (
          <div key={exp.company} className={i === 0 ? "mt-2" : "mt-3"}>
            <div className="flex mt-1 justify-between">
              <div className="flex items-center">
                <img className="w-10 h-10 mr-3" src={exp.logo} alt="" />
                <div className="flex-column">
                  <p className="font-semibold">{exp.title}</p>
                  <p className="text-sm">{exp.company}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-right">{exp.duration}</p>
                <p className="text-xs text-right">{exp.location}</p>
              </div>
            </div>
            <div className="mt-1">
              <ul>
                {exp.bullets.map((bullet) =>
                  typeof bullet === "string" ? (
                    <li key={bullet} className="text-sm">
                      {bullet}
                    </li>
                  ) : (
                    <li key={bullet.text} className="text-sm">
                      {bullet.text}
                      <ul className="ml-4">
                        {bullet.subitems.map((sub) => (
                          <li key={sub} className="text-sm">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="mt-3 mr-12">
          <p className="text-lg font-bold">Education</p>
          {data.education.map((edu) => (
            <div key={edu.school} className="flex mt-2 justify-between">
              <div>
                <p className="font-semibold">{edu.degree}</p>
                {edu.minor && <p className="text-sm">{edu.minor}</p>}
                <div className="flex justify-between">
                  <p className="text-sm italic">{edu.school}</p>
                  <p className="text-xs">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.certifications && (
          <div className="mt-3 flex-auto">
            <p className="text-lg font-bold">Certifications</p>
            <div className="mt-2">
              {data.certifications.map((cert) => (
                <div key={cert.name} className="flex justify-between">
                  <p className="text-sm">{cert.name}</p>
                  <p className="text-xs">{cert.dates}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Resume data={resumeData} />);
}
