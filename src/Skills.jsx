import React from 'react'
import './skills.css'
import resume from './NishanaResume.pdf'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What i do</span>
            <span className='skillDesc'>Iam a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. Im proficient in HTML,CSS,javaScript,Angular and React </span>
            <div className="skillBars">
                <div className='skillBar'>
                    <img src='skill.jpeg' alt='UiDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>Transforming ideas into captivating experiences, our UI/UX design servicescombine creativity and user-centric design principles to craft visually appealing interfaces that ensure intuitive navigation a delightful journey of your goals </p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src='skill1.png' alt='WebDesighn ' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Frontend</h2>
                        <p>Elevate user experiences through expert front-end development, combining design finesse with interactive functionality to bring websites and applications to life.</p>
                    </div>

                </div>

                <div className='skillBar'>
                    <img src='skill.jpeg' alt='UiDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Backend</h2>
                        <p>Crafting powerful MERN full-stack applications with robust back-end development, utilizing MongoDB, Express.js, React, and Node.js to deliver seamless, efficient, and feature-packed solutions </p>
                    </div>

                </div>

                
            </div>
            <div className="portfolio">
                    <div className="download-section">
                        <h3>Download my resume</h3>
                        <a href={resume} download>
                            <button id="btn">Download</button>
                        </a>
                    </div>
                </div>

        </section>
    )
}

export default Skills