import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const dir = "./image";
  return (
    <div>
      <h3>My Portfolio</h3>
      <br />
      <p>Scroll down and click on the images to take you the application for your perusal. Enjoy!</p>
       <hr />
      <h5>The Weather App</h5><p>Check the weather in your area...HTML/CSS/JS</p> 
      <a href="https://jdbgit9.github.io/Weather-App/">
        <img src="./image/weatherapp2.png" style={{ width: "60%" }} />  
        </a>  
        <h5>Password Generator</h5>
        <a href="https://jdbgit9.github.io/Password-Generator/">
          <img src="./image/passwordgen.png" style={{width: "60%" }}/>
          </a>
          <h5>Code Quiz</h5>
          <a href="https://jdbgit9.github.io/Code-Quiz/index.html">
            <img src="./image/codequiz.png" style={{width: "60%"}}/>
          </a>
          <h5>ArtRoom</h5>
      <a href="https://theartroom.herokuapp.com/">
      <img src="./image/memberspage.png" style={{ width: "60%" }} />
      </a>

        <h5>BurgerTime</h5>
        <a href="https://aqueous-taiga-71567.herokuapp.com/">
        <img src="./image/brrger.png" style={{ width: "60%" }} />
      </a>
      <h5>Fitness Tracker</h5>
      <a href="https://jdbgit9.github.io/Workout-Tracker/">
      <img src="./image/fitnesstracker.png" style={{ width: "60%" }} />
      </a> 
      <h5>StreamGrub</h5> 
      <a href="https://jdbgit9.github.io/StreamGrub/">
        <img src="./image/moviedine2.png" style={{ width: "60%" }} /></a>
      <h5>Note Taker</h5>
      <a href="https://jdbgit9.github.io/Note-Taker/">
      <img src="./image/notetaker.png" style={{ width: "60%" }} />
      </a>
       <br />
       <h5>MemeBate</h5>
      <a href="https://memebate.herokuapp.com/">
        <img src="./image/memebate.png" style={{ width: "60%" }} />
      </a>
      <br />
       <br /> 
      <img src="./image/nerdlook.png" style={{ width: "30%" }} />
      <a href="https://github.com/JDBgit9">
        <br />
        <br />
        <img src="./image/github logo1.jpeg" style={{ width: "15%" }} />
        <br/>
        <h6>Check out my Github 👈</h6>
      </a>
      <br/>
      <a className="nav-link" href="/artwork"><h4>Click here to view some of my sketches 👈</h4>
      </a>
      <br/>
          <img src="./image/digitalbadge.png" style={{width: "10%"}} />
      <br/>
      <br/>
     
           <img src="./image/tech-res22.png" className="Resume" alt="Technical Resume" style={{width: "60%"}} />
         <a><a href={`${dir} "/Certificate" `}><h5>Click here to view my certificate 👈</h5>
      </a> 
</a>

    </div>
   
  );
}

export default Portfolio;
