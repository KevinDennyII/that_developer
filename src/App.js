import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import AboutComponent from './components/AboutComponent/about.component';
import ContactusComponent from './components/ContactUsComponent/contactus.component';
import FooterComponent from './components/FooterComponent/footer.component';
import HomeComponent from './components/HomeComponent/home.component';
import IntroductionComponent from './components/IntroductionComponent/introduction.component';
import TimelineComponent from './components/TimelineComponent/timeline.component';
import WhatidoComponent from './components/WhatIDoComponent/whatido..component';
import WorkExperienceComponent from './components/WorkExperienceComponent/workexperience.component';

const App = () => {
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [myLinks, setMyLinks] = useState([]);
  const [experience, setExperience] = useState([]);

  // I need to grab the api data once this app has been loaded
  useEffect(() => {
    // removing "callback hell" and using async/await
    const fetchData = async () => {
      // grabbing my response from the api call with fetch()
      const response = await fetch(
        'https://gitconnected.com/v1/portfolio/kevindennyii',
      );
      // converting response to json
      const data = await response.json();
      // storing the data from my components in state
      setEmail(get(data.basics, 'email'));
      setSummary(get(data.basics, 'summary'));
      setMyLinks(get(data.basics, 'profiles'));
      setExperience(data.work);
    };

    fetchData().then((error) => console.error(error));
  }, []);

  return (
    <div id="colorlib-page" style={{ backgroundColor: '#F4F5F4' }}>
      <div
        id="container-wrap"
        style={{ marginLeft: '5rem', marginRight: '5rem' }}
      >
        <IntroductionComponent myLinks={myLinks} email={email} />
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
          <Route
            path="/experience"
            render={(props) => (
              <TimelineComponent {...props} experience={experience} />
            )}
          />
          <Route
            path="/work-experience"
            render={(props) => (
              <WorkExperienceComponent {...props} experience={experience} />
            )}
          />
          <Route path="/send-message" component={ContactusComponent} />
          <Route path="/home" component={HomeComponent} />
        </Switch>
      </div>
      <FooterComponent />
    </div>
  );
};

export default App;
