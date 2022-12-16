import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Link } from "react-router-dom";

export default function MainNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="main-nav sticky-top navbar-dark" >
          <Container>
            <Navbar.Brand className="text-white text-" href="/">jcaole</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                </Nav>
                <Nav className="me-auto">
                <Nav.Link className="text-white" href="/">Home</Nav.Link>
                <Nav.Link className="text-white" href="about">About</Nav.Link>
                <Nav.Link className="text-white" href="porfolio">Portfolio</Nav.Link>
                <Nav.Link className="text-white" href="resume">Resume</Nav.Link>
                <Nav.Link className="text-white" href="contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="text-white" href="#deets">insert linkedIn here</Nav.Link>
                {/* <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
