import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// styles
import "./App.scss";

//components
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import TeamPage from "./Pages/TeamPage";
import JoinUsPage from "./Pages/JoinUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import NavBar from "./Components/NavBar";
import PortfolioPage from "./Pages/PortfolioPage";
import Form from "./Components/Form";

//animation on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import Error from "./Pages/Error";
Aos.init();

//function
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/work" exact>
            <WorkPage />
          </Route>
          <Route path="/work/:id">
            <PortfolioPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/service">
            <ServicePage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/join">
            <JoinUsPage />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/contact">
            <ContactUsPage />
          </Route>
          <Route>
            <Error path="*" />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
