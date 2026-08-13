import "./index.scss";
import data from "../../data";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";
import { balloon, inViewOnce, page, panel } from "../../utils/motion";

const Contact = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <motion.section
      className="contact"
      ref={ref}
      variants={page}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
    >
      <motion.header className="chapter contact_chapter" variants={panel}>
        <span className="chapter_mark">最終話</span>
        <h2 className="chapter_title">Contact</h2>
        <span className="chapter_ja">連絡先</span>
      </motion.header>

      <motion.div className="contact_panel" variants={panel}>
        <span className="contact_panel_burst" aria-hidden="true" />

        <motion.p className="contact_panel_balloon" variants={balloon}>
          If you would like to get in touch for any kind of query, take your pick
          below —
        </motion.p>

        <div className="contact_panel_links">
          {data.contact.map(({ image, url, label, ja }, i) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="contact_panel_links_link"
              data-tone={i % 3}
              variants={panel}
            >
              <span className="contact_panel_links_link_disc">{image}</span>
              <span className="contact_panel_links_link_name">{label}</span>
              <span className="contact_panel_links_link_ja">{ja}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
});

Contact.displayName = "Contact";

export default Contact;
