import React from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "SQLite", "MySQL"],
  },
  {
    category: "State & Routing",
    skills: ["Redux Toolkit", "React Router", "useState", "useEffect"],
  },
  {
    category: "API & Tools",
    skills: ["Axios", "Postman", "RESTful API Development", "Fetch API"],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Deployment",
    skills: ["Vercel", "Render", "Netlify"],
  },
];

const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h1 className="text-center mb-5 fw-bold">My Skills</h1>

        {/* Skill Categories */}
        <div className="row g-4">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h2 className="h5 fw-semibold text-primary mb-3 border-bottom pb-2">
                    {category.category}
                  </h2>
                  <ul className="list-unstyled mt-2 mb-0">
                    {category.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="d-flex justify-content-between align-items-center mb-2"
                      >
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Optional: Add hover effect */}
                  <div className="mt-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
