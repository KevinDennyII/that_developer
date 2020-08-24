import React from "react";

function Introduction() {
  return (
    <div>
      <section
        className="colorlib-experience"
        style={{ marginBottom: "0px" }}
        data-section="home"
      >
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-8">
              Thinking of something awesome to display here, but until then...
              <br />
              <div className="mightymouse">
                Mighty Mouse is here to save the daaaaaaaay!
                <br />
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(images/Kevin_as_Mighty_Mouse.jpg)",
                    backgroundSize: "200px 240px",
                    marginBottom: "0px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="divider gradient" contentEditable></hr>
      </section>
    </div>
  );
}

export default Introduction;
