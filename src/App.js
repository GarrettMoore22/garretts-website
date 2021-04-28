import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx"

function App() {
  return (
    <HashRouter>
      <Header/>
    </HashRouter>
  );
}

export default App;
