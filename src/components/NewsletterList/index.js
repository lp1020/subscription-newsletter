import React, { useState, Component } from "react";

const [toggleState, setToggleState] = useState("off");
 function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

class NewsletterList extends Component {



    render() {
        return (
          <div className="container">

          <div className="row newsletter-row">


          <div className="col-md-3 col-sm-12">
          <img src="images/img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Reverse The Online Gambling Ban</p>
          <p className="newsletter-desc">The MPA comes with three different sizes of foam and silicone tips and a carrying pouch.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
          <div className={`switch ${toggleState}`} onClick={toggle} />
          </div>
          </div>


          <div className="row newsletter-row">
            <div className="col-md-3 col-sm-12">
          <img src="images/img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Successful Myspace Profile</p>
          <p className="newsletter-desc">All users on MySpace will know that there are millions of people out there.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
          <img src="images/uncheck-icon.png" className="uncheck-icon img-fluid"/>
          </div>
          </div>

          <div className="row newsletter-row">
            <div className="col-md-3 col-sm-12">
          <img src="images/img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Home Audio Recording For Everyone</p>
          <p className="newsletter-desc">The number of friends and acquaintances will grow in a large number. This is what you should be looking for.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
          <img src="images/uncheck-icon.png" className="uncheck-icon img-fluid"/>
          </div>
          </div>

          <div className="row newsletter-row">
            <div className="col-md-3 col-sm-12">
          <img src="images/img-blank.png" className="blank-img img-fluid"/>
          </div>
          <div className="col-lg-7 col-sm-12 news-title-wrapper">
          <p className="newsletter-title">Buying Used Electronic Test Equipment</p>
          <p className="newsletter-desc">People after all will make friends after reading about you. If you have an ugly profile, there is no way th</p>
          </div>
          <div className="col-lg-2 col-sm-12">
          <img src="images/uncheck-icon.png" className="uncheck-icon img-fluid"/>
          </div>
          </div>
          </div>
          );
    }

}

export default NewsletterList;
