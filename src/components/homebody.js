import React from 'react';
import About from './about';
import Contact from './contact';
import Projects from './projects';


function Body(props) {

    return (
        <>
            <div className="container">
                <div id='text'>
                    <div className="l1 fadeUp">Hi my name is Ranvir</div>
                    <div className="l2 fadeUp">I build Stuff for the internet</div>
                    <div className="l3 fadeUp">I'm a student currently. I like to work on HTML,CSS,Javascript,Nodejs and React I'm a student currently. I like to work on HTML,CSS,Javascript,Nodejs and React I'm a student currently. I like to work on HTML,CSS,Javascript,Nodejs and React</div>
                </div>
            </div>
            <About />
            <Projects class={props.class} btn={props.btn} appear={props.btn} />
            <Contact />
        </>
    )
}

export default Body