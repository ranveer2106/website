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
    {/* Airtribe Certification */}
    <Block>
        <div className='certificates'>
            <div id="exph">
                <img
                    className='certimg imgs fadeUp'
                    src={require('./img/airtribe.jpg')}
                    alt="Airtribe"
                />
            </div>

            <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                <h4 className='certname' style={{ color: "#00FFF5" }}>
                    AI-First Product Management Program – Airtribe
                </h4>

                <p style={{ display: "inline-block", fontSize: "1.3rem" }}>
                    Completed an intensive Product Management program covering
                    <span className='highlight'> User Research</span>,
                    <span className='highlight'> PRD Writing</span>,
                    <span className='highlight'> Roadmapping</span>,
                    <span className='highlight'> GTM Strategy</span>, and
                    <span className='highlight'> AI-powered Product Development</span>.
                    Applied these skills through hands-on capstone projects on
                    <span className='highlight'> Suno AI</span> and
                    <span className='highlight'> Stable Money</span>.
                </p>
            </div>
        </div>
    </Block>
    {/* Microsoft Certification */}
    <Block>
        <div className='certificates'>
            <div id="exph">
                <img
                    className='certimg imgs fadeUp'
                    src={require('./img/microsoft.png')}
                    alt="Microsoft"
                />
            </div>

            <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                <h4 className='certname' style={{ color: "#00FFF5" }}>
                    Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)
                </h4>

                <p style={{ display: "inline-block", fontSize: "1.3rem" }}>
                    Earned the Microsoft SC-900 certification, validating foundational knowledge of
                    <span className='highlight'> cloud security</span>,
                    <span className='highlight'> identity management</span>,
                    <span className='highlight'> compliance</span>, and
                    <span className='highlight'> governance</span> across Microsoft solutions.
                </p>
            </div>
        </div>
    </Block>

    {/* Google Certification */}
    <Block>
        <div className='certificates'>
            <div id="exph">
                <img
                    className='certimg imgs fadeUp'
                    src={require('./img/gc.png')}
                    alt="Google"
                />
            </div>

            <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                <h4 className='certname' style={{ color: "#00FFF5" }}>
                    Google Fundamentals of Digital Marketing
                </h4>

                <p style={{ display: "inline-block", fontSize: "1.3rem" }}>
                    Learned the fundamentals of
                    <span className='highlight'> SEO</span>,
                    <span className='highlight'> digital marketing</span>, and
                    <span className='highlight'> customer behavior</span>,
                    helping me better understand how users discover, engage with,
                    and interact with digital products.
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
