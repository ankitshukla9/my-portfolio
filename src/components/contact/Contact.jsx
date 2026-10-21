import './Contact.css';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
    FaGithub
} from 'react-icons/fa';

import {
    MdEmail,
    MdPhone
} from 'react-icons/md';

function Contact() {
    return (
        <>
            <section className="contact" id="contact">

                <div className="contact-text">

                    <h2>
                        Contact <span>Me</span>
                    </h2>

                    <h4>Let's Work Together</h4>

                    <p>
                        I am always interested in new opportunities and
                        exciting projects. If you have a project in mind,
                        feel free to contact me. Let's work together and
                        create something amazing.
                    </p>

                    <div className="contact-list">

                        <li>
                            <MdEmail />
                            fullstackankit0@gmail.com
                        </li>

                        <li>
                            <MdPhone />
                            +91 9653739753,9417129433
                        </li>

                    </div>

                    <div className="contact-icons">

                        <a href="https://www.facebook.com/ankitshukla9653" target="_blank" rel="noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://wa.me/9653739753" target="_blank" rel="noreferrer">
                            <FaWhatsapp />
                        </a>

                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/ankitshukla9653/" target="_blank" rel="Ankitshukla9653">
                            <FaInstagram />
                        </a>

                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/ankitshukla9" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                    </div>

                </div>


                <div className="contact-form">

                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >

                        <input
                            type="hidden"
                            name="access_key"
                            value="fad799ec-c50f-417f-be66-182463edb4eb"
                        />

                        <input
                            type="hidden"
                            name="subject"
                            value="New Enquiry From My Portfolio"
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter Your Subject"
                        />

                        <textarea
                            name="message"
                            cols="40"
                            rows="10"
                            placeholder="Enter Your Message"
                            required
                        ></textarea>

                        <input
                            type="submit"
                            value="Submit"
                            className="send"
                        />

                    </form>

                </div>

            </section>
        </>
    );
}

export default Contact;