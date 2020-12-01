import React from "react";
import Footer from "../Footer";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/Home.css";
import XJ from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/XJ.jpg";
import BG from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/tech-bg.png";

function Home() {
  return (
    <div>
      <div>
        <img className="background" src={BG} alt="Background"></img>
      </div>

      <div className="container">
        <h1>Home Page</h1>
        <p>Home page information coming soon!</p>
        <img src={XJ} alt="Xavier Jackson" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
