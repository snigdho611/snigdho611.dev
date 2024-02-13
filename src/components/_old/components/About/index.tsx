import React from "react";

const data = [
  "JavaScript",
  "Python",
  "React",
  "Node",
  "Laravel",
  "Docker",
  "PostGreSQL",
  "MongoDB",
];

interface IAbout {
  aboutData: any;
}

const About: React.FC<IAbout> = ({ aboutData }) => {
  return (
    <div className="flex flex-col lg:flex-row my-48 w-3/4 mx-auto font-sans">
      <div className="flex flex-col w-full lg:w-1/2 items-center text-slate-400">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between w-full">
            <span className="w-1/3 text-2xl text-slate-50">About Me</span>
            <hr className="w-2/3" />
          </div>
          <div className="flex flex-col gap-3">
            {aboutData.map((span: any, i: any) => {
              return (
                <span key={i}>
                  {span.map(({ text, url }: any) => {
                    return !url ? (
                      text
                    ) : (
                      <a
                        href={url}
                        className="text-emerald-500 hover:text-emerald-100 transition-colors"
                      >
                        {text}
                      </a>
                    );
                  })}
                </span>
              );
            })}
          </div>
          <div>Skills:</div>
          <div className="flex flex-wrap">
            {data.map((element, i) => {
              return (
                <span
                  style={{ flex: "1 0 50%" }}
                  key={i}
                  className="flex items-center my-1 gap-x-2"
                >
                  <img src="/images/arrow.svg" alt="Not found" height={10} width={10} />
                  {element}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center mt-10">
        <div className="flex h-72 justify-center">
          <div className="absolute w-60 h-60 hover:w-54 cursor-pointer">
            <img
              src={
                "https://res.cloudinary.com/drnym8nne/image/upload/v1665871812/portfolio/profilepic_xrxbld.jpg"
              }
              alt="Not found"
            />
          </div>
          <div
            // whileHover={{ marginLeft: 0, marginTop: 0 }}
            className="w-60 h-60 border-4 border-emerald-100 ml-10 mt-6 cursor-pointer"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
