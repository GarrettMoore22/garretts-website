import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx"
import AboutMe from "./components/aboutme/AboutMe.jsx"
import Work from "./components/work/Work.jsx"
import Projects from "./components/projects/Projects.jsx"

function App() {
  return (
    <HashRouter>
    <Header/>  
      <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route path="/work" component={Work} />
          <Route path="/projects" component={Projects} />
      </Switch>
    </HashRouter>
  );
}

export default App;
