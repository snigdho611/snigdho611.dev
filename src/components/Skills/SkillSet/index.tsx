import React from "react";
import SkillBox from "./SkillBox";

interface SkillSetProps {
  group: string;
}

const index: React.FC<SkillSetProps> = ({ group }) => {
  if (group == "Languages") {
    return (
      <>
        <div
          style={{
            border: "3px dotted #0D7998",
            width: "65%",
            margin: "0 auto",
          }}
        >
          <div style={{ color: "#FFD83A", fontSize: "30px" }}>Languages</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "15px ",
            }}
          >
            <SkillBox name="JavaScript" url="/images/skills/javascript.svg" />
            <SkillBox name="TypeScript" url="/images/skills/typescript.svg" />
            <SkillBox name="Python" url="/images/skills/python.svg" />
            <SkillBox name="PHP" url="/images/skills/php.svg" />
            <SkillBox name="C++" url="/images/skills/cpp.svg" />
            <SkillBox name="C#" url="/images/skills/csharp.svg" />
          </div>
        </div>
      </>
    );
  } else if ((group = "FrameWorks")) {
    return (
      <>
        <div
          style={{
            // border: "3px dotted #0D7998",
            width: "65%",
            maxWidth: "65%",
            minWidth: "65%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <div
            style={{
              border: "3px dotted #0D7998",
              width: "55%",
              marginLeft: "5px",
            }}
          >
            <div style={{ color: "#B152EB", fontSize: "30px" }}>Frameworks</div>
            <div
              style={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ marginLeft: "10px" }} />
              <div style={{ border: "2px solid #0D7998" }}>
                <div style={{ color: "#00D8FF", fontSize: "25px" }}>
                  Frontend
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <SkillBox name="React JS" url="/images/skills/react.svg" />
                    <SkillBox name="Vue JS" url="/images/skills/vue.svg" />
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "20px" }} />
              <div style={{ border: "2px solid #0D7998" }}>
                <div style={{ color: "#C0323A", fontSize: "25px" }}>
                  Backend
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <SkillBox name="Laravel" url="/images/skills/laravel.svg" />
                    <SkillBox name="Node JS" url="/images/skills/node.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              border: "3px dotted #0D7998",
              width: "42%",
              paddingLeft: "10px",
              marginLeft: "10px",
            }}
          >
            <div style={{ color: "#50B660", fontSize: "30px" }}>Databases</div>
            <div
              style={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ marginLeft: "10px" }} />
              <div style={{ color: "#00D8FF", fontSize: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "35px",
                  }}
                >
                  <SkillBox name="Mongo DB" url="/images/skills/mongo.svg" />
                  <SkillBox name="MySQL" url="/images/skills/mysql.svg" />
                  <SkillBox name="Oracle" url="/images/skills/oracle.svg" />
                </div>
              </div>
              <div style={{ marginLeft: "20px" }} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default index;
