import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Project from "./pages/Projects";

function App() {
  return (
    <Router>
      <div>
        {/* TODO make a navv component */}
        <Nav />
        <Switch>
          <Route exact path="/project" component={Project} />
          <Route exact path="/form" component={Form} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
