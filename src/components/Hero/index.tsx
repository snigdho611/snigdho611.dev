import "./index.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      animate={{ opacity: 1, x: [200, 0, -50, 40, -30, 20, -10, 0] }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      className="hero"
    >
      <span className="hero_name">
        Snigdho Dip Howlader
      </span>
      <div className="hero_image">
        {/* <div className="flex h-72 justify-center"> */}
          <div className="hero_image_main">
            <img 
              className="hero_image_main_img"
              src={
                "https://dummyimage.com/600x600/000/fff"
                // "https://res.cloudinary.com/drnym8nne/image/upload/v1665871812/portfolio/profilepic_xrxbld.jpg"
              }
              alt="Not found"
            />
          </div>
          <div
            // whileHover={{ marginLeft: 0, marginTop: 0 }}
            className="hero_image_silhouette"
          />
        {/* </div> */}
      </div>
      <span className="hero_tagline">
        I Create Things For The Web.
      </span>
      <span className="hero_description">
        A <span style={{ fontWeight: "600" }}>Professional Software Developer</span> with experience in the industry.
        Versatile in both <strong>Frontend Development</strong> and{" "}
        <strong>Backend Development</strong> technologies. Additionally, academically learned
        with Machine Learning, Data Mining and Algorithms that contribute to problem solving
        skills.
      </span>
      <a
        href={"https://www.github.com/snigdho611"}
        className="hero_link"
      >
        Check Out My Work
      </a>
    </motion.div>
  );
};

export default Hero;
