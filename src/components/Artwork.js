import React from 'react';
import "./Artwork.css"; 

function Artwork() {
    return (
        <div className="column">
          <h2>Here is some of my artwork</h2>
          <img src="./image/sattelite1.jpeg" style={{ width: "60%" }} />
          <img src="./image/sattelite2.jpeg" style={{ width: "60%" }} />
        </div>
    )
}

export default Artwork;