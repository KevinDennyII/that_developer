import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="home">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-8">
                Thinking of something awesome to display here, but until then...
                <br />
                Mighty Mouse is here to save the daaaaaaaay!
                <br />
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(images/Mighty-Mouse-768x432.jpg)"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
