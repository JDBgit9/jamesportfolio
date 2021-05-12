import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const dir = "./image";
  return (
    <div>
      <h2>Portfolio</h2>
      <a href={`${dir}/TechRes221.png`}>
        <img src="./image/nerdlook.png" style={{ width: "20%" }} />
        <p>Click on image for Resume</p>
      </a>
      <br />
      <img src="./image/memberspage.png" style={{ width: "40%" }} />
      <a href="https://quiet-earth-28574.herokuapp.com/">
        <img src="./image/artbook.png" style={{ width: "40%" }} />
      </a>
     
      <a href="https://aqueous-taiga-71567.herokuapp.com/">
        <img src="./image/brrger.png" style={{ width: "40%" }} />
        <p>Click to play The Burger Game</p>
      </a>
      <br />
      <a href="https://jdbgit9.github.io/Weather-App/">
        <img src="./image/weatherapp2.pn" style={{ width: "40%" }} />
        <p />
      </a>
       
      <a href="https://damp-journey-73235.herokuapp.com/">
        <img src="./image/fitnesstracker.png" style={{ width: " 40" }} />
        Hello
      </a>
      <br />
      <img src="./image/PasswordGen.png" style={{ width: "50%" }} />
      <br />
      <img src="./image/codequiz2.png" style={{ width: "50%" }} />
      <br /> 
      <img src="./image/moviedine2.png" style={{ width: "50%" }} />
      <img src="./image/md8.png" style={{ width: "50%" }} />
      <img src="./image/md10.png" style={{ width: "50%" }} />
       <br />
      
      <div class="column" />
    
      <a />
      <img src="./image/sattelite1.jpeg" style={{ width: "50%" }} />
      <a />
      <img src="./image/sattelite2.jpeg" style={{ width: "50%" }} />
      <a />
      <a href="https://github.com/JDBgit9">
        <img src="./image/github logo1.jpeg" style={{ width: "20%" }} />
        <img src="./image/JCSBWW.jpeg" style={{ width: "50%" }} />
      </a>
    </div>
  );
}

export default Portfolio;
