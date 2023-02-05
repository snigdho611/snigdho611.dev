import { IData } from "interfaces";
import React from "react";

interface indexProps {
  data: IData;
}

const index: React.FC<indexProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="text-gray-200">
      <div>
        <h3>Experience</h3>
        <div className="text-gray-800 flex flex-col">
          {data.experienceData.map((element, i) => {
            return (
              <>
                <input key={i} value={element.company} />
                <ul>
                  {element.description.map((string, j) => {
                    return (
                      <li key={j}>
                        <input
                          className="w-full border-2 border-solid border-gray-600"
                          value={string}
                        />
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // const value = process.env.BASE_VAL;
  let results;
  await fetch(`${process.env.PROD_URL}/api/site-data`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      results = json;
    })
    .catch((error) => {
      console.log(error);
    });
  return { props: { data: results } };
}

export default index;
