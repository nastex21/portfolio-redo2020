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
                            <input type="text"/>
                        </div>
                        <div id="ContactEmail">
                            <p>Email:</p>
                            <input type="email" name="" id=""/>
                        </div>
                        <div id="contactMessage">
                            <p>Message:</p>
                            <input type="text" name="" id=""/>
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