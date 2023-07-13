import React, { useEffect, useRef, useState } from "react";

interface IExperience {
  company: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  url: string;
  description: string[];
}

interface IExperienceProps {
  data: IExperience[];
}

const Experience: React.FC<IExperienceProps> = ({ data }) => {
  const [activeExperience, setActiveExperience] = useState(0);
  return (
    <div className="w-3/4 mx-auto my-48 font-sans">
      <div className="flex items-center justify-between w-full my-10">
        <span className="w-1/3 text-2xl text-slate-50">Experience</span>
        <hr className="w-2/3" />
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-10">
        <div className="w-full sm:w-1/3 flex flex-col">
          {data.map(({ company }, i) => {
            return (
              <div
                key={i}
                onClick={() => setActiveExperience(i)}
                className={`border-l-2 border-white font-mono py-3 px-3 cursor-pointer hover:bg-emerald-900 transition-colors ${
                  activeExperience === i ? "text-emerald-300 border-emerald-300" : "text-slate-500"
                }`}
              >
                {company}
              </div>
            );
          })}
        </div>
        <div className="sm:w-2/3 w-full flex flex-col gap-3">
          <span className="text-emerald-300 text-xl">
            <span className="text-slate-50">{data[activeExperience].title}</span>
            <span>
              {" "}
              @ <a href={data[activeExperience].url}>{data[activeExperience].company}</a>
            </span>
          </span>
          <span className="text-slate-300">
            {data[activeExperience].timeStart} - {data[activeExperience].timeEnd}
          </span>
          <div className="text-slate-500 flex flex-col gap-4">
            {data[activeExperience].description.map((element, i) => {
              // return <span key={i}>{element}</span>;
              return (
                <div className="flex gap-2" key={i}>
                  <span className="flex w-1/12">
                    <img src="/images/arrow.svg" alt="Not found" height={15} width={15} />
                  </span>
                  <span className="w-11/12">{element}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
