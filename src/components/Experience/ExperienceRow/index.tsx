import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";

export interface ExperienceRowProps {
  id?: number;
  name?: string;
  imageURL?: string;
  degree?: string;
  time?: string;
  siteURL?: string;
}

const ExperienceRow: React.FC<ExperienceRowProps> = ({
  name,
  imageURL,
  degree,
  time,
  id,
  siteURL,
}) => {
  const rightElRef = useRef<any>();
  const leftElRef = useRef<any>();
  const barRef = useRef<any>();

  return id && id % 2 == 0 ? (
    <div className="flex flex-row mx-auto">
      <div className="" style={{ width: "49%" }} />
      <div className="bg-cyan-800 mx-3" style={{ width: "2%" }} ref={barRef} />
      <div className="flex flex-row my-5" style={{ width: "49%" }} ref={rightElRef}>
        <Link href={siteURL || "#"} passHref>
          <div className="w-3/12 cursor-pointer">
            <ExperienceCard imageURL={imageURL || ""} />
          </div>
        </Link>
        <div className="pl-5 w-9/12">
          <div className="text-white ">
            <div className="text-xl font-bold">{name || "N/A"}</div>
            <div className="text-medium font-bold my-2">{degree || "N/A"}</div>
            <div className="text-small italic my-2">{time || "N/A"}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-row mx-auto">
      <div className="flex flex-row my-5" style={{ width: "49%" }} ref={leftElRef}>
        <div className="pl-5 w-9/12">
          <div className="text-white ">
            <div className="text-xl font-bold">{name || "N/A"}</div>
            <div className="text-medium font-bold my-2">{degree || "N/A"}</div>
            <div className="text-small italic my-2">{time || "N/A"}</div>
          </div>
        </div>
        <Link href={siteURL || "#"} passHref>
          <div className="w-3/12 cursor-pointer">
            <ExperienceCard imageURL={imageURL || ""} />
          </div>
        </Link>
      </div>
      <div className="bg-cyan-800 mx-3" style={{ width: "2%" }} ref={barRef} />
      <div className="" style={{ width: "49%" }} />
    </div>
  );
};

export default ExperienceRow;
