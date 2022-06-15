import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const dir = "./image";
  return (
    <div>
      <h3>My Portfolio</h3>
      <br />
    
      <hr />
      <h5>TinDog</h5>
      <a href="https://jdbgit9.github.io/Tin-Dogger/">
        <img
          src="./image/tindog.png"
          alt="tinder for dog app"
          style={{ width: "60%" }}
        />
      </a>
      <h5>The Weather App</h5>
      <p>Check the weather in your area...HTML/CSS/JS</p>
      <a href="https://jdbgit9.github.io/Weather-App/">
        <img
          src="./image/weatherapp2.png"
          alt="weather API page"
          style={{ width: "60%" }}
        />
      </a>
      <h5>Password Generator</h5>
      <a href="https://jdbgit9.github.io/Password-Generator/">
        <img
          src="./image/passwordgen.png"
          alt="password generator"
          style={{ width: "60%" }}
        />
      </a>
      <h5>Code Quiz</h5>
      <a href="https://jdbgit9.github.io/Code-Quiz/index.html">
        <img
          src="./image/codequiz.png"
          alt="codequiz"
          style={{ width: "60%" }}
        />
      </a>
      <h5>Note Taker</h5>
      <a href="https://notes-9.herokuapp.com/">
        <img
          src="./image/notetaker.png"
          alt="note taker"
          style={{ width: "60%" }}
        />
      </a>
      <h5>ArtRoom</h5>
      <a href="https://theartroom.herokuapp.com/">
        <img
          src="./image/memberspage.png"
          alt="members page entrance"
          style={{ width: "60%" }}
        />
      </a>
      <h5>BurgerTime</h5>
      <a href="https://aqueous-taiga-71567.herokuapp.com/">
        <img src="./image/brrger.png" alt="burger" style={{ width: "60%" }} />
      </a>
      <br /> <br />
      <h5>Fitness Tracker</h5>
      <a href="https://jdbgit9.github.io/Workout-Tracker/">
        <img
          src="./image/fitnesstracker.png"
          alt="fitnesstracker"
          style={{ width: "60%" }}
        />
      </a>
      <br />
      <br />
      <h5>StreamGrub</h5>
      <a href="https://jdbgit9.github.io/StreamGrub/">
        <img
          src="./image/moviedine2.png"
          alt="StreamGrug"
          style={{ width: "60%" }}
        />
      </a>
      <br />
      <br />
      <h5>MemeBate</h5>
      <a href="https://memebate.herokuapp.com/">
        <img
          src="./image/memebate.png"
          alt="MemeBate"
          style={{ width: "60%" }}
        />
      </a>
      <br />
      <br />
      <img src={`${dir}/techres22.png`} alt="Resume" style={{ width: "60%" }} />
      <br />
      <br />
      <img src="./image/nerdlook.png" alt="headshot" style={{ width: "30%" }} />
      <a href="https://github.com/JDBgit9">
        <br />
        <br />
        <img
          src="./image/github logo1.jpeg"
          alt="Github"
          style={{ width: "15%" }}
        />
        <br />
        <br />
        <h6>Check out my Github 👈</h6>
      </a>
      <br />
      <br />
      <a className="nav-link" href="/artwork">
        <h4>Click here to view some of my sketches 👈</h4>
      </a>
      <br />
      <br />
      <img
        src="./image/digitalbadge.png"
        alt="coding badge"
        style={{ width: "10%" }}
      />
      <br />
    </div>
  );
}

export default Portfolio;
