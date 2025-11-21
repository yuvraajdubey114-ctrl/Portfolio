import React from "react";

const Resume = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <h1 className="text-center mb-5">Resume</h1>

        <div className="card shadow-lg p-4 mb-5">
          {/* Header */}
          <div className="row">
            <div className="col-md-6">
              <h2 className="fw-bold">Ram Dubey</h2>
              <p className="mt-3">
                LinkedIn:{"hhh "}
                <a
                  href="?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>{"hhh "}
                |{" "}
                <a href="" target="_blank">
                  GitHub
                </a>{"hhh "}
                |{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </p>
            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <p>
                <strong>Email:</strong> yuvraajdubey114@gmail.com
              </p>
              <p>
                <strong>Mobile:</strong> +91 6306479926,9236300132
              </p>
            </div>
          </div>

          <hr className="my-4" />

          {/* EDUCATION */}
          <section className="mb-4">
            <h3 className="fw-semibold border-bottom pb-1">EDUCATION</h3>
            <div className="row mt-2">
              <div className="col-sm-6">
                <strong>Bachelor of Commerce (B.Com)</strong>
              </div>
              <div className="col-sm-6 text-sm-end">Final Year</div>
            </div>
          </section>

          {/* SKILLS SUMMARY */}
          <section className="mb-4">
            <h3 className="fw-semibold border-bottom pb-1">SKILLS SUMMARY</h3>
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item">
                <strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+), Python
              </li>
              <li className="list-group-item">
                <strong>Frontend:</strong> React.js, Redux Toolkit, Bootstrap
              </li>
              <li className="list-group-item">
                <strong>Backend:</strong> Django, Django REST Framework
              </li>
              <li className="list-group-item">
                <strong>Database:</strong> MySQL, SQLite
              </li>
              <li className="list-group-item">
                <strong>Tools:</strong> Git, GitHub, Postman, Vercel
              </li>
              <li className="list-group-item">
                <strong>React Hooks:</strong> useState, useEffect, Context API
              </li>
              <li className="list-group-item">
                <strong>Soft Skills:</strong> Communication, Teamwork, Problem Solving
              </li>
            </ul>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="mb-4">
            <h3 className="fw-semibold border-bottom pb-1">WORK EXPERIENCE</h3>
            <div className="mt-3">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="fw-bold">
                    Full Stack Developer (Trainee) — Universal CodeBox
                  </h5>
                </div>
                <div className="col-md-6 text-md-end">April 2024 – Present</div>
              </div>
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">
                  Developed full-stack web applications using React.js and Django REST.
                </li>
                <li className="list-group-item">
                  Created and integrated REST APIs for frontend–backend communication.
                </li>
                <li className="list-group-item">
                  Developed dynamic UI using React Hooks and Bootstrap.
                </li>
                <li className="list-group-item">
                  Managed backend logic with Django ORM and MySQL.
                </li>
                <li className="list-group-item">
                  Used Git & GitHub for source control and Vercel for deployment.
                </li>
                <li className="list-group-item">
                  Tested APIs using Postman for smooth integration.
                </li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-4">
            <h3 className="fw-semibold border-bottom pb-1">PROJECTS</h3>
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item">
                <strong>1. E-Commerce Website (React + Redux Toolkit):</strong> Developed an e-commerce app using React, Redux Toolkit and REST API. Deployed on Vercel.
              </li>
              <li className="list-group-item">
                <strong>2. Portfolio Website (React + Animations):</strong> Built a modern personal portfolio with smooth UI and animations using React.
              </li>
              <li className="list-group-item">
                <strong>3. E-Commerce (React + Django REST + MySQL):</strong> Full-stack project with product APIs, cart system, and MySQL backend.
              </li>
              <li className="list-group-item">
                <strong>4. REST API Project (DRF + MySQL):</strong> Built CRUD APIs using Django REST Framework and MySQL database.
              </li>
            </ul>
          </section>

          {/* CERTIFICATES */}
          <section className="mb-4">
            <h3 className="fw-semibold border-bottom pb-1">CERTIFICATES</h3>
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item">Full Stack Developer Internship – Universal CodeBox</li>
              <li className="list-group-item">Django REST API</li>
              <li className="list-group-item">React + Redux Toolkit Training</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
