import React, { useState, useEffect } from "react";
import { get } from "lodash";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import gitConnectedata from "./kevindennyii.gitconnected.json";

import AboutComponent from "./components/AboutComponent/about.component";
import ContactusComponent from "./components/ContactUsComponent/contactus.component";
import ErrorComponent from "./components/ErrorComponent/error.component";
import FooterComponent from "./components/FooterComponent/footer.component";
import HomeComponent from "./components/HomeComponent/home.component";
import IntroductionComponent from "./components/IntroductionComponent/introduction.component";
import SidebarComponent from "./components/SidebarComponent/sidebar.component";
import TimelineComponent from "./components/TimelineComponent/timeline.component";
import WhatIDoComponent from "./components/WhatIDoComponent/whatido..component";
import WorkExperienceComponent from "./components/WorkExperienceComponent/workexperience.component";

interface Basics {
  name: string;
  roles: any[];
  profiles: any[];
}

const App = () => {
  const [basics, setBasics] = useState<Basics>({
    name: '',
    roles: [],
    profiles: []
  });
  const [experience, setExperience] = useState<any[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const data = gitConnectedata as any;
    setBasics(data.basics);
    setExperience(data.work);
  }, []);

  if (!basics) {
    return <div>Loading...</div>;
  }

  return (
    <div id="colorlib-page" style={{ backgroundColor: "#F4F5F4" }}>
      <SidebarComponent
        basics={basics}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div
        id="container-wrap"
        style={{ marginLeft: "5rem", marginRight: "5rem" }}
      >
        <button onClick={toggleSidebar} className="menu-btn">☰</button>
        <IntroductionComponent basics={basics} />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route
            path="/about"
            render={(props) => <AboutComponent {...props} />}
          />
          <Route exact path="/expertise" component={WhatIDoComponent} />
          <Route
            exact
            path="/experience"
            render={(props) => (
              <TimelineComponent {...props} experience={experience as any} />
            )}
          />
          <Route
            exact
            path="/work-experience"
            render={(props) => (
              <WorkExperienceComponent
                {...props}
                experience={experience as any}
              />
            )}
          />
          <Route
            exact
            path="/send-message"
            component={ContactusComponent}
          />
          <Route exact path="/home" component={HomeComponent} />
          <Route component={ErrorComponent} />
        </Switch>
      </div>
      <FooterComponent />
    </div>
  );
};

export default App;
