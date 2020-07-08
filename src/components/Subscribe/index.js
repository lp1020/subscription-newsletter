import React, { Component } from 'react';
import { useForm } from 'react-hook-form';

export default function Subscribe() {

const {register, handleSubmit, errors} = useForm();

const onSubmit = (data) => {
  setTimeout(() => alert('You are now subscribed!'), 2000)
  console.log(data);
}


        return (
        	<div className="subscribe-wrapper">
        	 <div className="container">
           <div className="row">
           <div className="col-12 text-center">
           <form onSubmit={handleSubmit(onSubmit)}>
           {errors.email && <p className="red-text">{errors.email.message}</p>}
           <input className="email-input" type="text" placeholder="Enter email" name="email" ref={register ({required: "Field is blank", minLength: { value: 6, message: "Please use valid e-mail"} })} />
           <input className="email-submit mx-auto" type="submit" value="SUBSCRIBE" />
           <input type="checkbox" id="checkbox" name="checkbox" value="checkbox"/>
            <label htmlFor="checkbox"> I do not want to receive information about future newsletters.</label>
           </form>
           </div>
           </div>
           </div>
        	 </div>
        	);
    }



