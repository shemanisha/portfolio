import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="container profile-parent">
        <div className="row profile-details">
          <div className="col-md-7 col-xs-12">
            <div className="icons">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
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
                      "Human Being 😜",
                      1000,
                    ]}
                  />
                </h1>
              </span>
              <p className="profile-details-tagline">
                Knack of building applications with front end and backend
                operations
              </p>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">Hire Me</button>
              <a href="ManishaShete.docx" download="ManishaShete.docx">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="col-md-5 col-xs-12">
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
