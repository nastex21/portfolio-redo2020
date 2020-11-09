import React, {forwardRef} from 'react';

const Portfolio = forwardRef((props, ref) => {

    return (
        <section ref={ref} id="portfolio" className="portfolioDiv">
            <p>Portfolio</p>
        </section>
    )
});

export default Portfolio;