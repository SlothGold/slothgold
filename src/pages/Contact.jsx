import '../styles/style.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'slothgold_template', form.current, 'user_oRZeNt1kuYlTCJFQcizLZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div>
            <article className="container-small margin-top-small margin-bottom">
                <h2>Contact</h2>
                <p>You can also just message me at <span className="color-third">GoldSloth.com@gmail.com</span></p>
                <form ref={form} onSubmit={sendEmail} className="form-contact">
                    <label htmlFor="">Name</label>
                    <input type="name" name="name" placeholder="Name..." />
                    <label htmlFor="">Email</label>
                    <input type="name" name="email" placeholder="Email..." />
                    <label htmlFor="">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message..."></textarea>
                    <button>Submit</button>
                </form>
            </article>
        </div>
    )
}
