import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef, useEffect } from "react";

const Test = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: 360, x: 500, duration: 1 });
  });
  return (
    <div
      style={{
        fontSize: "25px",
        color: "white",
        width: "100px",
        height: "100px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "var(--green)",
        fontWeight: "600",
        // color: "var(--light)",
      }}
      className="box"
      ref={boxRef}
    >
      Hello
    </div>
  );
};

export default Test;
