import React from 'react';
import "./Artwork.css"; 

function Artwork() {
  const dir = "./image";
    return (
        <div>
            <p> 
        I am a problem solver, a fast learner, and very professional with strong wit, so I am a blast to be around. I have always been in a creative mind space as my foundation is in the performing arts and want to bring my creativity to the developer industry. I took some web design and new media courses a few years ago and am building my portfolio and gaining more knowledge each day as a developer.     
    </p>
          <h3>Here is some of my hand drawn sketches</h3>
          <img src="./image/ballsketch.jpg" style={{width: "60%"}} />
          <img src="./image/bottlesketch.jpg" style={{width: "60%"}} />
          <img src="./image/virtualpark.jpg" style={{width: "60%"}} />
          <img src="./image/virtualentry.jpg" style={{width: "60%"}} />
          <p>This is the storyboard sketches for MemeBate</p>
          <img src="./image/memebate.jpg" style={{width: "60%"}} />
          <img src="./image/memebatedraft.jpg" style={{width: "60%"}} />
          <img src="./image/sattelite1.jpeg" style={{width: "60%" }} />
          <img src="./image/sattelite2.jpeg" style={{width: "60%" }} />
          <img src="./image/satteliteschema.jpg" style={{width: "60%" }} />
          <img src="./image/justiscity.jpg" style={{width: "60%"}} />
        </div>
    );
}

export default Artwork;