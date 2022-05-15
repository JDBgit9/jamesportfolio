import React from 'react';
import "./Artwork.css"; 

function Artwork() {
  const dir = "./image";
    return (
        <div>
            <p> 
        I am a problem solver, a fast learner, and very professional with strong wit, so I am a blast to be around. I have always been in a creative mind space as my foundation is in the performing arts and want to bring my creativity to the developer industry. I took some web design and new media courses a few years ago and am building my portfolio and gaining more knowledge each day as a developer.     
    </p>
    <br />
          <br />
          <h3>Here is some of my hand drawn sketches</h3>
          <br />
          <br />
          <hr className="lineBreak" />
          <img src="./image/josh.jpg" alt="Josh" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/facialemotes.jpg" alt="facial emotions" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/ballsketch.jpg" alt="Ball" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/bottlesketch.jpg" alt="Bottle" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/virtualpark.jpg" alt="theme park map" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/virtualentry.jpg" alt="theme park city view" style={{width: "60%"}} />
          <br />
          <br />
          <p>This is the storyboard sketches for MemeBate</p>
          <img src="./image/memebate.jpg" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/memebatedraft.jpg" style={{width: "60%"}} />
          <br />
          <br />
          <p>A new superhero Character I am developing name Sattelight (Working title)</p>
          <img src="./image/sattelite1.jpeg" style={{width: "60%" }} />
          <br />
          <br />
          <img src="./image/sattelite2.jpeg" style={{width: "60%" }} />
          <br />
          <br />
          <img src="./image/satteliteschema.jpg" style={{width: "60%" }} />
          <br />
          <br />
          <p>I like to make up my own maps of new cities, this is Justis City</p>
          <img src="./image/justiscity.jpg" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/sslegendpf2.jpg" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/shiplegend.jpg" style={{width: "60%"}} />
          <br />
          <br />
          <img src="./image/sslegendpf1.jpg" style={{width: "60%"}} />
        </div>
    );
}

export default Artwork;