import React from 'react'

export default function About() {
    return (
        <>
            <div className="container fadeUp" id='about'>
                <h1 className='about'>About me</h1>
                <img className='img fadeUp' src={require('./round.png')} alt="h" />
                <p className='fadeUp'>
                    <h3>
                        Knowledgeable Front End Developer adept at creating successful websites that meet
                        customer needs. Specializing in collaborating with Any type of customer to gather
                        requirements, produce plans and improve designs for usability and functionality.

                        Fully proficient in JavaScript and Python Background includes designing Single Page
                        websites without Re-load in Agile environments. Exceptional team player with an
                        analytical approach to developing useful solutions.


                    </h3>
                </p>
                <h1 className='tech'>Technologies & Skills</h1>
                <div className="skills">
                    <div className='skill'>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>REACTJS</li>
                            <li>BOOTSTRAP/TailwindCss</li>
                        </ul>
                    </div>
                    <div className='skill'>
                        <ul>
                            <li>Figma</li>
                            <li>PYTHON</li>
                            <li>GIT/Github</li>
                            <li>NodeJs</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
