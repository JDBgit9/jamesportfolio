import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
    
      <div className="row">
      <div col-4>
      <h4 className="title-h4">Contact Me</h4>
      </div>
        <div className="col-8">
          <div className="card">
            <form method="post" action="mailto:justiscode@outlook.com">
              <label for="fname" style={{ color: "seashell" }}>
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your first name.."
              />
              <label for="lname" style={{ color: "seashell" }}>
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="country" style={{ color: "seashell" }}>
                Country
              </label>
              <select id="country" name="Country/Region">
                <option value="USA">USA</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="Central America">Central America</option>
                <option value="China">China</option>
                <option value="Europe">Europe</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea</option>
                <option value="Mexico">Mexico</option>
                <option value="Middle East">Middle East</option>
                <option value="North Africa">North Africa</option>
                <option value="Pacific Islands">Pacific Islands</option>
                <option value="Russia">Russia</option>
                <option value="South Africa">South Africa</option>
                <option value="South America">South America</option>
                <option value="UK">UK</option>
              </select>
              <label for="subject" style={{ color: "seashell" }}>
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Send Email" />
            </form>
          </div>
          <br />
          <p className="fllw-msg">Follow me on linkedin</p>

          
          
          <div className="container-fluid bttm-btn">
            <a href="https://www.linkedin.com/in/justiscode/">
              <img className="img-one"
                src="./image/linkedin.jpeg"
                alt="LinkedIn logo"
                style={{ width: "10%" }}
              />
            </a>
            <img className="img-two"
              src="./image/digitalbadge.png"
              alt="GitHub Icon"
              style={{ width: "10%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
