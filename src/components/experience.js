import React from 'react'
import Block from './block'

export default function Experience() {
    return (
        <>
            <div className="container block" id='exp'>
                <Block>

                <h1 className='exphead' style={{ color: "#00FFF5" }}>Experiences & Certifications</h1>
                </Block>
                <div>
                    <Block>

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
                    </Block>
                </div>
            </div>
        </>
    )
}
