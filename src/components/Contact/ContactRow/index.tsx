import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "50px 100px 80px 100px",
        fontSize: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "right",
          color: "#2E93B0",
          padding: "10px",
          gap: "15px",
        }}
      >
        <div style={{}}>Email:</div>
        <div style={{}}>Phone:</div>
        <div style={{}}>Github:</div>
        <div style={{}}>Others:</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          //   fontSize: "18px",
          color: "#BEEBF9",
          padding: "10px",
          gap: "15px",
        }}
      >
        <div>snigdho.howlader@gmail.com</div>
        <div>N/A</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <a href="https://www.github.com/snigdho611">
            <Image
              src={"/images/media/github.png"}
              alt="Image not found"
              height={25}
              width={25}
            />
          </a>
          snigdho611
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          <a href="https://www.linkedin.com/in/snigdho-dip-howlader-025b291a5/">
            <Image
              src={"/images/media/linkedin.png"}
              alt="Image not found"
              height={40}
              width={40}
            />
          </a>
          <a href="https://discordapp.com/users/snigdho611#4850">
            <Image
              src={"/images/media/discord.png"}
              alt="Image not found"
              height={40}
              width={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
