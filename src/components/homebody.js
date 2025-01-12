import React from 'react';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import { useEffect } from "react";
import Experience from './experience';
import Block from './block'
import Work from './work';




function Body(props) {
    useEffect(() => {
        document.title = `${props.title}`
        window.scrollTo(0, 0)
    })


    return (
        <>
            <div className="container">
                <Block>

                    <div id='text'>
                        <Block>

                            <div className="l1 fadeUp ">Hi my name is Ranvir</div>
                        </Block>
                        <Block>

                            <div className="l2 fadeUp ">I build Stuff for the internet</div>
                        </Block>
                        <Block>

                            <div className="l3 fadeUp ">I'm a <span className="highlight"> Software Engineer </span>. I like to build <span className="highlight">
                                Websites</span>  and play with new <span className="highlight">Technology</span>. I work on Java and Sql projects .I also help local businesses in taking their business online. I love to work on <span className="highlight">Java</span>, <span className="highlight">Python</span>  and <span className="highlight">
                                    Javascript</span>. I'm Currently pursuing <span className='highlight'>B.tech Degree</span> in <span className='highlight'>Computer Science</span> At VIT</div>
                        </Block>
                    </div>
                </Block>
            </div>
            <About />
            <Work />
            <Experience />
            <Projects class={props.class} btn={props.btn} appear={props.appear} />
            <Contact />


        </>
    )
}

export default Body