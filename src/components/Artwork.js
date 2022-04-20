import React from 'react';
import "./Artwork.css"; 

function Artwork() {
  const dir = "./image";
    return (
        <div>
          <h3>Here is some of my artwork</h3>
          <img src="./image/sattelite1.jpeg" style={{ width: "60%" }} />
          <img src="./image/sattelite2.jpeg" style={{ width: "60%" }} />
        </div>
    );
}

export default Artwork;