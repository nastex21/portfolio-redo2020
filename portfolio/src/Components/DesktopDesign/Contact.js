import React, { useEffect } from 'react';
import Footer from './Footer';

function Contact({ setPath }) {

    useEffect(() => {
        setPath('contact')
    });

    return (
        <div className="contentDiv">
            <section id="contact">
                <p>Contact</p>
            </section>
            <Footer />
        </div>

    )
};

export default Contact;