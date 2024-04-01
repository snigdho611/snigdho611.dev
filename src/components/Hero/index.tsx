import "./index.scss";
import { motion } from "framer-motion";

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
        <a
          href={"https://www.github.com/snigdho611"}
          className="hero_link_a"
          target="_blank"
        >
          Check Out My Work
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
