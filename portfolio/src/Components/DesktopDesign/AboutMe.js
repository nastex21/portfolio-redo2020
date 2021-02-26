import React, { useEffect } from 'react';

function AboutMe ({setPath}) {

    useEffect(() => {
        setPath('aboutme')
      });

    return (
        <section id="aboutme" className="contentDiv">
            <p>About Me</p>
        </section>
    )
};

export default AboutMe;