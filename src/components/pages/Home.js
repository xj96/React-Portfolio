import React from "react";
import Footer from "../Footer";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/Home.css";
import XJ from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/XJ.jpg";

function Home() {
  return (
    <div>
      <div className="background">
        <img src={XJ} alt="Background"></img>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Home Page</h1>
            <p>Home page information coming soon!</p>
          </div>
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
