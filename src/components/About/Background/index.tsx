import React, { useEffect, useRef } from "react";

const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="mx-auto 
    w-8/12
     flex flex-row mt-32"
      ref={backgroundRef}
    >
      <div className="w-full">
        <div></div>
      </div>
    </div>
  );
};

export default Background;

{
  /* <p>
I'm from Dhaka, Bangladesh. I've always had an interest in computers
and software, mostly influenced by video games and music software.
</p>
<br /> */
}
{
  /* <EducationRow name="ABC" imageURL="/ABC" degree="ABC" time="abc" /> */
}
{
  /* <p>
Additionally, academically learned with Machine Learning, Data
Mining and Algorithms that contribute to problem solving skills. Can
easily adapt to technologies of all kinds and good at thinking on
  the go.
</p> */
}
{
  /* <div className="w-5/12">
  <div
    className="bg-cover w-56 h-56 rounded-full mx-auto my-5"
    style={{
      backgroundImage: "url(/images/profilepic.jpg)",
    }}
  />
</div> */
}
