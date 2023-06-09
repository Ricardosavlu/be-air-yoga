import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_l4t5bwm',
        'template_01tpisg',
        form.current,
        'YlKRM_NfSmw8uBL2-F'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>FLOAT</span>
        </div>
        <div>
          <span>NOW</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        <hr />
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email adress"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
