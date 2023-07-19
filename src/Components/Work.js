import React from "react";
import "../Styles/Work.css";
import code from "../Icons/codeIcon.png";
const Work = () => {
  function Addwork(head, details, imgSrc) {
    return (
      <a
        href=""
        className="workLink"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="worklinkBefore">
          <h2>{head}</h2>
          <p>{details}</p>
        </div>
        <img src={imgSrc} width="250px" alt="" />
      </a>
    );
  }
  return (
    <div className="workSection" id="/work">
      <h1>Work</h1>
      <div className="workTabs">{Addwork("UI UX", "ASDASD", code)}</div>
      {/* <a
        href=""
        className="moreWork"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <button>More work(3)</button>
      </a> */}
    </div>
  );
};

export default Work;
