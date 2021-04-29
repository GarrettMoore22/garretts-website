import React from "react";
import "./Work.css"

function Work() {

    return (
        <div className="work">
            <div className="work-container">
                <div className="job-container">
                    <h2 className="job-title">Webmaster - University of Nevada, Reno</h2>
                    <h3 className="job-date">July 2020 - Current</h3>
                    <p className="job-description">
                        Manage and update four websites for student run publications through the use of HTML, CSS, PHP, 
                        and Javascript languages and the Wordpress platform.
                    </p>
                </div>
                <div className="job-container">
                    <h2 className="job-title">Engineering Tutor - University of Nevada, Reno</h2>
                    <h3 className="job-date">July 2020 - Current</h3>
                    <p className="job-description">
                        Tutor students in previously completed courses, largely in the Computer Science department.
                    </p>
                </div>
                <div className="job-container">
                    <h2 className="job-title">AI Intern - Alacrity AI</h2>
                    <h3 className="job-date">July 2020 - Current</h3>
                    <p className="job-description">
                        Helped develop image detection software through the use of convolutional neural networks. 
                        Performed tests on the accuracy of networks, as well as created Python and Bash scripts to 
                        make software behave differently.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Work;