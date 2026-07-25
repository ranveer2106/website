import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./component.css";
import Block from "./block";

export default function Projects(props) {
  useEffect(() => {
    document.title = `${props.title}`;
    window.scrollTo(0, 0);
  });

  return (
    <div className={props.class}>
      <div className="contain fadeUp">
        <h1 className="projects">Projects {props.Ppage}</h1>
      </div>
      <div className="pList">
        {/* ===================== Stable Money ===================== */}

        <Block>
          <div className="pjt flexwrap impProject fadeUp block">
            <div className="pimg" style={{ display: "inline-block" }}>
              <img
                className="imgs fadeUp"
                src={require("./img/stablemoney.png")}
                alt="Stable Money"
              />
            </div>

            <div style={{ display: "inline-block" }} className="Ptext">
              <h1 className="fadeUp highlight">
                ⭐ Featured Case Study • Stable Money
              </h1>

              <p className="fadeUp ppa">
                Led a <span className="highlight">Product Management</span> case
                study to improve repeat fixed-income investing by identifying
                <span className="highlight"> 5 investor personas</span> and
                analyzing the key reasons behind low reinvestment. Designed a
                <span className="highlight"> phased GTM strategy</span>, built a
                <span className="highlight">
                  {" "}
                  rule-based FD reinvestment scoring tool
                </span>
                , and created interactive prototypes using
                <span className="highlight"> Lovable</span>.
              </p>

              <div className="pLink fadeUp jcs">
                <a
                  href="https://drive.google.com/file/d/1sIuu6jo7BRR1EQipt9t66Rr651QZHd_5/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-external-link logos fadeUp"
                    style={{ fontSize: "33px", marginRight: "1rem" }}
                  ></i>
                </a>

                <a
                  href="https://stable-money-flows.lovable.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-external-link logos fadeUp"
                    style={{ fontSize: "33px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </Block>

        {/* ===================== Suno AI ===================== */}

        <Block>
          <div className="pjt impProject fadeUp projectEven block">
            <div style={{ display: "inline-block" }} className="Ptext">
              <h1 className="fadeUp highlight">
                ⭐ Featured Case Study • Suno AI
              </h1>

              <p className="fadeUp ppa">
                Led a <span className="highlight">Product Management</span>{" "}
                capstone focused on India's growth for Suno AI by identifying
                <span className="highlight"> 8 user personas</span>, proposing a
                localized
                <span className="highlight"> ₹99 pricing strategy</span>,
                designing a
                <span className="highlight"> Tier 1–3 GTM strategy</span>, and
                building a
                <span className="highlight">
                  {" "}
                  creator churn prediction tool
                </span>{" "}
                with interactive prototypes using
                <span className="highlight"> Lovable</span>. Conducted
                competitor analysis across
                <span className="highlight"> Spotify</span>,
                <span className="highlight"> ElevenLabs</span>, and
                <span className="highlight"> Boomy</span> to identify
                localization, retention, and monetization opportunities for the
                Indian market.
              </p>

              <div className="pLink fadeUp jcs">
                <a
                  href="https://drive.google.com/file/d/1cAksuJTtxgTxw3W1aToQhsKNDi0O4ioy/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-external-link logos fadeUp"
                    style={{ fontSize: "33px", marginRight: "1rem" }}
                  ></i>
                </a>

                <a
                  href="https://suno-beats-india.lovable.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-external-link logos fadeUp"
                    style={{ fontSize: "33px" }}
                  ></i>
                </a>
              </div>
            </div>

            <div className="pimg" style={{ display: "inline-block" }}>
              <img
                className="imgs fadeUp"
                src={require("./img/suno.png")}
                alt="Suno AI"
              />
            </div>
          </div>
        </Block>

        {/* ===================== Foodys ===================== */}

        <Block>
          <div className="pjt flexwrap impProject fadeUp block">
            <div className="pimg" style={{ display: "inline-block" }}>
              <img
                className="imgs fadeUp"
                src={require("./img/foodys.png")}
                alt="Foodys"
              />
            </div>

            <div style={{ display: "inline-block" }} className="Ptext">
              <h1 className="fadeUp highlight">Foodys</h1>

              <p className="fadeUp ppa">
                A full-stack food ordering platform built using the
                <span className="highlight"> MERN Stack</span>. Features secure
                authentication,
                <span className="highlight"> Razorpay payment integration</span>
                , responsive UI, and scalable deployment on
                <span className="highlight"> Render</span>, delivering a
                seamless ordering experience. Designed a scalable backend with
                <span className="highlight"> REST APIs</span>, efficient
                database operations, and a modular architecture to support
                reliable order management and payment workflows.
              </p>

              <div className="pLink fadeUp jcs">
                <a href="https://github.com/ranveer2106/food-order-website">
                  <i
                    className="fab fa-github logos fadeUp"
                    style={{ fontSize: "33px", marginRight: "1rem" }}
                  ></i>
                </a>

                <a href="https://foodys.onrender.com/">
                  <i
                    className="fa fa-external-link logos fadeUp"
                    style={{ fontSize: "33px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </Block>

        {props.home ? null : (
          <>
            {/* ===================== Weatheria ===================== */}

            <Block>
              <div className={`pjt fadeUp projectEven ${props.appear} block`}>
                <div style={{ display: "inline-block" }} className="Ptext">
                  <h1 className="fadeUp highlight">Weatheria</h1>

                  <p className="fadeUp ppa">
                    A weather application built with
                    <span className="highlight"> React.js</span> and
                    <span className="highlight"> Tailwind CSS</span> using the
                    <span className="highlight"> Open-Meteo API</span>. Provides
                    forecasts for your location along with a detailed weekly
                    outlook. Implemented
                    <span className="highlight">
                      {" "}
                      real-time API integration
                    </span>
                    , location-based weather retrieval, and a responsive
                    interface to deliver a smooth user experience across
                    devices.
                  </p>

                  <div className="pLink fadeUp jcs">
                    <a href="https://github.com/ranveer2106/weather">
                      <i
                        className="fab fa-github logos fadeUp"
                        style={{ fontSize: "33px", marginRight: "1rem" }}
                      ></i>
                    </a>

                    <a href="https://ranveer2106.github.io/weather/">
                      <i
                        className="fa fa-external-link logos fadeUp"
                        style={{ fontSize: "33px" }}
                      ></i>
                    </a>
                  </div>
                </div>

                <div className="pimg" style={{ display: "inline-block" }}>
                  <img
                    className="imgs fadeUp"
                    src={require("./img/ww2.png")}
                    alt="Weatheria"
                  />
                </div>
              </div>
            </Block>

            {/* ===================== Portfolio ===================== */}

            <Block>
              <div className={`pjt flexwrap fadeUp ${props.appear} block`}>
                <div className="pimg" style={{ display: "inline-block" }}>
                  <img
                    className="imgs fadeUp"
                    src={require("./img/pw.png")}
                    alt="Portfolio"
                  />
                </div>

                <div
                  style={{ display: "inline-block" }}
                  className="Ptext p2"
                  id="p2"
                >
                  <h1 className="fadeUp highlight">Portfolio Website</h1>

                  <p className="fadeUp ppa">
                    Designed and developed my personal portfolio using
                    <span className="highlight"> React.js</span> to showcase my
                    Product Management journey, technical skills, and featured
                    case studies with a
                    <span className="highlight"> clean user experience</span>,
                    responsive design, and smooth animations.
                  </p>

                  <div
                    className="pLink fadeUp jcs"
                    style={{ justifyContent: "start" }}
                  >
                    <a href="https://github.com/ranveer2106/website">
                      <i
                        className="fab fa-github logos fadeUp"
                        style={{ fontSize: "33px", marginRight: "1rem" }}
                      ></i>
                    </a>

                    <a href="https://ranvirbhatti.netlify.app/">
                      <i
                        className="fa fa-external-link logos fadeUp"
                        style={{ fontSize: "33px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </Block>

            {/* ===================== News Chimp ===================== */}

            <Block>
              <div className={`pjt ${props.appear} block fadeUp projectEven`}>
                <div style={{ display: "inline-block" }} className="Ptext">
                  <h1 className="fadeUp highlight">News Chimp</h1>

                  <p className="fadeUp ppa">
                    A responsive news platform powered by the
                    <span className="highlight"> News API</span> that delivers
                    <span className="highlight"> real-time news</span> across
                    multiple categories with a clean and intuitive user
                    interface built using
                    <span className="highlight"> React.js</span>. Implemented
                    dynamic category filtering, asynchronous API requests, and
                    responsive layouts to provide a fast and seamless news
                    browsing experience across devices.
                  </p>

                  <div className="pLink fadeUp jcs">
                    <a href="https://github.com/ranveer2106/news-chimp">
                      <i
                        className="fab fa-github logos fadeUp"
                        style={{ fontSize: "33px", marginRight: "1rem" }}
                      ></i>
                    </a>
                  </div>
                </div>

                <div className="pimg" style={{ display: "inline-block" }}>
                  <img
                    className="imgs fadeUp"
                    src={require("./img/nc.png")}
                    alt="News Chimp"
                  />
                </div>
              </div>
            </Block>

            {/* ===================== To-do List ===================== */}

            <Block>
              <div className={`pjt flexwrap ${props.appear} block`}>
                <div className="pimg" style={{ display: "inline-block" }}>
                  <img
                    className="imgs fadeUp"
                    src={require("./img/tdl.png")}
                    alt="To-do List"
                  />
                </div>

                <div
                  style={{ display: "inline-block" }}
                  className="Ptext p2"
                  id="p2"
                >
                  <h1 className="fadeUp highlight">To-do List</h1>

                  <p className="fadeUp ppa">
                    A simple productivity application that helps users organize
                    daily tasks with a
                    <span className="highlight"> clean UI</span>, intuitive
                    interactions, and a focus on
                    <span className="highlight"> usability</span>.
                  </p>

                  <div
                    className="pLink fadeUp"
                    style={{ justifyContent: "start" }}
                  >
                    <a href="https://github.com/ranveer2106/to-do-list">
                      <i
                        className="fab fa-github logos fadeUp"
                        style={{ fontSize: "33px", marginRight: "1rem" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </Block>

            {/* ===================== Text Editor ===================== */}

            <Block>
              <div className={`pjt ${props.appear} projectEven block`}>
                <div style={{ display: "inline-block" }} className="Ptext">
                  <h1 className="fadeUp highlight">Text Editor</h1>

                  <p className="fadeUp ppa">
                    A lightweight text utility application for editing and
                    formatting content with features designed to improve
                    <span className="highlight"> writing productivity</span>.
                    Built with a responsive interface and continuously improved
                    through user feedback.
                  </p>

                  <div className="pLink fadeUp jcs">
                    <a href="https://github.com/ranveer2106/text-modifier">
                      <i
                        className="fab fa-github logos fadeUp"
                        style={{ fontSize: "33px", marginRight: "1rem" }}
                      ></i>
                    </a>
                  </div>
                </div>

                <div className="pimg" style={{ display: "inline-block" }}>
                  <img
                    className="imgs fadeUp"
                    src={require("./img/tm.png")}
                    alt="Text Editor"
                  />
                </div>
              </div>
            </Block>

            {/* ===================== Black Jack ===================== */}

            <Block>
              <div className={`pjt flexwrap ${props.appear} block`}>
                <div className="pimg" style={{ display: "inline-block" }}>
                  <img
                    className="imgs fadeUp"
                    src={require("./img/bj.png")}
                    alt="Black Jack"
                  />
                </div>

                <div
                  style={{ display: "inline-block" }}
                  className="Ptext p2"
                  id="p2"
                >
                  <h1 className="fadeUp highlight">Black Jack Game</h1>

                  <p className="fadeUp ppa">
                    A browser-based implementation of the classic
                    <span className="highlight"> Black Jack</span> game built
                    with
                    <span className="highlight"> JavaScript</span>, featuring
                    interactive gameplay, score tracking, and responsive design.
                  </p>

                  <div
                    className="pLink fadeUp"
                    style={{ justifyContent: "start" }}
                  >
                    <a href="https://github.com/ranveer2106/Black-jack">
                      <i
                        className="fab fa-github logos fadeUp"
                        style={{ fontSize: "33px", marginRight: "1rem" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </Block>
          </>
        )}
      </div>

      <Block>
        <div className="sLink">
          <Link to="/projects" className="showMore fadeUp" id={props.btn}>
            SHOW MORE
          </Link>
        </div>
      </Block>
    </div>
  );
}
