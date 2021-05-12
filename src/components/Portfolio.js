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
      <a href="https://aqueous-taiga-71567.herokuapp.com/">
        <img src="./image/brrger.png" style={{ width: "60%" }} />
        <p>Click to play The Burger Game</p>
      </a>
      <br />
      <a href="https://jdbgit9.github.io/Weather-App/">
        <img src="./image/weatherapp2.png" style={{ width: "50%" }} />
        <p />
      </a>
      <br />
      <img src="./image/PasswordGen.png" style={{ width: "50%" }} />
      <br />
      <img src="./image/codequiz2.png" style={{ width: "50%" }} />
      <br />
      <img src="./image/moviedine1.png" style={{ width: "50%" }} />
      <img src="./image/moviedine2.png" style={{ width: "50%" }} />
      <img src="./image/moviedine3.png" style={{ width: "50%" }} />
      <img src="./image/moviedine4.png" style={{ width: "50%" }} />
      <img src="./image/moviedine5.png" style={{ width: "50%" }} />
      <img src="./image/moviedine6.png" style={{ width: "50%" }} />
      <img src="./image/moviedine7.png" style={{ width: "50%" }} />
      <img src="./image/md8.png" style={{ width: "50%" }} />
      <img src="./image/md9.png" style={{ width: "50%" }} />
      <img src="./image/md10.png" style={{ width: "50%" }} />
      <img src="./image/md11.png" style={{ width: "50%" }} />
      <br />
      <a href="https://www.youtube.com/watch?v=hSzeb8MQkck&feature=youtu.be">
        <img src="./image/artbook.png" style={{ width: "50%" }} />
      </a>
      <a href="https://quiet-earth-28574.herokuapp.com/">
        <img src="./image/artbook.png" style={{ width: " 50" }} />
      </a>
      <img src="./image/memberspage.png" style={{ width: "30%" }} />
      <a />
      <img src="./image/onepage.png" style={{ width: "45%" }} />
      <a />
      <img src="./image/pageturn.png" style={{ width: "60%" }} />
      <a />
      <div class="column" />
      <img src="./image/JCSBWW.jpeg" style={{ width: "30%" }} />
      <a />
      <img src="./image/sattelite1.jpeg" style={{ width: "30%" }} />
      <a />
      <img src="./image/sattelite2.jpeg" style={{ width: "30%" }} />
      <a />
      <a href="https://github.com/JDBgit9">
        <img src="./image/github logo1.jpeg" style={{ width: "10%" }} />
      </a>
    </div>
  );
}

export default Portfolio;
