import "./index.scss";
import data from "../../data";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";
import { inViewOnce, page, panel } from "../../utils/motion";

const Skills = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <motion.section
            className="skills"
            ref={ref}
            variants={page}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
        >
            <motion.header className="chapter skills_chapter" variants={panel}>
                <span className="chapter_mark">第三話</span>
                <h2 className="chapter_title">Skills</h2>
                <span className="chapter_ja">技一覧</span>
            </motion.header>

            <div className="skills_grid">
                {data.skills.map((school, i) => (
                    <motion.article key={school.id} className="skills_grid_school" variants={panel} data-tone={i % 3}>
                        <span className="skills_grid_school_tone" aria-hidden="true" />

                        <span className="skills_grid_school_no" aria-hidden="true">
                            其ノ{["一", "二", "三", "四", "五", "六"][i] ?? i + 1}
                        </span>

                        {/* Discipline name running down the margin, as on a panel. */}
                        <span className="skills_grid_school_ja" aria-hidden="true">
                            {school.ja}
                        </span>

                        <h3 className="skills_grid_school_title">{school.title}</h3>

                        <p className="skills_grid_school_note">{school.note}</p>

                        <ul className="skills_grid_school_list">
                            {school.items.map((item) => (
                                <li key={item} className="skills_grid_school_list_item">
                                    <span className="ink-tag">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
});

Skills.displayName = "Skills";

export default Skills;
