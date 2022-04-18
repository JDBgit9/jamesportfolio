import React from 'react';
import "./Home.css";


function Home() {
    return (
        <div>
              <h5>About Me</h5>
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
    <img src="./image/portfolioicon.jpg" style={{width: "100%"}} />
    </div>
    <div className="col-sm-9">
    <p> My name is James and I am a certified Full-Stack Web Developer who is a graduate of the University of Central Florida with a certificate degree in Coding. 
        I have worked on projects that require HTML, CSS, JS, Node.js, mySQl, NoSQL, Dbeaver, Mongodb, Sequelize, Yarn, Heroku, express, REACTjs, and more.
        You can view examples of my work in the portfolio tab on the top right corner of this page. 
    </p>
    <br />
    <p> 
        I am a problem solver, a fast learner, and very professional with strong wit, so I am a blast to be around. I have always been in a creative mind space as my foundation is in the performing arts and want to bring my creativity to the developer industry. I took some web design and new media courses a few years ago and am building my portfolio and gaining more knowledge each day as a developer. I am excited to see where this journey will take me and I am honored to be a part of your team.    
    </p>
    <div className="col-sm-6-center">
    <img src="./image/digitalbadge.png" style={{width: "25%"}} class="center" />
    </div>
    </div>
    </div>
    </div>
        </div>
    )
}

export default Home
