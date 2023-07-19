import React, { useEffect, useRef, useState } from "react";
import "../Styles/Naivgation.css";
import { Link } from "react-scroll";
const Navigation = () => {
  let navBtn = useRef();
  let navigation = useRef();
  let line1 = useRef();
  let line2 = useRef();
  let menu = useRef();
  useEffect(() => {}, []);
  function showMenu() {
    if (!line1.current.classList.contains("classRot1")) {
      line1.current.classList.add("classRot1");
      line2.current.classList.add("classRot2");
      menu.current.classList.add("display");
    } else {
      line1.current.classList.remove("classRot1");
      line2.current.classList.remove("classRot2");
      menu.current.classList.remove("display");
    }
  }

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      line1.current.classList.remove("classRot1");
      line2.current.classList.remove("classRot2");
      navigation.current.classList.add("onscroll");
      menu.current.classList.remove("display");
    }
  };
  return (
    <div className="navigation" ref={navigation}>
      <div className="navigator">
        <div className="hamburger" ref={navBtn} onClick={showMenu}>
          <div className="line" ref={line1}></div>
          <div className="line" ref={line2}></div>
        </div>
      </div>
      <div className="menu" ref={menu}>
        <ul>
          <li>
            <Link to="/" spy={false} smooth={true} offset={10} duration={300}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              spy={true}
              smooth={true}
              offset={20}
              duration={300}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              spy={true}
              smooth={true}
              offset={20}
              duration={300}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              offset={20}
              duration={300}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
