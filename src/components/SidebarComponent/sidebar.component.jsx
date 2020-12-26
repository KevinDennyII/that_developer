import React from 'react';

const SidebarComponent = ({ name, email, myLinks }) => (
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
              backgroundImage: 'url(images/Kevin_as_Mighty_Mouse.jpg)',
            }}
          />
          <h1 id="colorlib-logo">
            <a href="index.html">{name}</a>
          </h1>
          <span className="email">
            <i className="icon-mail" />
            {email}
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
              <li>
                <a href="#whatido" data-nav-section="whatido">
                  What I Do?
                </a>
              </li>
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
            {myLinks.map((link) => (
              <li key={link.network.toLowerCase()}>
                <a href={link.url}>
                  {' '}
                  <i
                    className={`icon-social-${link.network.toLowerCase()}`}
                    style={{ fontSize: '25px' }}
                  />
                  {' '}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  </div>
);
export default SidebarComponent;
