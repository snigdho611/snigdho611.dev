import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div style={{}} className="contact-margin">
      <div className="contact-labels">
        <div>Email:</div>
        <div>Phone:</div>
        <div>Github:</div>
        <div>Others:</div>
      </div>
      <div className="contact-info">
        <div>snigdho.howlader@gmail.com</div>
        <div>N/A</div>
        <div className="contact-row">
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
        <div className="contact-row">
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
