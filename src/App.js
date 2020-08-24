import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [summary, setSummary] = useState('')
  const [myLinks, setMyLinks] = useState([])

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/kevindennyii')
      .then((response) => response.json())
      .then((data) => {
        setName(data.basics.name)
        setEmail(data.basics.email)
        setSummary(data.basics.summary)
        console.log(data.basics.profiles)
        setMyLinks(data.basics.profiles)
      });
  }, []);

    console.log(myLinks)
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar name={name} email={email} myLinks={myLinks}/>
          <div id="colorlib-main">
            <Introduction/>
            <About summary={summary}/>
            <Timeline/>
          </div>
        </div>
      </div>
    );
}

export default App;
