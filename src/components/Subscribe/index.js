import React, { Component } from 'react';

class Subscribe extends Component {


    render() {
        return (
        	<div className="subscribe-wrapper">
        	 <div className="container">
           <div className="row">
           <div className="col-12 text-center">
           <form>
           <input className="email-input" type="text" placeholder="Enter email" name="email" />
           <input className="email-submit mx-auto" type="submit" value="SUBSCRIBE" />
           <input type="checkbox" id="checkbox" name="checkbox" value="checkbox"/>
            <label for="checkbox"> I do not want to receive information about future newsletters.</label>
           </form>
           </div>
           </div>
           </div>
        	 </div>
        	);
    }

}

export default Subscribe;
