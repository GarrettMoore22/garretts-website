import React from "react";
import "./ComponentStyle.css"
import { Navbar, Nav } from "react-bootstrap";

function NavMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="customNavbar">
                Garrett Moore
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/resume">Resume</Nav.Link>
                    <Nav.Link href="/#/projects">Previous Projects</Nav.Link>
                    <Nav.Link href="/#/about-me">About Me</Nav.Link>
                    <Nav.Link href="/#/contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;
