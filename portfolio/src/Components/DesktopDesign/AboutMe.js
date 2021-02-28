import React, { useEffect } from 'react';
import Footer from './Footer';

function AboutMe({ setPath }) {

    useEffect(() => {
        setPath('aboutme')
    });

    return (
        <div className="contentDiv">
            <section id="aboutme">
                <p>About Me</p>
            </section>
            <Footer />
        </div>
    )
};

export default AboutMe;