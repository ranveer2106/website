import React from "react";
import "./component.css";

const Work = () => {
  return (
    <>
      <div className="work contain fadeUp">
        <h1 style={{ fontFamily: "Baloo Bhaijaan 2,cursive" }}>
  Work Experience
</h1>

<div className="workexp">
  <div className="clogo">
    <img
      className="workimg imgs fadeUp"
      src={require("./img/rzp.png")}
      alt="Razorpay"
    />
  </div>

  <div>
    <h4 className="highlight">Razorpay - Associate Technical Consultant</h4>
    <h4 className="highlight">Aug 2025 – Present</h4>

    <p>
      Worked closely with <span className="highlight">enterprise merchants</span>,
      engineering teams, and banking partners to resolve complex payment issues
      while identifying <span className="highlight">product gaps</span> and
      improvement opportunities. Analyzed transaction logs, SQL data, and API
      responses to diagnose failures, translate customer feedback into technical
      requirements, and drive cross-functional collaboration across product,
      engineering, and business teams. Supported merchants including
      <span className="highlight"> Bharat Petroleum</span>,
      <span className="highlight"> Aditya Birla Group</span>, and
      <span className="highlight"> PUMA</span>, contributing to a
      <span className="highlight"> 95% merchant satisfaction rate</span>.
    </p>
  </div>
</div>

<div className="workexp">
  <div className="clogo">
    <img
      className="workimg imgs fadeUp"
      src={require("./img/sjain.jpg")}
      alt="Sjain Ventures"
    />
  </div>

  <div>
    <h4 className="highlight">Sjain Ventures - Software Development Engineer Intern</h4>
    <h4 className="highlight">Sep 2024 – Apr 2025</h4>

    <p>
      Built and optimized <span className="highlight">MERN stack</span> web
      applications with a focus on performance, security, and user experience.
      Developed responsive interfaces, integrated
      <span className="highlight"> REST APIs</span>, implemented authentication
      and payment workflows, and collaborated with cross-functional teams to
      deliver scalable solutions that improved application performance by nearly
      <span className="highlight"> 20%</span>.
    </p>
  </div>
</div>
        
      </div>
    </>
  );
};

export default Work;
