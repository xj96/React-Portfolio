import React from "react";
import Footer from "../Footer";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/Home.css";
import XJ from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/XJ.jpg";

function Home() {
  return (
    <div>
      <div className="col-flex">
        <img className="background" src={XJ} alt="Background" />
      </div>
      {/* <hr className="section-divider"/> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Hello, my name is Xavier!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              I am a Front-End Web Developer with Graphic Design experience
              looking for entry-level opportunites in software development.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col test-shape-0"></div>
        </div>
        <div className="row">
          <div className="col test-shape-0"></div>
        </div>
        <div className="row">
          <div className="col-flex test-shape-1"></div>
        </div>
        <div className="row">
          <div className="col-flex test-shape-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
