import React, { useState, useEffect } from "react";
import "./App.css";
// import Sidebar from "./components/sidebar";
// import Projects from "./components/projects";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Footer from "./components/footer";

const App = () => {
  //const [name, setName] = useState("");
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
    <div id="colorlib-page" style={{ backgroundColor: "#F4F5F4" }}>
      <div
        id="container-wrap"
        style={{ marginLeft: "5rem", marginRight: "5rem" }}
      >
        <Introduction myLinks={myLinks} email={email} />
        <About summary={summary} />
        <Timeline />
        {/*<Projects />*/}
      </div>
      <Footer />
    </div>
  );
};

export default App;
