import React from 'react';
import{ Link, Outlet } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>

    <nav className="navbar">
    <h1 className="title">
        Nishana N</h1>
        <div >
          <ul style={{display:"flex", gap:"10px", listStyleType:"none" }} className='desktopMenu'>
          <li className='desktopMenuListItem'><Link to="/Intro">Home</Link></li>
          <li className='desktopMenuListItem'><Link to ="/About">About</Link></li>
            <li className='desktopMenuListItem'><Link to="/Skills">Services</Link></li>
            <li className='desktopMenuListItem'><Link to ="/Works">Projects</Link></li>
            
            
            
          </ul>
        
           
          
        </div>
        <button className='desktopMenuBtn'><Link to="/contact">Contact Me</Link></button>
        
       
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar

// onClick={()=>{
//   document.getElementById('contact').scrollIntoView({behavior:"smooth"});
// }}