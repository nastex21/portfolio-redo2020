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
                            <p>Name:</p>
                            <input type="text" name="name" placeholder="Enter your name" id="name" />
                        </div>
                        <div id="ContactEmail">
                            <p>Email:</p>
                            <input type="email" name="email" placeholder="Enter your email" id="email"/>
                        </div>
                        <div id="contactMessage">
                            <p>Message:</p>
                            <input type="text" name="message" placeholder="Enter your message" id="message"/>
                        </div>
                        <div id="contactSubmit">
                            <input type="submit" value=""/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default Contact;