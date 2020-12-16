import React from "react";
import Footer from "../Footer";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/Portfolio.css";
import Placeholder from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/orionthemes-placeholder-image.png";

function Portfolio() {
  return (
    <div>
      <div className="container">
        <h1>Portfolio</h1>
        <p>Here are my most recent projcets that I have been working on!</p>
        <div className="card md-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Placeholder} alt="placeholder"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-title">Project Description</p>
                <a
                  className="btn btn-primary"
                  href="google.com"
                  target="_blank"
                >
                  Click Here for Live Application!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card md-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Placeholder} alt="placeholder"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-title">Project Description</p>
                <a
                  className="btn btn-primary"
                  href="google.com"
                  target="_blank"
                >
                  Click Here for Live Application!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card md-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Placeholder} alt="placeholder"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-title">Project Description</p>
                <a
                  className="btn btn-primary"
                  href="google.com"
                  target="_blank"
                >
                  Click Here for Live Application!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
