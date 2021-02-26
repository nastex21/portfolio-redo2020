import React, { useEffect } from 'react';

function Portfolio ({setPath}) {
    useEffect(() => {
        setPath('portfolio')
      });

    return (
        <section id="portfolio" className="contentDiv">
            <p>Portfolio</p>
        </section>
    )
};

export default Portfolio;