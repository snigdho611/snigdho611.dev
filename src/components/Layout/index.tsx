import React from "react";
import Navbar from "../Navbar";
import "./index.scss";

interface ILayoutProps {
    children: React.ReactNode;
    _refs_: (() => void)[];
}

const Layout: React.FC<ILayoutProps> = ({ children, _refs_ }) => {
    return (
        <div className="layout">
            {/* The printed sheet everything is drawn on. */}
            <div className="layout_page">
                <Navbar _refs_={_refs_} />

                {/* Margin furniture: the notes printed outside the panel area. */}
                <span className="layout_margin layout_margin-left" aria-hidden="true">
                    SNIGDHO DIP HOWLADER / PORTFOLIO
                </span>
                <span className="layout_margin layout_margin-right" aria-hidden="true">
                    読む方向 / RIGHT TO LEFT
                </span>

                <div className="layout_body">{children}</div>

                <footer className="layout_footer">
                    <span className="layout_footer_rule" aria-hidden="true" />
                    {/* <span className="layout_footer_next">つづく</span> */}
                    <span className="layout_footer_note">Built with React, TypeScript &amp; a whole lot of ink.</span>
                    <span className="layout_footer_page" aria-hidden="true">
                        001
                    </span>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
