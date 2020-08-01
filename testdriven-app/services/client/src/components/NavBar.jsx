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
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/status">
            <NavItem eventKey={3}>User Status</NavItem>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/register">
            <NavItem eventKey={1}>Register</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem eventKey={2}>Log In</NavItem>
          </LinkContainer>
          <LinkContainer to="/logout">
            <NavItem eventKey={3}>Log Out</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
