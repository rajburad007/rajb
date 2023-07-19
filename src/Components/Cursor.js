import React, { useRef, useState } from "react";
import "../Styles/Cursor.css";
const Cursor = () => {
  let [x, setX] = useState("0");
  let [y, setY] = useState("0");
  function getLocation(e) {
    setX(e.clientX);
    setY(e.clientY);
  }
  window.addEventListener("mousemove", getLocation);

  return (
    <>
      <div
        className="cursor"
        id="cursor"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) rotateZ(0deg)`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
