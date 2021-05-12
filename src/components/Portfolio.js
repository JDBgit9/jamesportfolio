import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const dir = "./image";
  return (
    <div>
      <h2>My Portfolio</h2>
      <br />
      <p>These are projects I have created and/or have worked on. Click on images to take you to the application. Have fun but dont forget to come back.</p>
      
      <a href="https://memebate.herokuapp.com/">
        <img src="./image/memebate.png" style={{ width: "45%" }} />
      </a>
      <a href="https://quiet-earth-28574.herokuapp.com/login">
      <img src="./image/memberspage.png" style={{ width: "45%" }} />
      </a>
      <a href="https://jdbgit9.github.io/Weather-App/">
        <img src="./image/weatherapp2.png" style={{ width: "45%" }} />
      </a>  
      <a href="https://damp-journey-73235.herokuapp.com/">
      <img src="./image/fitnesstracker.png" style={{ width: "45%" }} />
      </a>
      <a href="https://notetakermon.herokuapp.com/">
      <img src="./image/notetaker.png" style={{ width: "45%" }} />
      </a>
      <a href="https://aqueous-taiga-71567.herokuapp.com/">
        <img src="./image/brrger.png" style={{ width: "45%" }} />
      </a>
    
      <img src="./image/moviedine2.png" style={{ width: "45%" }} />
      <img src="./image/md8.png" style={{ width: "45%" }} />
      <img src="./image/md10.png" style={{ width: "45%" }} />
       <br />
      
      <div class="column" />
    
      <a />
      <img src="./image/sattelite1.jpeg" style={{ width: "25%" }} />
      <a />
      <img src="./image/sattelite2.jpeg" style={{ width: "25%" }} />
      <a />
      <a href="https://github.com/JDBgit9">
        <img src="./image/github logo1.jpeg" style={{ width: "20%" }} />
      </a>
      <a href={`${dir}/TechRes221.png`}>
        <img src="./image/nerdlook.png" style={{ width: "25%" }} />
        <p>Click on image for Resume</p>
      </a>
    </div>
  );
}

export default Portfolio;
