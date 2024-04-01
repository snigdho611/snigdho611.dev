import "./index.scss";
import data from "../../data";
import { motion, useAnimation, useInView } from "framer-motion";
import { ForwardedRef, RefObject, forwardRef, useEffect } from "react";

const Projects = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const isInView = useInView(ref as RefObject<Element>, { once: true });
  const controls = useAnimation();
  const variants = {
    visible: { opacity: 1, transition: { duration: 1.5, delay: !isInView ? 1.5 : 0 } },
    hidden: { opacity: 0 }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className='projects'
      ref={ref}
      variants={variants}
      animate={controls}
      initial="hidden"
    >
      <span className='projects_header'>Projects</span>
      <div className="projects_list">
        {data.projects.slice(0).reverse().map((element, i) => {
          return (
            <div key={i} className="projects_list_item">
              <span className="projects_list_item_title">{element.title}</span>
              <span className="projects_list_item_description">{element.description}</span>
              <span className="projects_list_item_stack">{element.stack.map((stack) => (<span>{stack}</span>))}</span>
              <span className="projects_list_item_url">
                Source Code: {element.url ?
                  <a
                    className="projects_list_item_url_tag"
                    href={element.url}
                  >
                    here
                  </a> :
                  <span style={{ opacity: "0.5" }}>
                    unavailable
                  </span>}
              </span>
              <span className="projects_list_item_hosted">
                Deployment: {element.hosted ?
                  <a
                    className="projects_list_item_hosted_tag"
                    href={element.hosted}
                  >
                    here
                  </a> :
                  <span style={{ opacity: "0.5" }}>
                    unavailable
                  </span>}
              </span>
            </div>);
        })}
      </div>
    </motion.div>
  );
});

export default Projects;