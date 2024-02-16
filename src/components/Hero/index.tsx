import "./index.scss";
import { motion } from "framer-motion";
import colors from "../../styles/_colors.scss";

const $purple1 = "#32004E";
const $purple2 = "#7600A1";
const $purple3 = "#AE00CB";
const $purple4 = "#EF94F4";

const Hero = () => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.75 }}
      className="hero"
    >
      <span className="hero_name">
        Snigdho Dip Howlader
      </span>
      <div className="hero_image">
        <img
          // animate={{ boxShadow: [`0px 0px 25px ${$purple3}`, `0px 0px 25px ${$purple4}`] }}
          // initial={{ boxShadow: "0px 0px 0px #2ce083" }}
          // transition={{ delay: 0.75, duration: 1.25, repeat: Infinity, repeatType: "reverse" }}
          className="hero_image_main"
          src={
            // "https://dummyimage.com/600x600/000/fff"
            "https://res.cloudinary.com/drnym8nne/image/upload/v1707937295/portfolio/profile_pic_gxvprf.jpg"
          }
          alt="Not found"
        />
      </div>
      <motion.span 
        animate={{opacity: 1}} 
        initial={{opacity: 0}} 
        transition={{ duration: 0.5, delay: 1}} 
        className="hero_tagline"
      >
        Software Engineer
      </motion.span>
      {/* <span className="hero_description">
        A Professional Software Developer with experience in the industry. Although experitisng on web applications and services, worked with DevOps regularly. Versatile in both Frontend Development and Backend Development technologies. Keen to quickly adapt and learn as needed.  Additionally, academically learned with Machine Learning, Data Mining and Algorithms that contribute to problem solving skills.
      </span> */}
      <div className="hero_link">
        <a
          href={"https://www.github.com/snigdho611"}
          className="hero_link_a"
        >
          Check Out My Work
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
