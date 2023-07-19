import React, { useEffect } from "react";
import "../Styles/Home.css";
import Navigator from "../Components/Navigation .js";
import Icon from "../Icons/scrollSvg.svg";
import Cursor from "../Components/Cursor.js";
import { Link } from "react-scroll";
import Bg from "../Components/backGround.js";
const Home = () => {
  let skills = ["UI DESIGNER", "FRONTEND DEV.", "REACT DEV.", "UX RESEARCHER"];
  let val = 0;
  setInterval(() => {
    ++val;
    if (val < skills.length) {
      document.getElementById("typeWriter").innerHTML = skills[val];
    } else if (val >= skills.length) {
      val = 0;
      document.getElementById("typeWriter").innerHTML = skills[val];
    }
  }, 5000);
  function scrollBy() {
    console.log(0);
    window.scrollBy(0, 800);
  }

  return (
    <>
      <Cursor />
      <Bg />

      <div className="landingSection" id="/">
        <div className="navBar">
          <h3 className="headText">Raj Burad</h3>

          <Navigator />
        </div>
        <div className="mainText">
          <p>Hi, I am</p>
          <p className="typeWriter" id="typeWriter">
            {skills[val]}
          </p>
        </div>
        <img
          className="scrollMouse"
          src={Icon}
          alt="mouse"
          onClick={scrollBy}
        />
      </div>
    </>
  );
};

export default Home;
