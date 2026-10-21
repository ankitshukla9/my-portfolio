import { useEffect } from 'react';
import Typed from 'typed.js';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

import './Home.css';
import backImage from '../../assets/image.png';
import TimeZone from '../Time/Time';

function Home() {

    useEffect(() => {
        const typed = new Typed(".text", {
            strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">

            <div className='home-content'>
                <h3>Hello,It's Me</h3>
                <h1>Ankit Shukla</h1>
                <h3>And I'm a <span className='text'></span></h3>
                <p>I'm a Web developer With extensive Fresher.
                    <br />
                    Expertise is top create and Website design,Frontend design, and Backend.
                </p>
                <div className="home-sci">
                    <a href="https://www.instagram.com/ankitshukla9653/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>

                    <a href="https://github.com/ankitshukla9" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>

                    <a href="https://wa.me/9653739753" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
                <a href="#about" className='btn-box'>More About me</a>
            </div>

            <div className="home-image">
                <img src={backImage} alt="Ankit Shukla" />
            </div>

            <div className="image-time">
                <TimeZone />
            </div>

        </section>
    );
}

export default Home;