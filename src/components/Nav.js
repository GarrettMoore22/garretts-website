import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                Garrett Moore
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about-me">About Me</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/previous-projects">Previous Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;