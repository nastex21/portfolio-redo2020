import React, {forwardRef} from 'react';

const Contact = forwardRef((props, ref) => {

    return (
        <section ref={ref} id="contact" className="contactDiv">
            <p>Contact</p>
        </section>
    )
});

export default Contact;