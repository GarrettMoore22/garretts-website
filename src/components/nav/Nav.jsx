import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import AboutMe from "../aboutme/AboutMe.jsx"
import './Nav.css'

function Nav() {
    return (
    <HashRouter>
        <Switch>
            <Route path="/#/about-me" component={AboutMe} />
            <Route path="/#/resume" component={AboutMe} />
            <Route path="/#/projects" component={AboutMe} />
        </Switch>
        <div className="navbar">
            <a className="navbar-item" href="/#/about-me">About Me</a>
            <a className="navbar-item" href="/#/resume">Resume</a>
            <a className="navbar-item" href="/#/projects">Projects</a>
        </div>
    </HashRouter>
    );
  }
  
  export default Nav;