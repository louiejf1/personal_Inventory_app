import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";


export default function NavBar() {
  return (
 
      <Navbar bg="secondary" variant="light">
        <Navbar.Brand href="#home">LF</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"/>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Projects">Project</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Contact/">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

  );
}
