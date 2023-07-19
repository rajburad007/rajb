import React from "react";
import "../Styles/backGround.css";
const backGround = () => {
  function createDiv(
    axis,
    deg,
    w,
    col,
    rad,
    top,
    left,
    animation,
    opacity,
    bgCol
  ) {
    return (
      <div
        className="tabs"
        style={{
          transform: `rotate${axis}${deg}deg translate(10px) perspective(100px)`,
          width: `${w}px`,
          height: `${w}px`,
          backgroundColor: `${col}`,
          borderRadius: `${rad}px`,
          top: `${top}px`,
          left: `${left}px`,
          animation: `${animation} 7s ease-in-out infinite`,
          opacity: `${opacity}`,
          boxShadow: `1px 1px 10px ${bgCol}`,
          transformStyle: "preserve-3d",
          zIndex: "1",
        }}
      ></div>
    );
  }
  return (
    <>
      <div className="circles"></div>
      <div className="triangle"></div>
      <div className="pattern">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default backGround;
