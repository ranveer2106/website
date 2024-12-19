import React from 'react'
// import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>

            <div className='fadeUp footer' id='footer'>
                <a href="mailto:ranveerbhatti2106@gmail.com" rel="noreferrer" target={"_blank"}><i className="fa fa-envelope logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                <a href="https://www.instagram.com/ranveersingh.bhatti/" rel="noreferrer" target={"_blank"}><i className="fab fa-instagram logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                {/* <a href="https://twitter.com/Ranveer_2106" rel="noreferrer" target={"_blank"}><i className="fab fa fa-twitter logos fadeUp" style={{ fontSize: "33px" }}></i></a> */}
                <a href="https://github.com/ranveer2106" rel="noreferrer" target={"_blank"}><i className="fab fa fa-github logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                <a href="https://www.linkedin.com/in/ranvir-singh-bhatti/" rel="noreferrer" target={"_blank"}><i className="fab fa-linkedin logos fadeUp" style={{ fontSize: "33px" }}></i></a>
            </div>

        </>
    )
}
