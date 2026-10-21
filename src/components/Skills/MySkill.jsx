import { useEffect, useRef, useState } from "react";
import './MySkill.css';
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJs,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostman,
} from "react-icons/si";


function Skill() {
    return (
        <>
            <h1 className='h1'>My <span>Skills</span></h1>
            <section className='section'>
                <div className="container1" id="Skill">
                    <h1 className="heading1">Technical Skills</h1>

                    <div className="technical-bars">

                        <div className="bar">
                            <div className="info">
                                <FaHtml5 className="service-icon" style={{ color: '#c95d2e' }} />
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <FaCss3Alt className="service-icon" style={{ color: '#147bbc' }} />
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <SiTailwindcss className="service-icon" style={{ color: '#1414₹₹' }} />
                                <span>Tailwind CSS</span>
                            </div>
                            <div className="progress-line tailwind">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <FaBootstrap className="service-icon" style={{ color: '#9986' }} />
                                <span>Bootstrap</span>
                            </div>
                            <div className="progress-line boostrap">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <FaJs className="service-icon" style={{ color: '#5678' }} />
                                <span>JavaScript</span>
                            </div>
                            <div className="progress-line javascript">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <FaReact className="service-icon" style={{ color: '#567f' }} />
                                <span>React JS</span>
                            </div>
                            <div className="progress-line react">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <FaNodeJs className="service-icon" style={{ color: '#c365' }} />
                                <span>Node JS</span>
                            </div>
                            <div className="progress-line node">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <SiExpress className="service-icon" style={{ color: 'blue' }} />
                                <span>Express JS</span>
                            </div>
                            <div className="progress-line express">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <SiMongodb className="service-icon" style={{ color: '#c23d' }} />
                                <span>MongoDB</span>
                            </div>
                            <div className="progress-line mongo">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div className="info">
                                <SiPostman className="service-icon" style={{ color: '#2dc4' }} />
                                <span>Rest API</span>
                            </div>
                            <div className="progress-line rest">
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container1 con">
                    <h1 className="heading1">Professional Skills</h1>

                    <div className="radial-bars">

                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle
                                    className="progress-bar"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />

                                <circle
                                    className="path path-1"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />
                            </svg>

                            <div className="percentage">94%</div>
                            <div className="text">Creativity</div>
                        </div>


                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle
                                    className="progress-bar"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />

                                <circle
                                    className="path path-2"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />
                            </svg>

                            <div className="percentage">80%</div>
                            <div className="text">Communication</div>
                        </div>


                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle
                                    className="progress-bar"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />

                                <circle
                                    className="path path-3"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />
                            </svg>

                            <div className="percentage">90%</div>
                            <div className="text">Problem Solving</div>
                        </div>


                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle
                                    className="progress-bar"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />

                                <circle
                                    className="path path-4"
                                    cx="100"
                                    cy="100"
                                    r="80"
                                />
                            </svg>

                            <div className="percentage">86%</div>
                            <div className="text">Teamwork</div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill;