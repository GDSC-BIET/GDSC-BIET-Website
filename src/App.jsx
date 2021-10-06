import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Event from "./pages/Events/Event";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

// App component

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/GDSC-BIET-Website/" exact component={Home} />
        <Route path="/GDSC-BIET-Website/event" exact component={Event} />
        <Route path="/GDSC-BIET-Website/projects" exact component={Projects} />
        <Route path="/GDSC-BIET-Website/team" exact component={Team} />
        <Route path="/GDSC-BIET-Website/contact" exact component={Contact} />
        <Redirect to="/GDSC-BIET-Website" />
      </Switch>
    </>
  );
}
