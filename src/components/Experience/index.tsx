import React from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceRow from "./ExperienceRow";

const data = [
  {
    id: 1,
    url: "/images/experience/mainframelabs.png",
    description:
      "Worked with React JS, Next JS and Mongo DB for extensive work on the frontend and database maangement for a robust Ed-Tech project.",
    org: "Mainframe Labs Ltd.",
    position: "Junior Software Engineer",
  },
  {
    id: 2,
    url: "/images/experience/deepchainlabs.png",
    description:
      "Worked with Laravel and Laravel Livewire for creating robust, interactive websites for clients for satisfactory outputs.",
    position: "Research and Development Intern",
    org: "DeepChain Labs",
  },
];

const index = () => {
  return (
    <div style={{ margin: "120px auto 0 auto" }}>
      <div className="Header">EXPERIENCE</div>
      {/*---------------------------------------*/}
      {/* <ExperienceRow /> */}
      {/*---------------------------------------*/}
      {data.map(({ id, url, description, org, position }) => {
        return (
          <ExperienceRow
            key={id}
            org={org}
            position={position}
            description={description}
            url={url}
          />
        );
      })}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "65%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "44%",
            justifyContent: "right",
            padding: "55px 0px 0px 0px",
          }}
        ></div>
        <div style={{ width: "12%" }}>
          <div
            style={{
              width: "10px",
              minWidth: "10px",
              backgroundColor: "#5BC0DE",
              height: "230px",
              margin: "0 auto",
            }}
          >
            <ExperienceCard
              url="/images/experience/deepchainlabs.png"
              name="Mainframe Labs"
            />
          </div>
        </div>
        <div
          style={{
            width: "44%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            padding: "55px 0px 0px 0px",
          }}
        >
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "transparent",
              borderRight: "50px solid #155365",
              borderTop: "20px solid transparent",
              borderBottom: "20px solid transparent",
              width: "0",
              height: "0",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#155365",
              width: "300px",
              borderRadius: "5px",
              height: "150px",
            }}
          >
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#FFFFFF",
                }}
              >
                DeepChain Labs
              </div>
              <div
                style={{ color: "#BEEBF9", padding: "5px 0", fontSize: "17px" }}
              >
                Research and Development Intern
              </div>
              <div
                style={{
                  fontSize: "17px",
                  color: "#FFFFFF",
                  paddingRight: "10px",
                  textAlign: "justify",
                }}
              >
                Worked with Laravel and Laravel Livewire for creating robust,
                interactive websites for clients for satisfactory outputs.
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default index;
