import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Project from "./Project";

import RamImage from '../assets/ram.jpg'; 

const Home = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Full-Stack Developer",
        "React + Django Specialist",
        "API Architect",
        "UI/UX Enthusiast",
        "Tech Explorer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div>

      {/* HEADER */}
      <section className="container py-5">
        <div className="row align-items-center justify-content-center">

          {/* LEFT */}
          <motion.div
            className="col-md-6 mb-4 text-center text-md-start"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="fw-bold" style={{ fontFamily: "asif" }}>
              Hi, I'm <span className="text-primary"><span ref={typedEl}></span></span>
            </h1>

            <p className="text-muted mt-3 fs-6">
              I’m a full-stack web developer passionate about building powerful,
              scalable, and elegant web solutions using{" "}
              <span className="fw-semibold">React</span> on the frontend and{" "}
              <span className="fw-semibold text-success">Django</span> on the
              backend. I craft seamless user experiences powered by APIs.
            </p>

            <Link
              to="/resume"
              className="btn btn-primary px-4 mt-3"
            >
              View Resume
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="col-md-6 text-center d-flex flex-column align-items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.img
              src={RamImage}
              alt="Full-Stack Developer"
              className="img-fluid shadow border border-primary"
              style={{ width: "50%", borderRadius: "8px" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />

            <h4 className="mt-3 text-success fst-italic fw-semibold">
              Ram Dwivedi
            </h4>

            <p className="text-muted">
              React, Django, Django Rest, MySQL
            </p>
          </motion.div>

        </div>
      </section>

      <hr />

      {/* ABOUT */}
      <motion.div
        className="container py-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <hr />

      {/* PROJECTS */}
      <motion.div
        className="container py-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Project />
      </motion.div>

      <hr />

      {/* RESUME */}
      <motion.div
        className="container py-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Resume />
      </motion.div>

      <hr />

      {/* CONTACT */}
      <motion.div
        className="container py-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      <hr />
    </div>
  );
};

export default Home;
