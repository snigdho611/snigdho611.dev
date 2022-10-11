import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillBox {
  tech: {
    name: string;
    logo: string;
    count: number;
  };
  id: number;
}

const SkillBox: React.FC<SkillBox> = ({ id, tech }) => {
  React.useLayoutEffect = React.useEffect;
  const skillBoxRef = useRef<HTMLDivElement>(null);

  const motionVariant = {
    visible: { rotateY: 360, delay: 2 },
    start: {},
    // hover: { type: "spring", width: "80%", color: "white", opacity: 1 },
  };

  return (
    <motion.div
      key={id}
      className="px-7 mx-auto"
      variants={motionVariant}
      initial="start"
      animate="visible"
      transition={{ duration: 3, repeat: Infinity }}
    >
      <div
        className="min-w-24 w-24 min-h-24 h-24 my-4 bg-center bg-no-repeat bg-contain cursor-pointer"
        style={{
          backgroundImage: `url(${tech.logo})`,
        }}
        ref={skillBoxRef}
      />
    </motion.div>
  );
};

export default SkillBox;
