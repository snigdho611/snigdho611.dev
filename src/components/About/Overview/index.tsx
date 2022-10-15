import React, { useEffect, useRef } from "react";

const Overview = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto w-8/12 flex flex-row mt-40" ref={baseRef}>
      <div className="w-fit mx-auto">
        <div
          className="bg-cover w-56 h-56 rounded-full mx-auto my-5"
          style={{
            backgroundImage: "url(/images/profilepic.jpg)",
          }}
        />
      </div>
      <div className="w-9/12 mx-auto">
        <h1 className="text-4xl text-cyan-400 text-center my-4">Overview</h1>
        <div className="text-justify w-5/6 mx-auto text-cyan-100">
          <p>
            A Professional Software Developer with experience in the industry. Avid in both frontend
            and backend development technologies, the main domain of expertise are web development,
            databases, problem solving, desktop development and responsive designing.
          </p>
          <br />
          <p>
            Additionally, academically learned with Machine Learning, Data Mining and Algorithms
            that contribute to problem solving skills. Can easily adapt to technologies of all kinds
            and good at thinking on the go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
