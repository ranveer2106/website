import React from 'react'
import Block from './block'
// import microsftImage from './img/microsft.jpg';
// import gcImage from './img/gc.png';

export default function Experience() {
    return (
        <>
            <div className="container block" id='exp'>
                <Block>

                    <h1 className='exphead' style={{ color: "#00FFF5" }}>Certifications</h1>
                </Block>
                <div>

                    <div style={{ display: "flex", flexWrap: "wrap" }} id="experience">
                        <Block>
                            <div className='certificates'>
                                <div id="exph">
                                    <img className='certimg imgs fadeUp' src={require('./img/microsoft.png')} alt="h" />
                                </div>
                                <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                                    <h4 className='certname' style={{ color: "#00FFF5" }}>Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900) </h4>
                                    <p style={{ display: "inline-block", fontSize: "1.3rem" }}>
                                        Validated foundational knowledge of security, compliance, and
                                        identity principles within <span className='highlight'> Microsoft solutions.</span>
                                        Proficient in understanding cloud-based security concepts,
                                        compliance standards, identity protection, and governance
                                        strategies. Skilled in leveraging Microsoft solutions to
                                        implement secure and compliant business processes.
                                    </p>
                                </div>
                            </div>
                        </Block>
                        <Block>
                            <div className='certificates'>
                                <div id="exph">
                                    <img className='certimg imgs fadeUp' src={require('./img/gc.png')} alt="h" />
                                </div>
                                <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                                    <h4 className='certname' style={{ color: "#00FFF5" }}>Google Fundamentals of Digital Marketing</h4>
                                    <p style={{ display: "inline-block", fontSize: "1.3rem" }}>
                                        I Did this Course to learn more about Seo and Marketing and how to include them in my <span className='highlight'>Front-end Desgin</span> of the websites that I create.
                                        Moreover this course Taught me more about customer physcology and their needs from a website.
                                    </p>
                                </div>
                            </div>
                        </Block>

                    </div>
                </div>
            </div>
        </>
    )
}
