import React from "react";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import { useEffect } from "react";
import Experience from "./experience";
import Block from "./block";
import Work from "./work";

function Body(props) {
  useEffect(() => {
    document.title = `${props.title}`;
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="container">
        <Block>
          {/* <div id='text'>
                        <Block>

                            <div className="l1 fadeUp ">Hi my name is Ranvir</div>
                        </Block>
                        <Block>

                            <div className="l2 fadeUp ">I build Stuff for the internet</div>
                        </Block>
                        <Block>

                            <div className="l3 fadeUp ">I'm a <span className="highlight"> Software Engineer </span>. I like to build <span className="highlight">
                                Websites</span>  and play with new <span className="highlight">Technology</span>. I love working on  projects .I also help local businesses in taking their business online.
                                 I love to work on <span className="highlight">Javascript</span>, <span className="highlight">Python</span> ,<span className="highlight">Go</span>  and <span className="highlight">
                                    C++</span>. I'm Currently pursuing <span className='highlight'>B.tech Degree</span> in <span className='highlight'>Computer Science</span> At VIT</div>
                        </Block>
                    </div> */}
          <div id="text">
            <Block>
              <div className="l1 fadeUp">
                Hi my name is Ranvir
              </div>
            </Block>

            <Block>
              <div className="l2 fadeUp">
                I ask questions, challenge assumptions, and build better products.
              </div>
            </Block>

            <Block>
              <div className="l3 fadeUp">
                I work at the intersection of{" "}
                <span className="highlight">engineering</span>,{" "}
                <span className="highlight">business</span>, and{" "}
                <span className="highlight">enterprise customers</span> to
                identify product opportunities and improve user experiences.
                Passionate about{" "}
                <span className="highlight">Product Management</span>, I
                leverage <span className="highlight">SQL</span>,{" "}
                <span className="highlight">APIs</span>,{" "}
                <span className="highlight">AI</span>, and{" "}
                <span className="highlight">data-driven insights</span> to build
                impactful products that solve real-world problems.
              </div>
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
  );
}

export default Body;
