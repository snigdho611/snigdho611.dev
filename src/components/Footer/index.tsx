import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 right-0 gap-3 sm:flex hidden text-sm">
      <div className="text-slate-300">Developed by: </div>
      <Link href="https://www.github.com/snigdho611">
        <a className="text-emerald-300 hover:text-emerald-100 transition-colors " href="">
          snigdho611
        </a>
      </Link>
    </div>
  );
};

export default Footer;
