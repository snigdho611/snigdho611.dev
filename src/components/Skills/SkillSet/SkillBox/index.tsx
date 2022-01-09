import React from "react";
import Image from "next/image";

interface SkillBox {
  name: string;
  url: string;
}

const index: React.FC<SkillBox> = ({ url, name }) => {
  return (
    <>
      <div style={{ width: "80px", marginLeft: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src={url} alt="JavaScript Image" height={80} width={70} />
        </div>
        <div
          style={{ color: "#5BC0DE", fontWeight: "bold", textAlign: "center" }}
        >
          {name}
        </div>
      </div>
    </>
  );
};

export default index;
