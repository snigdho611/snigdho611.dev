import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

// Index-aligned with the jump handlers Home hands down as `_refs_`.
const navLinks = [
    { title: "Home", ja: "序章" },
    { title: "Experience", ja: "経歴" },
    { title: "Projects", ja: "作品" },
    { title: "Skills", ja: "技" },
    { title: "Education", ja: "道場" },
    { title: "Contact", ja: "連絡" },
];

interface INavbarProps {
    _refs_: (() => void)[];
}

const Navbar: React.FC<INavbarProps> = ({ _refs_ }) => {
    return (
        <motion.nav
            className="navbar"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.9, 0.28, 1] }}
        >
            {/* Motion streaks along the top edge of the header band. */}
            <span className="navbar_streaks" aria-hidden="true" />

            <button className="navbar_brand" onClick={() => _refs_[0]()} aria-label="Back to top">
                <span className="navbar_brand_seal">
                    <img src="/logo-ink.svg" alt="" className="navbar_brand_seal_img" />
                </span>
                <span className="navbar_brand_text">
                    <span className="navbar_brand_text_name">SNIGDHO</span>
                    <span className="navbar_brand_text_ja">スニグド</span>
                </span>
            </button>

            <div className="navbar_links">
                {navLinks.map((element, i) => (
                    <motion.button
                        key={element.title}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                        className="navbar_links_link"
                        onClick={() => _refs_[i]()}
                    >
                        <span className="navbar_links_link_ja">{element.ja}</span>
                        <span className="navbar_links_link_label">{element.title}</span>
                    </motion.button>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
