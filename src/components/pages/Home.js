import React from "react";
import Footer from "../Footer";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/Home.css";
import XJ from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/XJ.jpg";

function Home() {
  return (
    <div>
      <div>
        <img className="background" src={XJ} alt="Background"></img>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Hello, my name is Xavier!</h1>
            <p>
              I am a Front-End Web Developer looking for opportunites to grow
              and create{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col test-shape"></div>
        </div>
        <div className="row">
          <div className="col test-shape"></div>
        </div>
        <div className="row">
          <div className="col test-shape"></div>
        </div>
        <div className="row">
          <div className="col test-shape"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
