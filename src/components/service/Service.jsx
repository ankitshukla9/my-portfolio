import './Servise.css';
import '../../components/Header/key.css';
import {
    FaCode,
    FaReact,
    FaServer,
    FaLayerGroup,
    FaDatabase
} from "react-icons/fa";

function Service() {
    return (
        <>
            <section className="service" id="service">

                <div className="container">
                    <h2 className="sub-title">
                        My <span>Services</span>
                    </h2>
                </div>

                <div className="service-list">

                    {/* Frontend Development */}
                    <div className="service-card">
                        <FaCode className="service-icon" />
                        <h2>Frontend Development</h2>
                        <p>
                            I create responsive and user-friendly websites using
                            HTML, CSS, JavaScript and Bootstrap. I focus on clean
                            layouts, responsive design and a smooth user experience.
                        </p>

                        <a href="#contact" className="read">
                            Learn More
                        </a>
                    </div>


                    {/* React Development */}
                    <div className="service-card">
                        <FaReact className='service-icon' />

                        <h2>React.js Development</h2>

                        <p>
                            I build modern and interactive web applications using
                            React.js. I work with components, props, state, hooks
                            and reusable UI components to create dynamic websites.
                        </p>

                        <a href="#contact" className="read">
                            Learn More
                        </a>
                    </div>


                    {/* Backend Development */}
                    <div className="service-card">
                        <FaServer className='service-icon' />

                        <h2>Backend Development</h2>

                        <p>
                            I develop backend applications using Node.js and
                            Express.js. I can create APIs, handle server-side
                            logic, manage routes and work with databases.
                        </p>

                        <a href="#contact" className="read">
                            Learn More
                        </a>
                    </div>


                    {/* MERN Stack */}
                    <div className="service-card">
                        <FaLayerGroup className='service-icon' />

                        <h2>MERN Stack Development</h2>

                        <p>
                            I develop full stack web applications using MongoDB,
                            Express.js, React.js and Node.js. I can build complete
                            applications with frontend, backend and database
                            integration.
                        </p>

                        <a href="#contact" className="read">
                            Learn More
                        </a>
                    </div>

                    <div className="service-card">
                        <FaDatabase className="service-icon" />

                        <h2>MongoDB Database</h2>

                        <p>
                            I work with MongoDB to store, manage and organize application data.
                            I can create databases, insert, update, find and delete data, and
                            connect MongoDB with Node.js and Express.js applications.
                        </p>

                        <a href="#contact" className="read">
                            Learn More
                        </a>
                    </div>
                    <div className="service-card">
                        <FaServer className="service-icon" />

                        <h2>REST API Development</h2>

                        <p>
                            I develop REST APIs using Node.js and Express.js to connect
                            frontend applications with backend services. I can create
                            APIs for handling data, authentication, CRUD operations and
                            database integration.
                        </p>

                        <a href="#contact" className="read">
                            Learn More
                        </a>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Service;