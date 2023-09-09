import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  const show = () =>{
    const menu = document.querySelector('nav');
    menu.classList.toggle('show');
    const catg = document.querySelector('.catg');
    catg.classList.toggle('showcatg');
    
}

  return (

    <nav>
      <div className="logo"><img src="batlogo.png" alt="" /></div>
        <div className="catg">
            <Link to="/"><h4 onClick={show}>Home</h4></Link>
            <Link to="/about"><h4 onClick={show}>About</h4></Link>
            <Link to="/contact"><h4 onClick={show}>Contact</h4></Link>
            <Link to="/"><h4 onClick={show}>Explore</h4></Link>
            <Link to="/signup"><button onClick={show}>Sign Up</button></Link>
        </div>
        
        <i className="ri-menu-3-line" onClick={show}></i>
            <i className="ri-close-fill" onClick={show}></i>
    </nav>
  )
}
