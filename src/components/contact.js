import React from 'react'
import Block from './block'

export default function Contact() {
    return (
        <>

            <div className='contain fadeUp' id='contactP'>
                <Block>
                <h1>Let's Meet</h1>
                <p>I'm currently looking for opporunities</p>
                <p>My Inbox is always Open So feel free to Contact Me</p>
                <p style={{ color: "#00FFF5",marginBottom: "1rem" }}>MY Email - ranveerbhatti2106@gmail</p>
                <a id='call' href="mailto:ranvir.s.bhatti@gmail.com" className='showMore contactbtn fadeUp'>Say Hi</a>
                </Block>
                    
            </div>
        </>
    )
}
