import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/dashboard">
            <img src={logo} alt="logo" width="50px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-md-0 mt-2">
            <Link className="nav-links mt-md-0 my-2" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-links mt-md-0 my-2" to="/tickets">
              Tickets
            </Link>
            <Link className="nav-links mt-md-0 my-2" to="#">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
