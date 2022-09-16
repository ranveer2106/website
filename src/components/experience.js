import React from 'react'

export default function Experience() {
    return (
        <>
            <div className="container" id='exp'>
                <h1 style={{ color: "#00FFF5" }}>Experiences & Certifications</h1>
                <div>
                    <div style={{ display: "flex" }} id="experience">
                        <div id="exph">
                            <img className='imgs fadeUp' src={require('./img/gc.png')} alt="h" />
                        </div>
                        <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                            <h4 style={{ color: "#00FFF5" }}>Google Fundamentals of Digital Marketing</h4>
                            <p style={{ display: "inline-block", fontSize: "1.3rem" }}>
                                I Did this Course to learn more about Seo and Marketing and how to include them in my <span className='highlight'>Front-end Desgin</span> of the websites that I create.
                                Moreover this course Taught me more about customer physcology and their needs from a website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
