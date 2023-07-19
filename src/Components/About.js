import React, { useEffect, useRef, useState } from "react";
import UI from "../Icons/uiIcon.png";
import UX from "../Icons/uxIcon.png";
import code from "../Icons/codeIcon.png";
import "../Styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  const imgref = useRef();
  const textref = useRef();
  const skillMap = useRef();
  const Ido = useRef();
  let [myEle, setmyEle] = useState("");
  let [myMap, setMap] = useState("");
  let [ido, setIdo] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setmyEle(entry.isIntersecting);
    });
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMap(entry.isIntersecting);
    });
    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIdo(entry.isIntersecting);
    });
    observer.observe(imgref.current);
    observer1.observe(skillMap.current);
    observer2.observe(Ido.current);
  }, []);
  if (myEle) {
    imgref.current.style.transform = "translateX(0px)";
    imgref.current.style.opacity = "1";
    textref.current.style.transform = "translateX(0px)";
    textref.current.style.opacity = "1";
  }

  if (myMap) {
    skillMap.current.style.opacity = "1";
    skillMap.current.style.transform = "translateY(0px)";
  }
  if (ido) {
    Ido.current.style.opacity = "1";
  }
  function createSkill(val, heading, info, bool, left) {
    return (
      <>
        <div className="skillInfo" style={{ left: `${left}%` }}>
          {bool ? (
            <>
              <div className="circle">{val}</div>
              <div className="skills">
                <h3>{heading}</h3>
                <p className="skillIntro">{info}</p>
              </div>
            </>
          ) : (
            <>
              <div className="skills">
                <h3>{heading}</h3>
                <p className="skillIntro">{info}</p>
              </div>
              <div className="circle">{val}</div>
            </>
          )}
        </div>
      </>
    );
  }
  function whatIdo(head, srcImg, desc) {
    return (
      <div className="design" style={{ margin: "20px" }}>
        <h4>{head}</h4>
        <img src={srcImg} alt="" width="50px" />

        <p>{desc} </p>
      </div>
    );
  }
  return (
    <>
      <div className="about" id="/about">
        <h1>About me</h1>
        <div className="infoCont">
          <img
            src=""
            alt=""
            className="myImg"
            width="400px"
            ref={imgref}
            height="400px"
          />
          <div className="info" ref={textref}>
            <p>
              Hello, My name is Raj Burad. I am a Frontend Developer. Graduating
              with Bachelor's of Technology in ECE - 2024.I have completed my
              summer internship as full stack web developer in Climbax
              Entertainment Pvt. Ltd. in Delhi where i have designed and
              developed various websites.My area of interest includes drumming,
              photography, video editing. Since childhood i curious about how
              website work and the idea behind the design. I would love to help
              your company. Drop me a mail at
              <span className="email"> 14august2002rajgmail.com</span>
            </p>
            <br />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="cv"
            >
              <button className="cvBtn">Download cv</button>
            </a>
          </div>
        </div>
        <div className="skillmap" ref={skillMap}>
          {createSkill(
            "70%",
            "UI/UX DESIGN",
            "Basic UI design a an app and research behind the design.",
            true,
            "46"
          )}
          {createSkill(
            "70%",
            "FIGMA /ADOBE XD",
            "Starting with wireframes to the protyping of the application.",
            false,
            "-46"
          )}
          {createSkill(
            "100%",
            "HTML CSS",
            "Basic to advance html, css and various frameworks like bootstrap etc.",
            true,
            "46"
          )}
          {createSkill(
            "70%",
            "JAVASCRIPT",
            "Basic js to advance js including fetch api and advance ES7 concepts",
            false,
            "-46"
          )}
          {createSkill(
            "100%",
            "REACT JS",
            "Basic concepts including states,props to advanced library like hooks ,routes etc. ",
            true,
            "46"
          )}
        </div>
        <div className="whatido" ref={Ido}>
          {whatIdo(
            "UI DESIGN",
            UI,
            "Starting with a low fidelity wireframes to complex prototypinf of an application using preferd tools."
          )}
          {whatIdo(
            "UX RESEARCH",
            UX,
            "Formation of user persona and reason befind the design using feedbacks."
          )}
          {whatIdo(
            "FRONT-END DEVELOPMENT",
            code,
            "Responsive website for your company using latest frameworks and responsivness."
          )}
        </div>
      </div>
    </>
  );
};

export default About;
