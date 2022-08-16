import React from 'react';
import "./component.css"
// import { Link } from 'react-router-dom';

function Sidebars() {
    return (
        <div>
            <div id="left" className='fadeUp'>
                {/* <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span> */}
                <a href="https://www.instagram.com/ranveersingh.bhatti/" rel="noreferrer" target={"_blank"}><i className="fab fa-instagram logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                <a href="https://twitter.com/Ranveer_2106" rel="noreferrer" target={"_blank"}><i className="fab fa fa-twitter logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                <a href="https://github.com/ranveer2106" rel="noreferrer" target={"_blank"}><i className="fab fa fa-github logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                <a href="https://www.linkedin.com/in/ranvir-singh-bhatti/" rel="noreferrer" target={"_blank"}><i className="fab fa-linkedin logos fadeUp" style={{ fontSize: "33px" }}></i></a>
            </div>
            <div id="email"  >
                <div className='fadeUp'>
                    <a className='fadeUp' target="_blank" rel="noreferrer" href="mailto:ranveerbhatti2106@gmail.com">ranveerbhatti2106@gmail.com</a>
                </div>

            </div>
        </div>
    )
}

export default Sidebars