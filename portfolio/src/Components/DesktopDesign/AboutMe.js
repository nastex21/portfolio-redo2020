import React, { useEffect } from 'react';

function AboutMe() {

    return (
        <section id="aboutme">
            <div id="aboutTitle">
                <h1>Who Am I?</h1>
            </div>
            <div id="middleContent">
                <div id="meContent">
                    <p>
                        Hello, my name is <strong className="orange">Tony</strong> and I’m a <strong className="orange">passionate software engineer</strong>! I love taking what are originally thoughts and ideas, putting pen to paper and then creating fully-fledged web applications! And with new technologies on the horizon and the field always evolving, part of the thrill is to be on your toes to learn new things. So thank you for taking your time visiting my page and I hope you learn more about me and the things I can do!
                    </p>
                </div>
                <div id="meStats">
                    <p>Name: Tony Salazar</p>
                    <p>email: <a href="tonysal@tonysal.met">tonysal@tonysal.net</a></p>
                    <p>Age: 38</p>
                    <p>From: San Antonio, Texas</p>
                    <button>Download Resume</button>
                </div>
            </div>
            <div id="bottomContent">
                <div id="education">
                    <h3>Eduation</h3>
                    <p>St. Mary's University</p>
                    <p>FreeCodeCamp</p>
                    <p>St. Philip's College</p>
                </div>
                <div id="experience">
                    <h3>Years of Experience</h3>
                    <p>4</p>
                </div>
                <div id="projectsNum">
                    <h3>Projects</h3>
                    <p>30+</p>
                </div>
            </div>
        </section>
    )
};

export default AboutMe;