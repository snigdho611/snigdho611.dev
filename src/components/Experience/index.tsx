import "./index.scss";
import data from "../../data";
import { ForwardedRef, forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { inViewOnce, page, panel, panelFrom } from "../../utils/motion";

const Experience = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const [currentExp, setCurrentExp] = useState<number>(0);
  const active = data.experience[currentExp];

  return (
    <motion.section
      className="experience"
      ref={ref}
      variants={page}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
    >
      <motion.header className="chapter experience_chapter" variants={panel}>
        <span className="chapter_mark">第一話</span>
        <h2 className="chapter_title">Experience</h2>
        <span className="chapter_ja">経歴</span>
      </motion.header>

      <div className="experience_tier">
        {/* --- chapter tabs, one per employer --------------------------- */}
        <motion.div className="experience_tabs" variants={panelFrom(-24)}>
          {data.experience.map(({ company, timeStart, timeEnd }, i) => (
            <button
              key={company}
              onClick={() => setCurrentExp(i)}
              aria-pressed={currentExp === i}
              className={
                currentExp === i
                  ? "experience_tabs_tab experience_tabs_tab-active"
                  : "experience_tabs_tab"
              }
            >
              <span className="experience_tabs_tab_no">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="experience_tabs_tab_body">
                <span className="experience_tabs_tab_body_company">{company}</span>
                <span className="experience_tabs_tab_body_date">
                  {timeStart} — {timeEnd ?? "Present"}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* --- the panel the tabs point at ------------------------------ */}
        <motion.div className="experience_panel" variants={panelFrom(24)}>
          <span className="experience_panel_tone" aria-hidden="true" />

          <motion.div
            key={currentExp}
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 0.9, 0.28, 1] }}
            className="experience_panel_inner"
          >
            <span className="experience_panel_inner_caption">
              {active.title}
              <a
                className="experience_panel_inner_caption_at ink-link"
                href={active.url}
                target="_blank"
                rel="noreferrer"
              >
                @ {active.company}
              </a>
            </span>

            <ul className="experience_panel_inner_list">
              {active.works?.map((element, i) => (
                <li key={i} className="experience_panel_inner_list_item">
                  <span
                    className="experience_panel_inner_list_item_mark"
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                  <span>{element}</span>
                </li>
              ))}
            </ul>

            <div className="experience_panel_inner_stacks">
              {active.stack?.map((element) => (
                <span key={element} className="ink-tag">
                  {element}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
});

Experience.displayName = "Experience";

export default Experience;
