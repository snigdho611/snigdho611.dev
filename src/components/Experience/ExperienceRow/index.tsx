import React from "react";
import ExperienceCard from "../ExperienceCard";

interface ExperienceRowProps {
  url: string;
  description: string;
  org: string;
  position: string;
  align: string;
}

const index: React.FC<ExperienceRowProps> = ({
  url,
  description,
  org,
  position,
  align,
}) => {
  if (align == "r") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "75%",
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
            <ExperienceCard url={url} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "44%",
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
              width: "350px",
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
                {org}
              </div>
              <div
                style={{ color: "#BEEBF9", padding: "5px 0", fontSize: "17px" }}
              >
                {position}
              </div>
              <div
                style={{
                  fontSize: "17px",
                  color: "#FFFFFF",
                  textAlign: "justify",
                }}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "75%",
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
        >
          <div
            style={{
              backgroundColor: "#155365",
              width: "350px",
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
                {org}
              </div>
              <div
                style={{ color: "#BEEBF9", padding: "5px 0", fontSize: "17px" }}
              >
                {position}
              </div>
              <div
                style={{
                  fontSize: "17px",
                  color: "#FFFFFF",
                  textAlign: "justify",
                }}
              >
                {description}
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
            <ExperienceCard url={url} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "44%",
            justifyContent: "left",
            padding: "55px 0px 0px 0px",
          }}
        ></div>
      </div>
    );
  }
};

export default index;
