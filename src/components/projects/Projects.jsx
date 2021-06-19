import React from 'react';
import "./Projects.css"
import SnowPass from "../images/SnowPass.jpg"
import SpaceAge from "../images/SpaceAge.png"
import Ninja from "../images/NinjaGame.png"

function Projects() {
    return (
        <div className="projects">
            <div className="projects-container">
                <div className="project-container">
                    <h2 className="project-title">SnowPass</h2>
                    <p className="project-description">
                        A web application made in React for my Senior Project at the University of Nevada, 
                        Reno in 2021. I primarily designed and implemented the UI, routing, and webcam display, 
                        as well as assisting in styling various components across the site. The goal of the 
                        project is to better inform drivers about road conditions, and to make driving on 
                        winter roads in Nevada and California safer. It does this by providing a user-friendly 
                        interface that displays live footage and weather information for locations along a user’s 
                        chosen path.
                    </p>
                    <a className="github-link" href="https://thesnowpass.com">
                        <p className="github-link">SnowPass</p>
                    </a>
                    <img src={SnowPass} className="project-image" alt="SnowPass"></img>
                </div>
                <div className="project-container">
                    <h2 className="project-title">Space Age</h2>
                    <p className="project-description">
                        A game made as an entry in the 2019 Biggest Little Hackathon for UNR’s ACM chapter, 
                        created with C# in Unity. I created, edited, and formatted all of the graphics and 
                        audio for the project, including writing original music. The goal of the game was 
                        to work together with another person to survive as long as possible flying around 
                        space. One person would pilot the ship, while the other player shot at enemy ships 
                        as well as repaired the ship’s systems. If any system took too much damage, the system 
                        would go offline until it was repaired. 
                    </p>
                    <a className="github-link" href="https://github.com/kylebrain/space-age">
                        <p className="github-link">Github Repository</p>
                    </a>
                    <a href="https://github.com/kylebrain/space-age/releases">
                        <p className="github-link">Download</p>
                    </a>
                    <img src={SpaceAge} className="project-image" alt="Spaceage"></img>
                </div>
                <div className="project-container">
                    <h2 className="project-title">Ninja Apocalypse</h2>
                    <p className="project-description">
                        A game built from scratch using the Ogre engine, made for a final 
                        project in my game engine architecture class. The player faces waves
                        of increasingly stronger enemies, and can only use weapons found throughout
                        the map, each with limited amounts of ammo. I handled all of the visuals as 
                        well as sound design for the game, as well as composed original theme music. 
                    </p>
                    <a className="github-link" href="https://github.com/ErylKenner/Ninja-Apocalypse">
                        <p className="github-link">Github Repository</p>
                    </a>
                    <img src={Ninja} className="project-image" alt="Ninjagame"></img>
                </div>
            </div>
        </div>
    );
  }
  
  export default Projects;