import React from "react";

const Sidebar = ({name, email, myLinks}) => {
  console.log(myLinks)

    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{
                  backgroundImage: "url(images/djkj_djlookup.jpg)",
                  backgroundSize: "150px 150px"
                }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">{name}</a>
              </h1>
              <span className="email">
                <i className="icon-mail"/>{email}
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li><a href="#whatido" data-nav-section="whatido">What I Do?</a></li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://twitter.com/djlookup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kodii/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kevindennyii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://dev.to/that_developer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                      alt="K D II's DEV Profile"
                      height="25"
                      width="25"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/djlookup/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    );
}
export default Sidebar;
