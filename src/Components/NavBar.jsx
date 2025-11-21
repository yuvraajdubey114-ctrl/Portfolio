import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  const expand = "md";
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShow = () => setShow(true);

  return (
    <Navbar
      expand={expand}
      bg="dark"
      variant="dark"
      className="shadow-lg"
    >
      <Container fluid>
        
        {/* Brand */}
        <Navbar.Brand className="fw-bold">I Portfolio</Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle 
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={handleShow}
        />

        {/* Offcanvas Menu */}
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          className="bg-dark text-light"
          style={{ width: "60%" }}
        >
          <Offcanvas.Header closeButton className="bg-dark text-light">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="bg-dark">
            <Nav className="ms-auto">

              <Nav.Link
                as={Link}
                to="/"
                onClick={handleClose}
                className="text-light fw-semibold"
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                onClick={handleClose}
                className="text-light fw-semibold"
              >
                About
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/resume"
                onClick={handleClose}
                className="text-light fw-semibold"
              >
                Resume
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/project"
                onClick={handleClose}
                className="text-light fw-semibold"
              >
                Projects
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                onClick={handleClose}
                className="text-light fw-semibold"
              >
                Contact
              </Nav.Link>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default NavBar;
