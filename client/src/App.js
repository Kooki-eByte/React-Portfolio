import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/NavBar/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Projects";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
