import './App.css';
import NavMenu from './components/Nav.js'
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from './components/AboutMe.js'
import { HashRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavMenu />
        <Switch>
                    <Route path="/about-me" component={AboutMe} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
