import React from 'react'
import PropTypes from 'prop-types'
import "./component.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [isActive, setActive] = useState("false");
  let print = () => {
    setActive(!isActive);
  }
  let home = () => {
    document.title = "Home | Ranvir"
  }

  let project = () => {
    document.title = "Projects |"
  }


  return (
    <nav className='navbar'>
      <div>
        <h1 className='fadeUp'><Link id='title' className='link' to="/">{props.title}</Link></h1>
      </div>
      <div id='options' className={`options ${isActive ? "actives" : "active"}`}>
        <ul className={`options ${isActive ? "actives" : "active"}`}>
          <li className='items fadeUp'><Link className='link navl' onClick={home} to="/">Home</Link></li>
          <li className='items fadeUp' ><a className='link navl' target={"_blank"} rel="noreferrer" href="https://bit.ly/3P4wXYP">Resume</a></li>
          <li className='items fadeUp'><Link className='link navl' onClick={project} to="/projects">Projects</Link></li>
          <li className='items fadeUp'><a className='link navl' href="mailto:ranveerbhatti2106@gmail.com">Contact</a></li>
        </ul>
      </div>
      <div className={`hamburger ${isActive ? "notActive" : "active"}`} onClick={print} >
        <span id='one' className={`bar ${isActive ? "notActive" : "active"}`}></span>
        <span id='two' className={`bar ${isActive ? "notActive" : "active"}`}></span>
        <span id='three' className={`bar ${isActive ? "notActive" : "active"}`}></span>
      </div>
    </nav >
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

// export default Navbar