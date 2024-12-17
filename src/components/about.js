import React from 'react'
import Block from './block'


export default function About() {
    return (
        <>
            <div className="container fadeUp" id='about'>
                <Block>

                <h1 className='about'>About me</h1>
                </Block>
                <Block>
                    <div className='disimg'>
                        
                <img className='img dispimg fadeUp' src={require('./round.png')} alt="h" />
                    </div>
                    
                </Block>
                <Block>
                <div className='fadeUp'>
                    <h3 className='aboutpara'>
                        Knowledgeable Front End Developer adept at creating successful websites that meet
                        customer needs. Specializing in collaborating with Any type of customer to gather
                        requirements, produce plans and improve designs for usability and functionality.

                        Fully proficient in JavaScript and Python Background includes designing Single Page
                        websites without Re-load in Agile environments. Exceptional team player with an
                        analytical approach to developing useful solutions.


                    </h3>
                </div>
                </Block>
                <Block>
                <h1 className='tech'>Technologies & Skills</h1>
                </Block>
                    
                <div className="skills">
                    <Block>

                    <div className='skill'>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>REACTJS</li>
                            <li>BOOTSTRAP/TailwindCss</li>
                        </ul>
                    </div>
                    </Block>
                    <Block>
                    <div className='skill'>
                        <ul>
                            <li>Figma</li>
                            <li>PYTHON</li>
                            <li>GIT/Github</li>
                            <li>NodeJs</li>
                        </ul>
                        
                    </div>
                    </Block>
                </div>

            </div>
        </>
    )
}
