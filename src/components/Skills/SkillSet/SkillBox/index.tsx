import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SkillBox {
  tech: {
    name: string;
    logo: string;
    count: number;
  };
  key: number;
}

const SkillBox: React.FC<SkillBox> = ({ key, tech }) => {
  const skillBoxRef = useRef<HTMLDivElement>(null);
  const rotateObjects = (objects: React.RefObject<HTMLDivElement>) => {
    gsap.fromTo(
      objects.current,
      {
        transformPerspective: 800,
        transformOrigin: "center",
        rotationY: 360,
      },
      {
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 1.25,
        rotationY: 0,
      }
    );
  };

  useLayoutEffect(() => {
    rotateObjects(skillBoxRef);
  }, []);

  const eventOnMouseEnter = () => {
    gsap.to(skillBoxRef.current, {
      transformOrigin: "center",
      scale: 1.25,
      rotationY: 360,
      duration: 0.5,
    });
  };

  const eventOnMouseLeave = () => {
    gsap.to(skillBoxRef.current, {
      rotationY: 0,
      duration: 0,
    });
    gsap.to(skillBoxRef.current, {
      scale: 1,
      duration: 0.5,
    });
  };

  return (
    <div
      key={key}
      className="px-7 mx-auto"
      onMouseEnter={(el) => {
        eventOnMouseEnter();
      }}
      onMouseLeave={(el) => {
        eventOnMouseLeave();
      }}
    >
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
