import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import IntroductionComponent from "./components/IntroductionComponent/introduction.component";
import HomeComponent from "./components/HomeComponent/home.component";
import AboutComponent from "./components/AboutComponent/about.component";
import WhatidoComponent from "./components/WhatIDoComponent/whatido..component";
import TimelineComponent from "./components/TimelineComponent/timeline.component";
import FooterComponent from "./components/FooterComponent/footer.component";

const App = () => {
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [myLinks, setMyLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://gitconnected.com/v1/portfolio/kevindennyii"
      );

      let data = await response.json();
      //setName(result.basics.name);
      setEmail(data.basics.email);
      setSummary(data.basics.summary);
      setMyLinks(data.basics.profiles);
    };
    fetchData().then((error) => console.error(error));
  }, []);

  return (
    <div id="colorlib-page" style={{ backgroundColor: "#F4F5F4" }}>
      <div
        id="container-wrap"
        style={{ marginLeft: "5rem", marginRight: "5rem" }}
      >
        <IntroductionComponent myLinks={myLinks} email={email} />
        {console.log(myLinks)}
        {console.log(email)}
        <Switch>
          {/* use the render attribute to pass props to the route with the */}
          {/* arrow function because this will update the component as opposed to */}
          {/* component={() => <Dashboard isAuthed={true} /> */}
          <Route exact path="/" component={HomeComponent} />
          <Route
            path="/about"
            render={(props) => <AboutComponent {...props} summary={summary} />}
          />
          <Route path="/expertise" component={WhatidoComponent} />
          <Route path="/experience" component={TimelineComponent} />
          <Route path="/home" component={HomeComponent} />
        </Switch>
      </div>
      <FooterComponent />
    </div>
  );
};

export default App;
