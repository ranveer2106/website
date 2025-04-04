import React from 'react'
import "./component.css"

const Work = () => {
    return (
        <>
            <div className="work contain fadeUp" >
                <h1 style={{ fontFamily: "Baloo Bhaijaan 2,cursive" }}>Work Experience</h1>
                <div className="workexp">
                    <div className='clogo'>
                        <img className='workimg imgs fadeUp' src={require('./img/sjain.jpg')} alt="h" />
                    </div>
                    <div>
                        <h2 className="highlight">Intern</h2>
                        <h4 className="highlight">Sjain Ventures - Internship</h4>
                        <h4 className="highlight">Sep 2024 - Present </h4>
                        <p>Collaborated with cross-functional teams to design, develop, and deploy web applications, ensuring high performance and responsiveness.
                            Utilized modern web technologies such as HTML, CSS, JavaScript, and frameworks like React.js to build user-friendly interfaces.
                            Integrated backend APIs with frontend interfaces to implement dynamic features and seamless data flow.
                            Conducted testing and debugging to ensure website functionality and resolved issues to enhance user experience.
                            Gained experience in version control systems like Git and collaborative development workflows. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work