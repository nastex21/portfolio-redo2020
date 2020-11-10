import React, {forwardRef} from 'react';

const Contact = forwardRef((props, ref) => {

    return (
        <section ref={ref} id="Contact" className="contactDiv">
            <p>Contact</p>
        </section>
    )
});

export default Contact;