import React, { useEffect } from 'react';

function Contact({setPath}) {

    useEffect(() => {
        setPath('contact')
      });

    return (
        <section id="contact" className="contentDiv">
            <p>Contact</p>
        </section>
    )
};

export default Contact;