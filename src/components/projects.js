import React from 'react'
import { Link } from 'react-router-dom'
import {
    useEffect,

} from "react";
import "./component.css"
import Block from './block';






export default function Projects(props) {

    useEffect(() => {
        document.title = `${props.title}`
        window.scrollTo(0, 0)
    })


    return (
        <div className={props.class}>
            <div className="contain fadeUp">
                <h1 className='projects'>Projects {props.Ppage}</h1>
            </div>
            <div className="pList">
                <Block>

                <div className="flexwrap impProject fadeUp block">
                    <div className='pimg' style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./img/foodys.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp highlight'>Foodys</h1>
                        <p className='fadeUp ppa '>
                              This is a dynamic food ordering platform built using the <span className='highlight'>MERN</span>   stack (MongoDB, Express, React, Node.js) for a seamless, 
                              responsive user experience. The front-end is powered by React with Vite, ensuring fast load times and smooth interactions.
                               Users can register, log in, and enjoy secure verification processes for personalized accounts. To handle transactions, I’ve 
                               integrated Razorpay for secure, real-time payments, making the checkout process smooth and reliable. The website is deployed 
                               on OnRender, ensuring scalability and efficient hosting. 


                        </p>
                        <div className='pLink fadeUp jcs'>
                            <a href="https://github.com/ranveer2106/food-order-website"><i className="fab fa-github logos fadeUp" style={{ fontSize: "33px", marginRight: "1rem" }}></i></a>
                            <a href="https://foodys.onrender.com/"><i className=" fa fa-external-link logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                        </div>
                    </div>
                </div>
                </Block>
                <Block>
                <div className=" impProject fadeUp projectEven block">
                    <div style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp highlight'>Weatheria</h1>
                        <p className='fadeUp ppa '>
                            You need to stay up to date with the weather around you. This is a modern-day Weather website. I used the <span className='highlight'>Open-meteo API </span>  to fetch data. I am Currently improving it adding new features each day. I used <span className='highlight'> Reactjs</span> and <span className='highlight'> TailwindCss</span> in this Project It Forecast the weather of your <span className='highlight'>Current location</span>  and some popular cities. It also tells the climate of the upcoming week.
                        </p>
                        <div className='pLink fadeUp jcs'>
                            <a href="https://github.com/ranveer2106/weather"><i className="fab fa-github logos fadeUp" style={{ fontSize: "33px", marginRight: "1rem" }}></i></a>
                            <a href="https://ranveer2106.github.io/weather/"><i className=" fa fa-external-link logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                        </div>
                    </div>
                    <div className='pimg' style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./img/ww2.png')} alt="h" />
                    </div>
                </div>
                </Block>
                <Block>
                    
                <div className={`flexwrap impProject fadeUp block`}>
                    <div className='pimg' style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./img/pw.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext p2" id='p2'>
                        <h1 className='fadeUp highlight'>Portfolio Website</h1>
                        <p className='fadeUp ppa' > I used ReactJS to this Website. This is a Fully <span className='highlight'> Responsive Website</span>. I made this as simple as possible for the user to navigate through. I used
                            <span className='highlight'> Netlify </span> to Host this website. </p>
                        <div className='pLink fadeUp jcs' style={{ justifyContent: "start" }}>
                            <a href="https://github.com/ranveer2106/website"><i className="fab fa-github logos fadeUp" style={{ fontSize: "33px", marginRight: "1rem" }}></i></a>
                            <a href="https://ranvirbhatti.netlify.app/"><i className=" fa fa-external-link logos fadeUp" style={{ fontSize: "33px" }}></i></a>
                        </div>
                    </div>

                    
                </div>
                </Block>

                <Block>

                <div className={` ${props.appear} block fadeUp projectEven`}>
                    
                    <div style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp highlight'>News Chimp</h1>
                        <p className='fadeUp ppa'>You need to be aware of what's going on in the world So I made News Chimp. Armed with Latest features I made this website with<span className='highlight'> News API </span>. I tells you news in <span className='highlight'> Real Time </span> . News Chimp is completly Responsive website.</p>
                        <div className='pLink fadeUp jcs'>
                            <a href="https://github.com/ranveer2106/news-chimp"><i className="fab fa-github logos fadeUp" style={{ fontSize: "33px", marginRight: "1rem" }}></i></a>

                        </div>
                    </div>
                    <div className='pimg' style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./img/nc.png')} alt="h" />
                    </div>
                </div>
                </Block>
                <Block>

                <div className={`flexwrap ${props.appear} block`}>
                    <div className='pimg' style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./img/tdl.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext p2" id='p2'>
                        <h1 className='fadeUp highlight'>To-do list</h1>
                        <p className='fadeUp ppa' >Forgeting your Task and let this free website Remember the tasks which are left unfinished and Focus on the Work Ahead of you. Filled with beautiful colors and a <span className='highlight'> Simple User interface </span></p>
                        <div className='pLink fadeUp' style={{ justifyContent: "start" }}>
                            <a href="https://github.com/ranveer2106/to-do-list"><i className="fab fa-github logos fadeUp" style={{ fontSize: "33px", marginRight: "1rem" }}></i></a>
                        </div>
                    </div>

                    
                </div>
                </Block>
                <Block>

                <div className={` ${props.appear} projectEven block`}>
                    
                    <div  style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp highlight'>Text editor</h1>
                        <p className='fadeUp ppa'>Well some times before publishing something you to change some things so you need small tools . this website is <span className='highlight'> very useful </span>for university students for their assignments as well  working profesional. Currently I'm working on this so feel free to drop your <span className='highlight'> suggestion</span>   on any of my social handles.</p>
                        <div className='pLink fadeUp jcs'>
                            <a href="https://github.com/ranveer2106/text-modifier"><i className="fab fa-github logos fadeUp" style={{ fontSize: "33px", marginRight: "1rem" }}></i></a>
                        </div>
                    </div>
                    <div className='pimg' style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./img/tm.png')} alt="h" />
                    </div>
                </div>
                </Block>
                <Block>

                <div className={`flexwrap ${props.appear} block`}>
                    <div className='pimg' style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./img/bj.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext p2" id='p2'>
                        <h1 className='fadeUp highlight'>Black Jack Game</h1>
                        <p className='fadeUp ppa' >Well who doesn't love , so on Sunday morning after completing my javascript course. I decided to put my skills to the test and I made this <span className='highlight'>easy</span> and <span className='highlight'> Fun</span> Black Jack game</p>
                        <div className='pLink fadeUp' style={{ justifyContent: "start" }}>
                            <a href="https://github.com/ranveer2106/Black-jack"><i className="fab fa-github logos fadeUp" style={{ fontSize: "33px", marginRight: "1rem" }}></i></a>
                        </div>
                    </div>

                    
                </div>
                </Block>


            </div>
            <Block>
                
            <div className='sLink'>
                <Link to="/projects" className="showMore fadeUp" id={props.btn}>SHOW MORE</Link>
            </div>
            </Block>
        </div>
    )
}
