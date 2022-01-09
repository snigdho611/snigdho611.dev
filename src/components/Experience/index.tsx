import React from "react";
import ExperienceCard from "./ExperienceCard";

const index = () => {
  return (
    <div style={{ margin: "120px auto 0 auto" }}>
      <div className="Header">EXPERIENCE</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   justifyContent: "center",
          width: "65%",
          border: "1px solid white",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            display: "flex",
            flexDirection: "row",
            width: "44%",
            justifyContent: "right",
            padding: "50px 0px 0px 0px",
          }}
        >
          <div
            style={{
              backgroundColor: "#155365",
              width: "300px",
              borderRadius: "5px",
              height: "150px",
            }}
          >
            <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#FFFFFF",
                }}
              >
                Mainframe Labs
              </div>
              <div
                style={{ color: "#BEEBF9", padding: "5px 0", fontSize: "17px" }}
              >
                Junior Software Engineer
              </div>
              <div
                style={{
                  //   fontWeight: "bold",
                  fontSize: "17px",
                  color: "#FFFFFF",
                }}
              >
                Worked with React JS, Next JS and Mongo DB for extensive work on
                the frontend and database maangement for a robust Ed-Tech
                project.
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "transparent",
              borderLeft: "50px solid #155365",
              borderTop: "20px solid transparent",
              borderBottom: "20px solid transparent",
              width: "0",
              height: "0",
            }}
          ></div>
        </div>
        <div style={{ border: "1px solid white", width: "12%" }}>
          <div
            style={{
              width: "15px",
              minWidth: "15px",
              backgroundColor: "#5BC0DE",
              height: "230px",
              //   position: "absolute",
              margin: "0 auto",
            }}
          >
            <ExperienceCard
              url="/images/experience/mainframelabs.png"
              name="Mainframe Labs"
            />
          </div>
        </div>
        <div style={{ border: "1px solid white", width: "44%" }}>ABC</div>
      </div>
    </div>
  );
};

export default index;
