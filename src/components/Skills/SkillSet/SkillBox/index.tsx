import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface SkillBox {
  tech: {
    name: string;
    logo: string;
    count: number;
  };
  id: number;
}

const SkillBox: React.FC<SkillBox> = ({ id, tech }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const skillBoxRef = useRef<HTMLDivElement>(null);

  const motionVariant = {
    visible: { rotateY: 360, delay: 2 },
    start: { scale: 1 },
    hover: { scale: 1.2, duration: 1 },
  };

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <div ref={ref} key={id} className="px-7 mx-auto">
      <div
        className="min-w-24 w-24 min-h-24 h-24 my-4 bg-center bg-no-repeat bg-contain cursor-pointer"
        style={{
          backgroundImage: `url(${tech.logo})`,
        }}
        ref={skillBoxRef}
      />
    </div>
  );
};

export default SkillBox;
