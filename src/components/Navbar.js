import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">LOOPLAB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className="nav-link cursor"
                to="home-section"
                smooth={true}
                duration={1000}
              >
                Home
              </Link>

              <Link
                className="nav-link cursor"
                to="explore"
                smooth={true}
                duration={1000}
              >
                Explore
              </Link>
              <Link
                className="nav-link cursor"
                to="create"
                smooth={true}
                duration={1000}
              >
                Create
              </Link>
              <Link
                className="nav-link cursor"
                to="share"
                smooth={true}
                duration={1000}
              >
                Share
              </Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
