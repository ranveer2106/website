import React from "react";
import Block from "./block";

const Cpage = () => {
  return (
    <>
      <div className="contain fadeUp contactP">
        <Block>
          <h1>Contact Details</h1>
          <p style={{ fontSize: "20px" }}>
            I'm currently looking for opporunities
          </p>
          <p style={{ fontSize: "20px" }}>
            Whether you have an opportunity, a project idea, or just want to
            connect, my inbox is always open. I'd love to hear from you!
          </p>{" "}
          <p style={{ color: "#00FFF5", fontSize: "20px " }}>
            MY Email - ranvir.s.bhatti@gmail.com
          </p>
          <p style={{ color: "#00FFF5", fontSize: "20px " }}>
            Contact No. - +91 6261295658
          </p>
          <p style={{ color: "#00FFF5", fontSize: "20px" }}>
            Github - @ranveer2106
          </p>
        </Block>
      </div>
    </>
  );
};

export default Cpage;
