import './Project.css';

import img1 from '../../assets/image/img-1.jpeg';
import img2 from '../../assets/image/img-2.jpeg';
import img3 from '../../assets/image/img-3.png';
function Projects() {
    return (
        <section className="portfolio" id="project">

            <div className="main-text">
                <h2>Latest <span>Project</span></h2>

                <div className="project-content">

                    {/* Project 1 */}
                    <div className="row">
                        <img src={img1} alt="UI UX Design" />

                        <div className="layer">
                            <h5>UI/UX Design</h5>

                            <p>
                                I design clean and user-friendly interfaces that provide
                                a simple and enjoyable experience for users. My focus is
                                on creating attractive layouts, easy navigation, and
                                responsive designs.
                            </p>

                            <a href="/">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="row">
                        <img src={img2} alt="Web Design" />

                        <div className="layer">
                            <h5>Web Design</h5>

                            <p>
                                I create modern and responsive websites using HTML, CSS,
                                JavaScript, and React. I focus on making websites
                                attractive, fast, responsive, and easy to use on all devices.
                            </p>

                            <a href="/">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="row">
                        <img src={img3} alt="Development" />

                        <div className="layer">
                            <h5>Development</h5>

                            <p>
                                I build functional web applications using frontend and
                                backend technologies. I work with JavaScript, React,
                                Node.js, Express.js, and MongoDB to create complete
                                full-stack projects.
                            </p>

                            <a href="/">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Projects;