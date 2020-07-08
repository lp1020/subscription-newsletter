import React, { useState, Component } from "react";



const NewsletterList = ({ component }) => {
  const [toggleActive, setToggleState] = useState(false);
  const [toggleActive2, setToggleState2] = useState(false);
  const [toggleActive3, setToggleState3] = useState(false);
  const [toggleActive4, setToggleState4] = useState(false);

  return (
          <div className="container">

          <div className="row newsletter-row">


          <div className="col-md-3 col-sm-12">
          <img src= "./img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Reverse The Online Gambling Ban</p>
          <p className="newsletter-desc">The MPA comes with three different sizes of foam and silicone tips and a carrying pouch.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
          <div className={`check-area ${toggleActive ? "checked" : ""}`}
     onClick={() => setToggleState(!toggleActive)}
     />
          </div>
          </div>


          <div className="row newsletter-row">
            <div className="col-md-3 col-sm-12">
          <img src="./img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Successful Myspace Profile</p>
          <p className="newsletter-desc">All users on MySpace will know that there are millions of people out there.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
              <div className={`check-area ${toggleActive2 ? "checked" : ""}`}
     onClick={() => setToggleState2(!toggleActive2)}
     />
          </div>
          </div>

          <div className="row newsletter-row">
            <div className="col-md-3 col-sm-12">
          <img src="./img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Home Audio Recording For Everyone</p>
          <p className="newsletter-desc">The number of friends and acquaintances will grow in a large number. This is what you should be looking for.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
              <div className={`check-area ${toggleActive3 ? "checked" : ""}`}
     onClick={() => setToggleState3(!toggleActive3)}
     />
          </div>
          </div>

          <div className="row newsletter-row">
            <div className="col-md-3 col-sm-12">
          <img src="./img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Buying Used Electronic Test Equipment</p>
          <p className="newsletter-desc">People after all will make friends after reading about you. If you have an ugly profile, there is no way th</p>
          </div>
          <div className="col-lg-2 col-sm-12">
              <div className={`check-area ${toggleActive4 ? "checked" : ""}`}
     onClick={() => setToggleState4(!toggleActive4)}
     />
          </div>
          </div>
          </div>
          );
    }

export default NewsletterList;
