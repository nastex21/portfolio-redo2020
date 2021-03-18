import React, { useEffect } from 'react';
import Footer from './Footer';

function Contact() {

    return (
        <>
            <section id="contact">
                <div id="contactBody">
                    <div id="contactHeader">
                        <p>Contact Me</p>
                    </div>
                    <div id="contactContent">
                        <div id="contactName">
                            <p className="contactContent">Name:</p>
                            <input type="text" name="name" placeholder="Enter your name" id="name" />
                        </div>
                        <div id="contactEmail">
                            <p className="contactContent">Email:</p>
                            <input type="email" name="email" placeholder="Enter your email" id="email"/>
                        </div>
                        <div id="contactMessage">
                            <p className="contactContent">Message:</p>
                            <input type="text" name="message" placeholder="Enter your message" id="message"/>
                        </div>
                        <div id="contactSubmit">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default Contact;