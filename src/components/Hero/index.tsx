import { ForwardedRef, forwardRef } from "react";
import "./index.scss";
import { motion } from "framer-motion";
import { balloon, page, panel, panelFrom, sfx } from "../../utils/motion";

const Hero = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <motion.section className="hero" ref={ref} variants={page} initial="hidden" animate="visible">
            {/* --- establishing panel ------------------------------------------- */}
            <motion.div className="hero_main" variants={panel}>
                <span className="hero_main_burst" aria-hidden="true" />
                <span className="hero_main_vertical" aria-hidden="true">
                    自己紹介
                </span>

                <span className="hero_main_chapter">第〇話 — PROLOGUE</span>

                <motion.h1 className="hero_main_name" variants={sfx}>
                    Snigdho Dip Howlader
                </motion.h1>

                <div className="hero_main_row">
                    <motion.div className="hero_main_cta" variants={panel}>
                        <a
                            href="https://www.github.com/snigdho611"
                            className="hero_main_cta_link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Check Out My Work
                            <span className="hero_main_cta_link_arrow" aria-hidden="true">
                                →
                            </span>
                        </a>
                        <span className="hero_main_cta_streaks" aria-hidden="true" />
                    </motion.div>
                    <motion.p className="hero_main_balloon" variants={balloon}>
                        I build things for the web, from start to finish.
                    </motion.p>
                </div>
            </motion.div>

            {/* --- portrait panel ----------------------------------------------- */}
            <motion.div className="hero_portrait" variants={panelFrom(28)}>
                <div className="hero_portrait_frame">
                    <img
                        className="hero_portrait_frame_img"
                        src="https://res.cloudinary.com/drnym8nne/image/upload/v1786643810/portfolio/portfolio%20portrait.png"
                        alt="Snigdho Dip Howlader"
                    />
                    <span className="hero_portrait_frame_tone" aria-hidden="true" />
                </div>

                <motion.span className="hero_portrait_sfx" variants={sfx}>
                    ドン!!
                </motion.span>

                <span className="hero_portrait_role">Software Engineer</span>
            </motion.div>
        </motion.section>
    );
});

Hero.displayName = "Hero";

export default Hero;
