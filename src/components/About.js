import React from "react";
import "./About.css";


// About

function About() {
  return ( 

      <div className="row">
          <div className="col-6">        
            <img
              src="./image/portfolioicon.jpg"
              style={{ width: "100%" }}
              className="main-pic"
              alt="coder"/>
          </div>
            <section>
              <div className="col-6 p-tag">
                <p>
                  {" "}
                  Hi, I'm James and I am a certified Full-Stack Web Developer
                  who is a graduate of the University of Central Florida with a
                  certificate degree in Coding. I have extensive knowledge of
                  HTML, CSS, JavaScript, Bootstrap, Node.js, mySQl, NoSQL,
                  Dbeaver, Mongodb, Sequelize, Yarn, Heroku, express, REACTjs,
                  and more. I am excited to see where this journey will take me
                  and I am honored to be a part of your team.
                </p>
              </div>
            </section>
            <br />
            <br />

   </div>
  );
}

export default About;
