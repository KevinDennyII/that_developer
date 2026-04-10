import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import gitConnectedData from './kevindennyii.gitconnected.json';
import IntroductionComponent from './components/IntroductionComponent/introduction.component';
import HomeComponent from './components/HomeComponent/home.component';
import AboutComponent from './components/AboutComponent/about.component';
import WhatIDoComponent from './components/WhatIDoComponent/whatido.component';
import WorkExperienceComponent from './components/WorkExperienceComponent/workexperience.component';
import ContactusComponent from './components/ContactUsComponent/contactus.component';
import FooterComponent from './components/FooterComponent/footer.component';
import './App.css';

function App() {
  const { basics, work } = gitConnectedData;

  return (
    <Router>
      <div id="colorlib-page">
        <IntroductionComponent basics={basics} />
        <div id="container-wrap">
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/expertise" component={WhatIDoComponent} />
            <Route
              path="/experience"
              render={() => <WorkExperienceComponent experience={work} />}
            />
            <Route path="/contact" component={ContactusComponent} />
          </Switch>
          <FooterComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
