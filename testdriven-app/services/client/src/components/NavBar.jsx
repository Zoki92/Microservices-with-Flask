import React from "react";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = (props) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link eventKey={1}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link eventKey={2}>About</Nav.Link>
          </LinkContainer>
          {props.isAuthenticated && (
            <LinkContainer to="/status">
              <Nav.Link eventKey={3}>User Status</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        <Nav>
          {!props.isAuthenticated && (
            <LinkContainer to="/register">
              <Nav.Link eventKey={1}>Register</Nav.Link>
            </LinkContainer>
          )}
          {!props.isAuthenticated && (
            <LinkContainer to="/login">
              <Nav.Link eventKey={2}>Log In</Nav.Link>
            </LinkContainer>
          )}
          {props.isAuthenticated && (
            <LinkContainer to="/logout">
              <Nav.Link eventKey={3}>Log Out</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
