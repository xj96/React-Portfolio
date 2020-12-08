import React from "react";
import Footer from "../Footer";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/Home.css";
import BG from "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/images/Website-Design-Background.png"

function Home() {
  return (
    <div>
      <div className="col-flex">
        <img className="background" src={BG} alt="Background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Hello, my name is Xavier!</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              I am a Front-End Web Developer with a background in Graphic
              Design. Effective at combining creativity and problem solving
              skills to develop user-friendly applications. I have great
              attention to detail and time management skills. I am always ready
              to learn and bring my skills to the table!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col test-shape-0">
            <div className="experience">
              <h4>Experience</h4>
              <p className="job-title">Trainer</p>
              <p className="job-year">2018 - Current</p>
              <p className="job-company">Global Kids Inc.</p>
              <p className="job-location">New York City, NY</p>
              <p className="job-description">
                Worked on a team of 7 to successfully run an afterschool program
                for 90 public school students. Created and ran workshops on
                youth development, SEL, and digital art with an emphasis in
                vector based drawing. Also assisted in teaching students the
                basics of HTML coding.
              </p>
            </div>
            <div className="experience">
              <p className="job-title">Freelance Graphic Designer</p>
              <p className="job-year">2018 - Current</p>
              <p className="job-company">Self-Employed</p>
              <p className="job-location">New York City, NY</p>
              <p className="job-description">
                Designed logos, logo animations, social media banners, and
                illustrations for clients while under pressure to meet
                deadlines.
              </p>
            </div>
            <div className="education">
              <h4>Education</h4>
              <p className="edu-title">
                Software Development Bootcamp Certificate
              </p>
              <p className="edu-year">2020</p>
              <p className="edu-location">
                Columbia University, New York City, NY
              </p>
              <p className="edu-description">
                A 12-week intensive program focused on gaining technical
                programming skills in HTML5, CSS3, Javascript, JQuery,
                Bootstrap, APIs, JSON, AJAX, Node.js, Express.js, React.js,
                MySQL, MongoDB, and CS Fundamentals.
              </p>
              <p className="edu-title">SUNY College of Technology at Canton</p>
              <p className="edu-year">2014 - 2018</p>
              <p className="edu-location">Canton, NY</p>
              <p className="edu-description">
                Bachelor’s Degree in Graphic Design
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="row">
          <div className="col-12">
            <h3>Technical Proficiencies</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
