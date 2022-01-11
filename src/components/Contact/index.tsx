import React from "react";
import ContactRow from "./ContactRow";

const index = () => {
  return (
    <div
      style={{
        margin: "120px auto 170px auto",
        width: "75%",
        // border: "1px solid white",
      }}
    >
      <div className="Header">CONTACT</div>
      <ContactRow />
    </div>
  );
};

export default index;
