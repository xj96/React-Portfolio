import React from "react";
import Footer from "../Footer";
import Placeholder from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/orionthemes-placeholder-image.png";

function Portfolio() {
  return (
    <div>
      <div className="container">
        <h1>Portfolio Page</h1>
        <p>Portfolio page content coming soon!</p>
        <div className="card md-3" style={{maxWidth: "100%"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Placeholder} alt="placeholder"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-title">Project Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card md-3" style={{maxWidth: "100%"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Placeholder} alt="placeholder"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-title">Project Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card md-3" style={{maxWidth: "100%"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Placeholder} alt="placeholder"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-title">Project Description</p>
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
