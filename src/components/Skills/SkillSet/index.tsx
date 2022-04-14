import React, { useRef } from "react";

const index = () => {
  return (
    // <div className="text-cyan-300">
    //   <h1 className="text-3xl text-center">Frontend</h1>
    <div className="flex flex-row my-5">
      <div
        className="min-w-24 w-24 min-h-24 h-24 mx-5"
        style={{
          backgroundImage: `url('images/icons/reactjs.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>
    // </div>
  );
};

export default index;
