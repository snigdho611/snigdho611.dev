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
      <div className="w-full lg:w-1/2 flex justify-center mt-10">
        <div className="flex h-72 justify-center">
          <div className="absolute w-60 h-60 hover:w-54 cursor-pointer">
            <img
              src={
                "https://res.cloudinary.com/drnym8nne/image/upload/v1665871812/portfolio/profilepic_xrxbld.jpg"
              }
              alt="Not found"
            />
          </div>
          <div
            // whileHover={{ marginLeft: 0, marginTop: 0 }}
            className="w-60 h-60 border-4 border-emerald-100 ml-10 mt-6 cursor-pointer"
          ></div>
        </div>
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
