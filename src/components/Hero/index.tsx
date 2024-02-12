import { useRef } from "react";
import "./index.scss";

const Hero = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hero">
      <label className="hero_name">
        Snigdho Dip Howlader
      </label>
      <label className="hero_tagline">
        I Create Things For The Web.
      </label>
      <label className="hero_description">
        A <strong>Professional Software Developer</strong> with experience in the industry.
        Versatile in both <strong>Frontend Development</strong> and{" "}
        <strong>Backend Development</strong> technologies. Additionally, academically learned
        with Machine Learning, Data Mining and Algorithms that contribute to problem solving
        skills.
      </label>
      <a
        href={"https://www.github.com/snigdho611"}
        className="hero_link"
      >
        Check Out My Work
      </a>
    </div>
  );
};

export default Hero;
