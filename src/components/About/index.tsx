import React from "react";

const index = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "120px",
          marginLeft: "14%",
          display: "flex",
          flexDirection: "row",
          width: "74%",
        }}
      >
        <div
          style={{
            borderRadius: "100%",
            backgroundColor: "#FFF",
            width: "210px",
            minWidth: "210px",
            height: "210px",
            backgroundImage: "url('/profilepic.jpg')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#5BC0DE",
            height: "470px",
            width: "25px",
            margin: "0 90px",
          }}
        ></div>
        <div>
          <div
            style={{
              color: "#5BC0DE",
              fontWeight: "bold",
              fontSize: "32px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            ABOUT
          </div>
          <div
            style={{ color: "#BEEBF9", fontSize: "22px", textAlign: "justify" }}
          >
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
