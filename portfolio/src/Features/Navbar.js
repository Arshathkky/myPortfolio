import React from 'react'
import '../Style/Navbar.css'
const Navbar = () => {
  return (
    <header className="hero">
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#services">Project</a></li>
            <li><a href="#contact">About </a></li>
          </ul>
        </nav>
        
      </header>
  )
}

export default Navbar
