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
  const textEffect = { duration: 0.25, delay: 0.4 }

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
                {company}{" "}-<span className="experience_company_item_date">&nbsp; {timeStart} - {timeEnd ?? "Present"}</span>
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
        <ul className="experience_display_list">
          {data.experience[currentExp].works?.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
        <div className="experience_display_stacks">
          {data.experience[currentExp].stack?.map((element) => {
            return <span className="experience_display_stacks_stack">{element}</span>;
          })}
        </div>
        {/* {data.experience[currentExp].projects.map((element, i) => {
          return (
            <motion.div
              key={i}
              className="experience_display_card"
              initial="hidden"
              whileHover="visible"
            >
              <motion.span className="experience_display_card_title">{element.title}</motion.span>
              <motion.span
                className="experience_display_card_description"
                variants={{
                  visible: { opacity: 1, x: 0, },
                  hidden: {
                    opacity: 0.7
                  }
                }}
                transition={{ duration: textEffect.duration }}
              >{element.description}</motion.span>
              <motion.span
                variants={{
                  visible: { opacity: 1, x: 0, },
                  hidden: {
                    opacity: 0.7
                  }
                }}
                transition={{ duration: textEffect.duration, delay: textEffect.delay }}
                className="experience_display_card_role"
              >
                {element.role}
              </motion.span>
              <motion.span
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: {
                    opacity: 0.5
                  }
                }}
                transition={{ duration: textEffect.duration, delay: textEffect.delay * 2 }}
                className="experience_display_card_stack"
              >
                {element.stack.map((tech) => (<span>{tech}</span>))}
              </motion.span>
            </motion.div>
          );
        })} */}
      </motion.div>
    </motion.div>
  );
};

export default Experience;