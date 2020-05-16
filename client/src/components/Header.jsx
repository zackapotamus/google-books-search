import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Google Books Search
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/search">
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/saved">
            <Nav.Link>Saved</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Jumbotron fluid>
        <Container>
          <h1>Google Books Search</h1>
          <p>
            Search for and Save Books of Interest.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Header;
