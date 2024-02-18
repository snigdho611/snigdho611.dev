import "./index.scss";
import { motion } from "framer-motion";
import colors from "../../styles/_colors.scss";

const $purple1 = "#32004E";
const $purple2 = "#7600A1";
const $purple3 = "#AE00CB";
const $purple4 = "#EF94F4";

const Hero = () => {
  const delay = 1;
  const duration = 0.85;

  return (
    <motion.div
      className="hero"
    >
      <motion.span
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: duration, delay: delay }}
        className="hero_name"
      >
        Snigdho Dip Howlader
      </motion.span>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: duration, delay: delay }}
        className="hero_image"
      >
        <img
          className="hero_image_main"
          src={
            // "https://dummyimage.com/600x600/000/fff"
            "https://res.cloudinary.com/drnym8nne/image/upload/v1707937295/portfolio/profile_pic_gxvprf.jpg"
          }
          alt="Not found"
        />
      </motion.div>
      <motion.span
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: duration, delay: delay }}
        className="hero_tagline"
      >
        Software Engineer
      </motion.span>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: duration, delay: delay }}
        className="hero_link"
      >
        <motion.a
          animate={{ textShadow: [`0px 0px 15px ${$purple2}`, `0px 0px 15px ${$purple4}`] }}
          initial={{ textShadow: "0px 0px 0px #2ce083" }}
          transition={{ delay: delay + 1, duration: 1.25, repeat: Infinity, repeatType: "reverse" }}
          href={"https://www.github.com/snigdho611"}
          className="hero_link_a"
        >
          Check Out My Work
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
