import React, { MutableRefObject } from "react";
import Navbar from "../Navbar";
import "./index.scss";

interface ILayoutProps {
  children: React.ReactNode;
  _refs_: (() => void)[];
}

const Layout: React.FC<ILayoutProps> = ({ children, _refs_ }) => {
  return (
    <div className="layout">
      <Navbar _refs_={_refs_} />
      <div className="layout_body">
        {children}
      </div>
    </div>
  );
};

export default Layout;
