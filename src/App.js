import './App.css';
import NavMenu from './components/Nav.js'
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from './components/AboutMe.js'
import Resume from './components/Resume.js'
import Projects from './components/Projects.js'
import MainCarousel from './components/Carousel.js'
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap"
import GarrettPicture from "./images/GarrettPicture.jpg"


function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavMenu />
        <Switch>
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about-me" component={AboutMe} />
                    <Route path="/contact" component={AboutMe} />
        </Switch>
        <Container fluid>
          <Row>
            <MainCarousel />
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
