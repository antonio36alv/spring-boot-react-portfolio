import React from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { HashRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
      <div>
        <Header /> 
    <HashRouter basename="/">
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={About} />
          {/* mabye go back to / */}
        </Switch>
    </HashRouter>
      <Footer />
      </div>
  );
}

export default App;