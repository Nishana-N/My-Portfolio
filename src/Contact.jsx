import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const message = e.target.message.value;

        emailjs.sendForm('service_tmd5xlq', 'template_839qaje', form.current, 'EVrGfYBnn_OG3ZO_i')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                  alert("Email sent!")
                alert(`Email sent! ,\n Name: ${userName} \n Email: ${userEmail} \n Message: ${message}`);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contactPage">
           
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className='contactdesc'>Please fill out the form below to discuss any work oppurtunities.</span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                
                    <input type='text' className='name' placeholder='your name' name="name"  />
                    <input type="email" className="email" placeholder='your email' name="email" />
                    <textarea className='msg' name='message' rows="5" placeholder='your message' ></textarea>
                    <button type='submit' value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src="icons.png" alt="Icons" className="link" />

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;