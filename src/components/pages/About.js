import React from "react";
import Footer from "../Footer";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/About.css";
import XJ from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/IMG_0509.JPG"

function About() {
  return (
    <div>
      <div>
        <img src={XJ} alt="Xavier"></img>
      </div>
      <div className="container">
        <h3>About Me</h3>
        <p>
          I am a Front End Web Developer with graphic design
          experience focusing in logo creation and branding. Recently, I earned
          a certificate from Columbia Engineering School in Software Development
          to complement my skills as a graphic designer. My technical skills
          include HTML, CSS, JavaScript, React.js, and responsive web design
          with mobile first development. My strengths are being well organized,
          time efficient, creative thinking, and working well in team-oriented
          environments that are task driven. With each project, my aim is to
          create a UI that users find easy to navigate and is appealing to the
          eye with current trends in design. I applied these skills on a recent
          project that allows users to create an account, create tasks, write
          notes, organize a calendar, and manage their time more efficiently.
          I'm excited to leverage my skills as a web developer and a graphic
          designer to build useful and engaging web applications for users.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
