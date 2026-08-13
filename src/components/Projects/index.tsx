import "./index.scss";
import data from "../../data";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";
import { inViewOnce, page, panel } from "../../utils/motion";

const Projects = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const projects = [...data.projects].reverse();

  return (
    <motion.section
      className="projects"
      ref={ref}
      variants={page}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
    >
      <motion.header className="chapter projects_chapter" variants={panel}>
        <span className="chapter_mark">第二話</span>
        <h2 className="chapter_title">Projects</h2>
        <span className="chapter_ja">作品集</span>
      </motion.header>

      <div className="projects_grid">
        {projects.map((element, i) => (
          <motion.article
            key={element.id}
            className="projects_grid_panel"
            variants={panel}
            // Each panel is nudged off-square, so the grid reads as hand-laid.
            data-tilt={i % 3}
            data-tone={i % 3}
          >
            <span className="projects_grid_panel_tone" aria-hidden="true" />

            <span className="projects_grid_panel_no" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="projects_grid_panel_title">{element.title}</h3>

            <p className="projects_grid_panel_desc">{element.description}</p>

            <div className="projects_grid_panel_stack">
              {element.stack.map((stack) => (
                <span key={stack} className="ink-tag">
                  {stack}
                </span>
              ))}
            </div>

            <div className="projects_grid_panel_links">
              <span className="projects_grid_panel_links_row">
                <span className="projects_grid_panel_links_row_label">Source</span>
                {element.url ? (
                  <a
                    className="ink-link"
                    href={element.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    github ↗
                  </a>
                ) : (
                  <span className="projects_grid_panel_links_row_none">—</span>
                )}
              </span>
              <span className="projects_grid_panel_links_row">
                <span className="projects_grid_panel_links_row_label">Live</span>
                {element.hosted ? (
                  <a
                    className="ink-link"
                    href={element.hosted}
                    target="_blank"
                    rel="noreferrer"
                  >
                    visit ↗
                  </a>
                ) : (
                  <span className="projects_grid_panel_links_row_none">—</span>
                )}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
});

Projects.displayName = "Projects";

export default Projects;
