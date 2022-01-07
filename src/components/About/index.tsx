import React from "react";

const index = () => {
  return (
    <div>
      <div
        style={{
          padding: "120px",
          display: "flex",
          flexDirection: "row",
          //   border: "1px solid white",
        }}
      >
        <div
          style={{
            borderRadius: "100%",
            backgroundColor: "#FFF",
            width: "210px",
            minWidth: "210px",
            height: "210px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#5BC0DE",
            height: "500px",
            width: "15px",
          }}
        ></div>
        <div>
          <div style={{ color: "#5BC0DE", fontWeight: "bold" }}>ABOUT</div>
          <div style={{ color: "#BEEBF9" }}>
            An efficient Professional Software Developer with experience in the
            industry. Avid in both frontend and backend development
            technologies, aspiring for contribution to the world of computer
            science and technology. The main domain of expertise are web
            development, databases, problem solving, desktop development and
            responsive designing.
            <br />
            <br />
            Additionally, academically learned with Machine Learning, Data
            Mining and Algorithms that contribute to problem solving skills. Can
            easily adapt to technologies of all kinds and good at thinking on
            the go.
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
