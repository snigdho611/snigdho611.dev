import "./index.scss";
import data from "../../data";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion"

const Experience = () => {
  const [currentExp, setCurrentExp] = useState<number>(0);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    console.log(isInView)
  }, [isInView])

  return (
    <div className="experience" ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.9s" }}>
      <span className="experience_header">Experience</span>
      <div className="experience_company">
        {
          data.experience.map(({ company }, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setCurrentExp(i)
                }}
                className={currentExp === i ? "experience_company_item-active" : "experience_company_item"}
              >
                {company}
              </div>)
          })
        }
      </div>
      {/* <AnimatePresence> */}
      <motion.div
        key={currentExp}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{opacity: 0, y:-20}}
        // ref={scope}
        // initial={{ opacity: 0 }}
        // variants={variants} animate="show" initial="hide" 
        className="experience_display"
      >
        {data.experience[currentExp].description}
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  )
}

export default Experience