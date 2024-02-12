import React from "react";

interface IContact {
  url: string;
  image: string;
}

interface IContactProps {
  data: IContact[];
}

const Contact: React.FC<IContactProps> = ({ data }) => {
  return (
    <div className="w-3/4 mx-auto my-48 font-sans text-slate-300">
      <div className="flex items-center justify-between w-full my-10">
        <span className="w-1/3 text-2xl text-slate-50">Contact Me</span>
        <hr className="w-2/3" />
      </div>
      <div className="w-2/3 mx-auto text-center flex flex-col gap-10">
        <div className="text-xl">
          If you would like to get in touch for any types of query, please opt for any of the means
          below:
        </div>
        <div className="flex w-full flex-col sm:flex-row justify-between sm:gap-4 gap-10">
          {data.map(({ image, url }, i) => {
            return (
              <div key={i}>
                <a href={url} target={"_blank"}>
                  <img src={image} alt="Not found" height={50} width={50} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
