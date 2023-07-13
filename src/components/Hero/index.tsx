import { useRef } from "react";

const Hero = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hero">
      <div className="mx-auto w-3/4 font-mono" ref={baseRef}>
        <div className="flex flex-col gap-6">
          <label className="text-3xl font-bold sm:text-5xl text-emerald-300">
            Snigdho Dip Howlader.
          </label>
          <label className="text-2xl sm:text-3xl text-emerald-600 font-medium">
            I Create Things For The Web.
          </label>
          <label className="text-slate-400 text-sm sm:text-base text-justify">
            A <strong>Professional Software Developer</strong> with experience in the industry.
            Versatile in both <strong>Frontend Development</strong> and{" "}
            <strong>Backend Development</strong> technologies. Additionally, academically learned
            with Machine Learning, Data Mining and Algorithms that contribute to problem solving
            skills.
          </label>
          <a
            href={"https://www.github.com/snigdho611"}
            className="border-2 bg-emerald-700 text-emerald-50 transition-all w-3/4 sm:w-1/3 py-3 text-sm text-center hover:bg-emerald-50 hover:text-emerald-700 hover:top-[-10px] relative"
          >
            Check Out My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
