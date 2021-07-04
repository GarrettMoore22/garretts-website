import React from "react";
import "./Work.css"

function Work() {

    return (
        <div className="work">
            <div className="work-container">
                <div className="job-container">
                    <h2 className="job-title">Webmaster - University of Nevada, Reno</h2>
                    <h3 className="job-date">September 2019 - Current</h3>
                    <p className="job-description">
                        Managed and updated four websites for student run publications through the use of HTML, CSS, PHP, 
                        and Javascript languages as well as the Wordpress platform
                    </p>
                </div>
                <div className="job-container">
                    <h2 className="job-title">Engineering Tutor - University of Nevada, Reno</h2>
                    <h3 className="job-date">October 2019 - Current</h3>
                    <p className="job-description">
                        Tutored students in previously completed courses, largely in the Computer Science department
                    </p>
                </div>
                <div className="job-container">
                    <h2 className="job-title">AI Intern - Alacrity AI</h2>
                    <h3 className="job-date">January 2019 - August 2019</h3>
                    <p className="job-description">
                        Helped develop image detection software through the use of convolutional neural networks. 
                        Performed tests on the accuracy of networks, as well as created Python and Bash scripts to 
                        make software behave differently
                    </p>
                </div>
                <div className="job-container">
                    <h2 className="job-title">Merchandising Specialist - Best Buy</h2>
                    <h3 className="job-date">July 2017 - June 2019</h3>
                    <p className="job-description">
                    Worked within a warehouse team, filled orders on a time limit, and interacted with customers
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Work;