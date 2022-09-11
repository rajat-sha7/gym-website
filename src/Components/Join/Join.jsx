import React, { useRef } from 'react'

import emailjs from '@emailjs/browser';
import './Join.css'


export const Join = () => {
     const form= useRef();

     const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mvt23me', 'template_5jbnjsk', form.current, 'f6goNM2LhjHGz3naH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };




  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
        <hr/>
            <div>
            <span className='strokeText'> READY TO</span>
            <span> LEVEL UP</span>
            </div>
            <div>
            <span> YOUR BODY</span>
            <span className='strokeText'> WITH US</span>
            </div>
        </div>
        <div className='right-j'>
          <form ref={form} className='emailContainer' onSubmit={sendEmail}>
            <input type='email' name="user_email" placeholder='Enter your Email address' />
             <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
    </div>
  )
}
