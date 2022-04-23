import React from 'react';
import "./Home.css";


function Home() {
    return (
        <div>
              <h4>About Me</h4>
    <div className="wrapper">
        <div className="container-mt-4">
            <div className="row">
                <div className="col-md-9-bg-white">
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
    <div className="row">
    <div className="col-sm-3">
    <img src="./image/portfolioicon.jpg" style={{width: "100%"}} class="mainpic" alt="coder" />
    </div>
    <div className="col-sm-9">
    <p> My name is James and I am a certified Full-Stack Web Developer who is a graduate of the University of Central Florida with a certificate degree in Coding. 
        I have worked on projects that require extensive knowledge of HTML, CSS, JS, Node.js, mySQl, NoSQL, Dbeaver, Mongodb, Sequelize, Yarn, Heroku, express, REACTjs, and more.
        You can view examples of my work in the portfolio tab on the top right corner of this page. I am excited to see where this journey will take me and I am honored to be a part of your team.
    </p>
    <br />
     {/* haven't decided if I want this on the home page or not.  it is on the portfolio and soon to be on the contact page.
     <div className="col-sm-4-left">
     <img src="./image/digitalbadge.png" style={{width: "10%"}} class="left" />
    </div>*/}
    </div>
    </div>
    </div>
        </div>
    )
}

export default Home
