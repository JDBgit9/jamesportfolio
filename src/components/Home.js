import React from 'react';
import "./Home.css";


function Home() {
    return (
        <div>
              <h3>About Me</h3>
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
    <img src="./image/headshot2.png" style={{width: "100%"}} />
    </div>
    <div className="col-sm-9">
    <p> Welcome you to my digital portfolio. My name is James and I am a certified Full-Stack Web Developer who is a graduate of the University of Central Florida's Coding BootCamp program. 
        I have worked on projects that require HTML, CSS, JS, Node.js, mySQl, NoSQL, Dbeaver, Mongodb, Sequelize, Heroku, express, REACTjs, and more. You can view some examples of my work in the portfolio tab on the top right corner of this page. You will also find some links to the virtual demo of some applications that I created as well.
   </p>
    <br />
    <p>I grew up in Jacksonville, Florida and attended Douglas Anderson School Of the Arts, one of the nation's top Arts high schools to date. I am also an author with a new book titled "HisStory" to be released early 2021. I have been singing and performing on the Broadway stage and have always been very engaging with my audiences and will do the same in this new arena. 
        I have always been in a creative mind space as my foundation is in the performing arts and want to bring my creativity to the developer industry. I took some web design and new media courses a few years ago and am building my portfolio and gaining more knowledge each day as a developer. I am excited to see where this journey will take me and I am honored to be a part of your team.    
    </p>
    <div className="col-sm-4">
    <img src="./image/digitalbadge.png" style={{width: "50%"}} />
    </div>
    </div>
    </div>
    </div>
        </div>
    )
}

export default Home
