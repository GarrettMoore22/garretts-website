import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import AboutMe from "../aboutme/AboutMe.jsx"
import Resume from "../resume/Resume.jsx"
import Projects from "../projects/Projects.jsx"
import './Nav.css'

function Nav() {
    return (
        <div className="navbar">
            <a className="navbar-item" href="/#/about-me">About Me</a>
            <a className="navbar-item" href="/#/resume">Resume</a>
            <a className="navbar-item" href="/#/projects">Projects</a>
        </div>
    );
  }
  
  export default Nav;