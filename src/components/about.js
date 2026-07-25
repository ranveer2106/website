import React from "react";
import Block from "./block";

export default function About() {
  return (
    <>
      <div className="container fadeUp" id="about">
        <Block>
          <h1 className="about">About me</h1>
        </Block>
        <Block>
          <div className="disimg">
            <img
              className="img dispimg fadeUp"
              src={require("./round2.png")}
              alt="h"
            />
          </div>
        </Block>
        <Block>
          <div className="fadeUp">
            <h3 className="aboutpara">
              I work closely with enterprise merchants,{" "}
              <span className="highlight">engineering teams</span>, and banking
              partners to identify{" "}
              <span className="highlight">product gaps</span>, analyze payment
              systems, and improve{" "}
              <span className="highlight">user experiences</span>. My background
              in software engineering and technical consulting gives me a strong
              foundation in <span className="highlight">SQL</span>, APIs, data
              analysis, and full-stack development. To strengthen my product
              skills, I completed Airtribe's{" "}
              <span className="highlight">
                AI-First Product Management Program
              </span>
              , where I worked on user research, PRDs, roadmapping, and{" "}
              <span className="highlight">GTM strategy</span>. I enjoy
              collaborating with{" "}
              <span className="highlight">cross-functional teams</span>, making{" "}
              <span className="highlight">data-driven decisions</span>, and
              turning customer insights into impactful{" "}
              <span className="highlight">product solutions</span>. I'm
              particularly interested in building{" "}
              <span className="highlight">AI</span>, fintech, and consumer
              products that solve real-world problems at scale.
            </h3>
          </div>
        </Block>
        <Block>
          <h1 className="tech">Technologies & Skills</h1>
        </Block>

        <div className="skills">
          <Block>
            <div className="skill">
              <ul>
                <li>Product Management</li>
                <li>SQL</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>REST APIs</li>
                <li>Node.js</li>
              </ul>
            </div>
          </Block>

          <Block>
            <div className="skill">
              <ul>
                <li>Stakeholder Management</li>
                <li>AI / LLMs</li>
                <li>React.js</li>
                <li>Full stack web development</li>
                <li>Git/Github</li>
                <li>Figma/Lovable.dev</li>
              </ul>
            </div>
          </Block>
        </div>
      </div>
    </>
  );
}
