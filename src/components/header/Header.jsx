import React from 'react';
import Nav from "../nav/Nav.jsx"
import './Header.css'
import GithubLogo from "../images/GithubLogo.png"
import EmailLogo from "../images/EmailLogo.png"
import Garrett from "../images/Garrett.jpg"

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top__logo">
                    <a href="/#/" className="header-logo">
                        <img className="garrett-picture" src={Garrett}></img>
                    </a>
                </div>
                <div className="header-top__navbar">
                    <div className="header-top__navigation">
                        <Nav/>
                    </div>
                    <hr className="header-top__seperator"/>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-bottom__github">
                    <a href="https://github.com/GarrettMoore22" className="github-logo">
                        <img className="github-logo" src={GithubLogo}></img>
                    </a>
                </div>
                <div className="header-bottom__email">
                    <a href="garrett22smoore@gmail.com" className="github-logo">
                        <img className="github-logo" src={EmailLogo}></img>
                    </a>
                </div>
            </div>
        </div>
    );
  }
  
  export default Header;