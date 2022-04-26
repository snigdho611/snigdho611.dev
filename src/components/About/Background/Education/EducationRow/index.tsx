import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import EducationCard from "./EducationCard";

export interface EducationRowProps {
  id?: number;
  name?: string;
  imageURL?: string;
  degree?: string;
  time?: string;
  align?: number;
}

const EducationRow: React.FC<EducationRowProps> = ({
  name,
  imageURL,
  degree,
  time,
  align,
}) => {
  return align && align % 2 == 0 ? (
    <div className="flex flex-row mx-auto">
      <div className="" style={{ width: "49%" }} />
      <div className="bg-cyan-800 mx-3" style={{ width: "2%" }} />
      <div className="flex flex-row my-5" style={{ width: "49%" }}>
        <div
          className="w-3/12"
          style={{ justifyItems: "center", justifyContent: "center" }}
        >
          <EducationCard imageURL={imageURL || ""} />
        </div>
        <div className="pl-5 w-9/12">
          <div className="text-white ">
            <div className="text-xl font-bold">{name || "American"}</div>
            <div className="text-medium font-bold my-2">{degree || "BSc"}</div>
            <div className="text-small italic my-2">{time || "March 22"}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-row mx-auto">
      <div className="flex flex-row my-5" style={{ width: "49%" }}>
        <div className="pl-5 w-9/12">
          <div className="text-white ">
            <div className="text-xl font-bold">{name || "American"}</div>
            <div className="text-medium font-bold my-2">{degree || "BSc"}</div>
            <div className="text-small italic my-2">{time || "March 22"}</div>
          </div>
        </div>
        <div
          className="w-3/12"
          style={{ justifyItems: "center", justifyContent: "center" }}
        >
          <EducationCard imageURL={imageURL || ""} />
        </div>
      </div>
      <div className="bg-cyan-800 mx-3" style={{ width: "2%" }} />
      <div className="" style={{ width: "49%" }} />
    </div>
  );
};

export default EducationRow;

{
  /* <div
  style={{
    minWidth: "10px",
    width: "10px",
    minHeight: "100%",
    backgroundColor: "#5BC0DE",
    float: "right",
  }}
/> */
}
{
  /* <div
  style={{
    height: "10px",
    minHeight: "10px",
    minWidth: "60px",
    width: "60px",
    backgroundColor: "#5BC0DE",
  }}
></div> */
}
