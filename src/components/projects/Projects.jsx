import React from 'react';
import "./Projects.css"
import SnowPass from "../images/SnowPass.jpg"
import SpaceAge from "../images/SpaceAge.png"

function Projects() {
    return (
        <div className="projects">
            <div className="projects-container">
                <div className="project-container">
                    <h2 className="project-title">Space Age</h2>
                    <p className="project-description">
                        <img src={SnowPass} className="project-image" alt="SnowPass"></img>
                        Manage and update four websites for student run publications through the use of HTML, CSS, PHP, 
                        and Javascript languages and the Wordpress platform.
                    </p>
                </div>
                <div className="project-container">
                    <h2 className="project-title">SnowPass</h2>
                    <p className="project-description">
                        <img src={SpaceAge} className="project-image" alt="Spaceage"></img>
                        Tutor students in previously completed courses, largely in the Computer Science department.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Projects;