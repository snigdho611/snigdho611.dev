import "./index.scss";
import data from "../../data";
import { ForwardedRef, RefObject, forwardRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import React from "react";

const Experience = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const [currentExp, setCurrentExp] = useState<number>(0);
  // const ref = useRef(null);
  const isInView = useInView(ref as RefObject<Element>, { once: true });
  const controls = useAnimation();
  const variants = {
    visible: { opacity: 1, transition: { duration: 1.5, delay: !isInView ? 1.5 : 0 } },
    hidden: { opacity: 0 }
  };
  // const textEffect = { duration: 0.25, delay: 0.4 };

  useEffect(() => {
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
    >
      <span className="experience_header">Experience</span>
      <div className="experience_company">
        {
          data.experience.map(({ company, timeStart, timeEnd }, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setCurrentExp(i);
                }}
                className={currentExp === i ? "experience_company_item-active" : "experience_company_item"}
              >
                {company}{" "}<span className="experience_company_item_date">&nbsp;-&nbsp; {timeStart} - {timeEnd ?? "Present"}</span>
              </div>);
          })
        }
      </div>
      <motion.div
        key={currentExp}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="experience_display"
      >
        <div className="experience_display_list">
          {data.experience[currentExp].works?.map((element, i) => {
            return <React.Fragment key={i}><span>➣</span><span>{element}</span></React.Fragment>;
          })}
        </div>
        <div className="experience_display_stacks">
          {data.experience[currentExp].stack?.map((element, i) => {
            return <span key={i} className="experience_display_stacks_stack">{element}</span>;
          })}
        </div>
      </motion.div>
    </motion.div>
  );
});

export default Experience;