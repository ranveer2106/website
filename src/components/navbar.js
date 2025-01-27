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



  return (
    <nav className='navbar'>
      <div>
        <h1 className='fadeUp'><Link id='title' className='link' to="/">{props.title}</Link></h1>
      </div>
      <div id='options' className={` ${isActive ? "NotActive" : "active"}`}>
        <ul className={`options ${isActive ? "NotActive" : "active"}`}>
          <li className='items fadeUp'><Link className='link navl' to="/">Home</Link></li>
          <li className='items fadeUp' ><a className='link navl' rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1gyujKEgreE6x-eZzWQYjwxc7xTMPG6Dv/view?usp=sharing">Resume</a></li>
          <li className='items fadeUp'><Link className='link navl' to="/projects">Projects</Link></li>
          <li className='items fadeUp'><Link className='link navl' to="/contact">Contact</Link></li>
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