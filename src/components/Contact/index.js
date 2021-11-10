import React from 'react';

function ContactForm(){
    //jsx
    return(
        <section> 
        <h1>Contact Me</h1>
        <form id = 'contact-form'>
           <div> <label htmlFor ="name">Name</label>
            <input type = "text" name = "name" />
            </div>
            <div> <label htmlFor ="email">Email</label>
            <input type = "text" name = "email" />
            </div>
            <div> <label htmlFor ="message">Message</label>
            <textarea name = "message" id = "message"  rows = "5"></textarea>
            </div>
            <div>
            <button type = "submit">Send</button>
            </div>
            </form>
            </section>
    );
}

export default ContactForm;