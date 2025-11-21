const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React with smooth animations and modern UI. Showcases my projects, skills, and contact details.",
      tech: ["React", "React Bits", "Bootstrap"],
      live: "https://portfolio-rho-mauve-35.vercel.app/",
      github: "https://github.com/yuvraajdubey114-ctrl/Portfolio",
    },
    {
      id: 2,
      title: "E-Commerce Website (React)",
      description:
        "A modern e-commerce platform built with React, Axios, and Redux Toolkit. Connected with a REST API and deployed on Vercel.",
      tech: ["React", "Axios", "Redux Toolkit", "REST API", "Vercel"],
      live: "https://eccomerce-website-red.vercel./",
      github: "https://github.com/kuldeep12309/Eccomerce-Re",
    },
    {
      id: 3,
      title: "REST API with Django + SQLite",
      description:
        "A RESTful API built using Django REST Framework with SQLite database and live hosting.",
      tech: ["Django", "DRF", "SQLite"],
      github: "https://github.com/kuldeep12309/RestApi-sqlli",
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">My Projects</h1>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-lg h-100 border-0">
                <div className="card-body">

                  <h5 className="card-title fw-semibold">{project.title}</h5>

                  <p className="text-muted small">{project.description}</p>

                  <h6 className="fw-bold">Tech Stack:</h6>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge bg-primary">{t}</span>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="btn btn-success btn-sm"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="btn btn-dark btn-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
