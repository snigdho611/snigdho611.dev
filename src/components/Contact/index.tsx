import "./index.scss";
import data from "../../data";
import { motion, useAnimation, useInView } from "framer-motion";
import { ForwardedRef, RefObject, forwardRef, useEffect } from "react";

const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
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
      className="contact"
      ref={ref}
      // animate={{ translateY: "0px", opacity: 1 }}
      // initial={{ translateY: "-200px", opacity: 0 }}
      // transition={{ duration: 1 }}
      variants={variants}
      animate={controls}
      initial="hidden"
    >
      <span className="contact_header">Contact</span>
      <span className="contact_tagline">
        If you would like to get in touch for any types of query, please opt for any of the options
        below:
      </span>
      <div className="contact_items">
        {data.contact.map(({ image, url }, i) => {
          return (
            <a key={i} href={url} target={"_blank"} className="contact_items_item">
              {/* <img src={image} alt="Not found" height={50} width={50} /> */}
              {image}
            </a>
          );
        })}
      </div>
    </motion.div>

  );
});

export default Contact;