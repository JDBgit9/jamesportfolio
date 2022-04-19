import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const dir = "./image";
  return (
    <div>
      <h3>My Portfolio</h3>
      <br />
      <p>Below you will find some recent projects I have created and/or have worked on. Scroll down and click on the images to take you to that particular application for your perusal. Enjoy, but dont forget to come back here. Resume below.</p>
      
      <a href="https://jdbgit9.github.io/Weather-App/">
        <img src="./image/weatherapp2.png" style={{ width: "60%" }} />
        
      <a href="https://jdbgit9.github.io/StreamGrub/">
        <img src="./image/moviedine2.png" style={{ width: "60%" }} />
        </a>
        <a href="https://aqueous-taiga-71567.herokuapp.com/">
        <img src="./image/brrger.png" style={{ width: "60%" }} />
      </a>
      </a> 
      <a href="https://jdbgit9.github.io/Workout-Tracker/">
      <img src="./image/fitnesstracker.png" style={{ width: "60%" }} />
      </a> 
      <a href="https://memebate.herokuapp.com/">
        <img src="./image/memebate.png" style={{ width: "60%" }} />
      </a>
      <a href="https://quiet-earth-28574.herokuapp.com/login">
      <img src="./image/memberspage.png" style={{ width: "60%" }} />
      </a>
      <a href="https://jdbgit9.github.io/Note-Taker/">
      <img src="./image/notetaker.png" style={{ width: "60%" }} />
      </a>
       <br />
      
      <div class="column" />
     <p>Here is some of my artwork</p>
      <a />
      <img src="./image/sattelite1.jpeg" style={{ width: "60%" }} />
      <a />
      <img src="./image/sattelite2.jpeg" style={{ width: "60%" }} />
      <a />
      <img src="./image/nerdlook.png" style={{ width: "30%" }} />
      <a href="https://github.com/JDBgit9">
        <img src="./image/github logo1.jpeg" style={{ width: "20%" }} />
        <p>Check out my Github ☝</p>
      </a>
      <a href={`${dir}/TechRes221.png`}>
       <p>Click on image below for Resume 👇</p>
      </a>
    </div>
  );
}

export default Portfolio;
