import "./App.scss";
import React from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import Gallery from "./pages/Gallery/Gallery";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NotFound from "../src/components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/profile" component={Profile} />
        <Route path="/:id" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;