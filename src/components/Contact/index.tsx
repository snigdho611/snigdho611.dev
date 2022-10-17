import React from "react";
// import ContactRow from "./ContactRow";
// // import "../../../styles/globals.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-3/4 mx-auto my-72 h-72 font-sans"
    >
      <div className="flex items-center justify-between w-full my-10">
        <span className="w-1/3 text-2xl text-slate-50">Contact</span>
        <hr className="w-2/3" />
      </div>
      <div>
        If you would like to get in touch with me for any types of query, please opt for any of the
        means below:
      </div>
      <div>
        <div>Email</div>
        <div>Github</div>
        <div>LinkedIn</div>
        <div>Discord</div>
      </div>
    </motion.div>
  );
};

export default Contact;
