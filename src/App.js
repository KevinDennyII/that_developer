import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Introduction from "./components/introduction";
import Home from "./components/home";
import About from "./components/about";
import WhatIDo from "./components/whatido";
import Timeline from "./components/timeline";
import Footer from "./components/footer";

const App = () => {
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [myLinks, setMyLinks] = useState([]);

  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/kevindennyii")
      .then((response) => response.json())
      .then((data) => {
        //setName(data.basics.name);
        setEmail(data.basics.email);
        setSummary(data.basics.summary);
        setMyLinks(data.basics.profiles);
      });
  }, []);

  return (
    <Router forceRefresh={true}>
      <div id="colorlib-page" style={{ backgroundColor: "#F4F5F4" }}>
        <div
          id="container-wrap"
          style={{ marginLeft: "5rem", marginRight: "5rem" }}
        >
          <div>
            <section
              className="colorlib-experience"
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                paddingBottom: "0px",
                paddingTop: "0px",
              }}
              data-section="home"
            >
              <Introduction myLinks={myLinks} email={email} />
              <nav style={{ textAlign: "center" }}>
                <NavLink className="menu-link" to="/">
                  Home
                </NavLink>
                <NavLink
                  className="menu-link"
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  className="menu-link"
                  to="/expertise"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  What I Do
                </NavLink>
                <NavLink
                  className="menu-link"
                  to="/experience"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  Experience
                </NavLink>
              </nav>
            </section>
            <hr className="divider gradient" contentEditable />
          </div>
          <Switch>
            {/* use the render attribute to pass props to the route with the */}
            {/* arrow function because this will update the component as opposed to */}
            {/* component={() => <Dashboard isAuthed={true} /> */}
            <Route
              path="/about"
              render={(props) => <About {...props} summary={summary} />}
            />
            <Route path="/expertise" component={WhatIDo} />
            <Route path="/experience" component={Timeline} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
