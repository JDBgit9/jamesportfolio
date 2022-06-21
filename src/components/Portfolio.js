import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const dir = "./image";
  return (
    <div className="row">
      <div className="col-4 one-col">
        <a href="https://jdbgit9.github.io/Tin-Dogger/">
          <img
            src="./image/tindog.png"
            alt="tinder for dog app"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />

        <a href="https://pic-search.herokuapp.com/">
          <img src="./image/cats.png" alt="cats" style={{ width: "80%" }} />
        </a>
        <br />
        <br />
        <a href="https://jdbgit9.github.io/Weather-App/">
          <img
            src="./image/weatherapp2.png"
            alt="weather API page"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />
        <a href="https://notes-9.herokuapp.com/">
          <img
            src="./image/notetaker.png"
            alt="note taker"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />

      </div>

      <div className="col-4 two-col">
        <a href="https://jdbgit9.github.io/Password-Generator/">
          <img
            src="./image/passwordgen.png"
            alt="password generator"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />
        <a href="https://jdbgit9.github.io/Code-Quiz/index.html">
          <img
            src="./image/codequiz.png"
            alt="codequiz"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />
        <a href="https://6278331b098bd11537dbb012--countdown-timer-solutions.netlify.app/">
          <img
            src="./image/countdown.png"
            alt="countdown API page"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />
    
        <a href="https://work-0ut.herokuapp.com/">
          <img
            src="./image/fitnesstracker.png"
            alt="fitnesstracker"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />
      </div>

      <div className="col-4 three-clm">
        <a href="https://shimmering-sopapillas-3df067.netlify.app/">
          <img
            src="./image/shortly.png"
            alt="landing page"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />

        <a href="https://jdbgit9.github.io/StreamGrub/">
          <img
            src="./image/moviedine2.png"
            alt="StreamGrug"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />

        <a href="https://theartroom.herokuapp.com/">
          <img
            src="./image/memberspage.png"
            alt="members page entrance"
            style={{ width: "80%" }}
          />
        </a>
        <br />
        <br />
        <a href="https://aqueous-taiga-71567.herokuapp.com/">
          <img src="./image/brrger.png" alt="burger" style={{ width: "80%" }} />
        </a>
        <br />
        <br />
        <div />

        <div className="col-lg-4">
          <a href="https://memebate.herokuapp.com/">
            <img
              src="./image/memebate.png"
              alt="MemeBate"
              style={{ width: "65%" }}
            />
          </a>
          <br />
          <br />
      <div />
     <div className="col-md-4">
          <img
            src="./image/nerdlook.png"
            alt="headshot"
            style={{ width: "65%" }}
          />
      </div>
          <a href="https://github.com/JDBgit9"></a>
          <br />
          <br />
        </div>
        <img
          src="./image/github logo1.jpeg"
          alt="Github"
          style={{ width: "10%" }}
        />

        <br />
        <br />
        <img
          src="./image/digitalbadge.png"
          alt="coding badge"
          style={{ width: "15%" }}
        />
      </div>
    </div>
  );
}

export default Portfolio;
