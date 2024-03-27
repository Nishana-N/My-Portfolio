import React from 'react'
import './intro.css';
import { Link } from 'react-router-dom';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Nishana N</span> <br/> Mea(r)n Developer</span>
            <p className='introPara'>  Creating full-stack web applications using MongoDB,<br/> Express.js, Angular, React, and Node.js.</p>
            <Link to="/Contact"><button className='btn'>Hire Me</button></Link>
        </div>
       
        <div >
        <img className="bg" src="Nishana photo.jpg" alt="bg" roundedCircle/>

        </div>
    </section>
  )
}

export default Intro;