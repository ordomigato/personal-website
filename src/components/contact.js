import React, { useRef, useState } from 'react'

import './contact.scss'

const Contact = () => {

    return (
        <section id="contact-form" className="contact_section">
            <div className="contact-container">
                <header>
                    <h2>Have a project in mind?</h2>
                    <p>or just want to say hi?</p>
                </header>
                <form method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="name-email_field">
                        <label>
                            <span>Name</span>
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </label>
                    </div>
                    <label>
                        <span>Message</span>
                        <textarea name="message" id="message" placeholder="Message..." rows="3" />
                    </label>
                    <br />
                    <div data-netlify-recaptcha="true"></div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact