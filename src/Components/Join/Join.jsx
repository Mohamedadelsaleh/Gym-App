import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';


const Join = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h1c7qcm', 'template_kslf20h', form.current, 'OYgVnq-cjZKM_nlw8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
        <div className="Join" id="join-us">
            <div className="join-left">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US</span>
                </div>
            </div>
            <div className="join-right">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" className="" name='from_mail' placeholder="Add Your Email" />
                    <button className="btn btn-join">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join