import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello! I'm <span className="highlighted-text">Manisha</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "FrontEnd Developer 😎",
                    1200,
                    "A Human Being 🤣",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <p class="profile-details-tagline">
              Knack of building applications with front end and backend
              operations
            </p>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="ehizcv.pdf" download="ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
