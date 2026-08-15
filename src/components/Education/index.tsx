import "./index.scss";
import data from "../../data";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";
import { inViewOnce, page, panel, panelFrom } from "../../utils/motion";

const AUTHOR = "Snigdho Dip Howlader";

const Education = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <motion.section
            className="education"
            ref={ref}
            variants={page}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
        >
            <motion.header className="chapter education_chapter" variants={panel}>
                <span className="chapter_mark">第四話</span>
                <h2 className="chapter_title">Education</h2>
                <span className="chapter_ja">道場</span>
            </motion.header>

            {/* --- where the training happened ---------------------------------- */}
            <div className="education_tier">
                {data.education.map((school) => (
                    <motion.article key={school.id} className="education_education" variants={panelFrom(-24)}>
                        <span className="education_education_tone" aria-hidden="true" />

                        <span className="education_education_years">
                            {school.timeStart} — {school.timeEnd}
                        </span>

                        <h3 className="education_education_name">{school.institution}</h3>

                        <p className="education_education_degree">{school.degree}</p>

                        <p className="education_education_note">{school.note}</p>

                        <a className="ink-link" href={school.url} target="_blank" rel="noreferrer">
                            {school.short.toLowerCase()}.edu ↗
                        </a>
                    </motion.article>
                ))}

                <motion.aside className="education_stamp" variants={panelFrom(24)}>
                    <span className="education_stamp_ja">修行</span>
                    <span className="education_stamp_label">Training arc</span>
                </motion.aside>
            </div>

            {/* --- what came out of it ------------------------------------------ */}
            <motion.div className="education_papers" variants={panel}>
                <span className="education_papers_label">掲載論文 — Published research</span>

                {data.publications.map((paper) => (
                    <motion.article key={paper.id} className="education_papers_paper" variants={panel}>
                        <span className="education_papers_paper_tone" aria-hidden="true" />

                        <h3 className="education_papers_paper_title">
                            <a className="ink-link" href={paper.url} target="_blank" rel="noreferrer">
                                {paper.title}
                            </a>
                        </h3>

                        <p className="education_papers_paper_authors">
                            {paper.authors.map((name, i) => (
                                <Fragment key={name}>
                                    {i > 0 && ", "}
                                    {name === AUTHOR ? <strong>{name}</strong> : name}
                                </Fragment>
                            ))}
                        </p>

                        <p className="education_papers_paper_meta">
                            <span>{paper.journal}</span>
                            <span>{paper.volume}</span>
                            <span>pp. {paper.pages}</span>
                            <span>{paper.published}</span>
                        </p>

                        <p className="education_papers_paper_summary">{paper.summary}</p>

                        <a
                            className="ink-link education_papers_paper_doi"
                            href={paper.doi}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {paper.doi.replace("https://doi.org/", "doi:")} ↗
                        </a>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
});

Education.displayName = "Education";

export default Education;
