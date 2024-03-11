import "./index.scss";
import data from "../../data";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const Experience = () => {
  const [currentExp, setCurrentExp] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const variants = {
    visible: { opacity: 1, transition: { duration: 1.5, delay: !isInView ? 1.5 : 0 } },
    hidden: { opacity: 0 }
  };

  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className="experience"
      ref={ref}
      variants={variants}
      animate={controls}
      initial="hidden"
    // style={{ opacity: isInView ? 1 : 0, transition: "opacity 1.5s" }}
    >
      <span className="experience_header">Experience</span>
      <div className="experience_company">
        {
          data.experience.map(({ company }, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setCurrentExp(i);
                }}
                className={currentExp === i ? "experience_company_item-active" : "experience_company_item"}
              >
                {company}
              </div>);
          })
        }
      </div>
      {/* <AnimatePresence> */}
      <motion.ol
        key={currentExp}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // exit={{opacity: 0, y:-20}}
        // ref={scope}
        // initial={{ opacity: 0 }}
        // variants={variants} animate="show" initial="hide" 
        className="experience_display"
      >
        {data.experience[currentExp].description.map((element) => {
          return <li dangerouslySetInnerHTML={{ __html: ` ${element}` }} />;
        })}
      </motion.ol>
      {/* </AnimatePresence> */}
    </motion.div>
  );
};

export default Experience;