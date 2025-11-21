import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Footer = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Thanks for visiting!",
        "Let's build something awesome.",
        "Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <footer className="pt-5 pb-4 mt-5 border-top shadow">
      <div className="container text-center">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <h3 className="fw-semibold text-dark">
              <span ref={typedRef}></span>
            </h3>
          </div>
        </div>

        <div className="row justify-content-center mb-3">
          <div className="col-auto">
            <a
              href="https://github.com/yuvraajdubey114-ctrl/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm mx-2 fw-semibold"
            >
              GitHub
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm mx-2 fw-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <hr className="border-secondary opacity-25" />

        <p className="mb-0 small text-muted">
          &copy; {new Date().getFullYear()}{" "}
          <strong className="text-dark">Ram Dwivedi</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
