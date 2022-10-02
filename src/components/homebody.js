import React from 'react';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import { useEffect } from "react";
import Experience from './experience';



function Body(props) {
    useEffect(() => {
        document.title = `${props.title}`
        window.scrollTo(0, 0)
    })


    return (
        <>
            <div className="container">
                <div id='text'>
                    <div className="l1 fadeUp card">Hi my name is Ranvir</div>
                    <div className="l2 fadeUp card">I build Stuff for the internet</div>
                    <div className="l3 fadeUp card">I'm a <span className="highlight"> front-end Engineer </span>. I like to build <span className="highlight">
                        Websites</span>  and play with new <span className="highlight">Technology</span> .I also help local businesses in taking their business online. I love to work on <span className="highlight">Javascript</span>  and <span className="highlight">
                            Python</span>. I'm Currently pursuing <span className='highlight'>B.tech Degree</span> in <span className='highlight'>Computer Science</span> At VIT</div>
                </div>
            </div>
            <About />
            <Experience />
            <Projects class={props.class} btn={props.btn} appear={props.appear} />
            <Contact />


        </>
    )
}

export default Body