import React from 'react';
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            {/* <section id="AboutMe" className="about--section">

                <div className="hero--section--content--box ">
                    <div className="hero--section--content">
                        <p className="section--title">
                            
                        </p>
                        <h1 className="skills-section--heading">About Me</h1>
                        <p className="hero--section-description">
                            I'm a dedicated MERN stack developer experienced in crafting dynamic web applications.
                            My proficiency in MongoDB, Express.js, React, and Node.js allows me to seamlessly merge the front-end and
                            back-end, resulting in efficient and engaging digital solutions. With a keen eye for user experience and a
                            problem-solving mindset, I'm committed to delivering high-quality software that makes a meaningful impact.
                        </p>
                    </div>
                   


                </div>
            </section> */}

            <section id="AboutMe" className="about--section">
                <div className="hero--section--content--box">
                    <div className="hero--section--content">
                        <p className="section--title">
                        </p>
                        <h1 className="skills-section--heading">About Me</h1>

                        <p className="hero--section-description">
                            I'm a dedicated MERN stack developer with a passion for crafting dynamic web applications.
                            My proficiency in MongoDB, Express.js, React, and Node.js allows me to seamlessly merge
                            the front-end and back-end, resulting in efficient and engaging digital solutions.
                            With a keen eye for user experience and a problem-solving mindset, I'm committed to
                            delivering high-quality software that makes a meaningful impact.
                        </p>
                        <h2 className="subheading">Skills</h2>
                        <ul className="skills-list">
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>

                        <div>
                            <button className="btn btn-github"> <a href="https://github.com/Nishana-N">

                                Visit My GitHub</a>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About