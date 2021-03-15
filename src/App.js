import './App.css';
import NavMenu from './components/Nav.js'
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from './components/AboutMe.js'
import { HashRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <Switch>
                    <Route path="/about-me" component={AboutMe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
