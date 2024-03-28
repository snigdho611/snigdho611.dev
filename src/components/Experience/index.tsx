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
        {data.experience[currentExp].projects.map((element, i) => {
          return (
            <motion.div
              key={i}
              className="experience_display_card"
              // variants={expCardVariants}
              initial="hidden"
              // animate="visible"
              whileHover="visible"
            >
              <motion.span className="experience_display_card_title">{element.title}</motion.span>
              <motion.span className="experience_display_card_description">{element.description}</motion.span>
              <motion.span
                variants={{
                  visible: { opacity: 1, x: 0, },
                  hidden: {
                    opacity: 0, x: "-50%"
                  }
                }}
                transition={{ duration: 0.5 }}
                className="experience_display_card_role"
              >
                {element.role}
              </motion.span>
              <motion.span
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: {
                    opacity: 0, x: "50%"
                  }
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="experience_display_card_stack"
              >
                {element.stack.map((tech) => (<span>{tech}</span>))}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.ol>
      {/* </AnimatePresence> */}
    </motion.div>
  );
};

export default Experience;