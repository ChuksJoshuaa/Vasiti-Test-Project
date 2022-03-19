import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, End } from "./components";
import { Home, Testimonial, Error, About, Contact } from "./pages";
import AOS from "aos";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 0,
      offset: 120,
      easing: "ease",
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/testimonial">
          <Testimonial />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* <Route exact path="/blogs/:slug" children={<SingleBlog />} /> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <End />
    </Router>
  );
}

export default App;
