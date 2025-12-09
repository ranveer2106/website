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
              alt="h"
            />
          </div>
          <div>
            <h4 className="highlight">Razorpay</h4>
            <h4 className="highlight">Associate technical consultant</h4>
            <h4 className="highlight">AUG 2025 - Present </h4>
            <p>
              Developed backend services & automation scripts using Node.js and
              GO to support efficient payment processing and reduce manual
              intervention by the user Collaborated with cross-functional teams
              to enhance APIs and SDKs for merchant onboarding, reducing
              integration time by 30% Analyzed and optimized system performance
              to ensure high availability and reliability of the payment gateway
              for millions of transactions. Led integration projects for
              high-profile clients, providing tailored configurations and
              troubleshooting complex issues, contributing to a 95% Success rate
            </p>
          </div>
        </div>
        <div className="workexp">
          <div className="clogo">
            <img
              className="workimg imgs fadeUp"
              src={require("./img/sjain.jpg")}
              alt="h"
            />
          </div>
          <div>
            <h2 className="highlight">Sjain Ventures</h2>
            <h4 className="highlight">Intern</h4>
            <h4 className="highlight">Sep 2024 - Present </h4>
            <p>
              Collaborated with cross-functional teams to design, develop, and
              deploy web applications, ensuring high performance and
              responsiveness. Utilized modern web technologies such as HTML,
              CSS, JavaScript, and frameworks like React.js to build
              user-friendly interfaces. Integrated backend APIs with frontend
              interfaces to implement dynamic features and seamless data flow.
              Conducted testing and debugging to ensure website functionality
              and resolved issues to enhance user experience. Gained experience
              in version control systems like Git and collaborative development
              workflows.{" "}
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Work;
