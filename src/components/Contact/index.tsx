import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface IContact {
  url: string;
  image: string;
}

interface IContactProps {
  data: IContact[];
}

const Contact: React.FC<IContactProps> = ({ data }) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-3/4 mx-auto my-48 font-sans text-slate-300"
    >
      <div className="flex items-center justify-between w-full my-10">
        <span className="w-1/3 text-2xl text-slate-50">Contact Me</span>
        <hr className="w-2/3" />
      </div>
      <div className="w-2/3 mx-auto text-center flex flex-col gap-10">
        <div className="text-xl">
          If you would like to get in touch for any types of query, please opt for any of the means
          below:
        </div>
        <div className="flex w-full flex-col sm:flex-row justify-between sm:gap-4 gap-10">
          {data.map(({ image, url }, i) => {
            return (
              <motion.div key={i} whileHover={{ y: -7.5 }}>
                <Link passHref href={url}>
                  <a href="" target={"_blank"}>
                    <Image src={image} alt="Not found" height={50} objectFit="contain" width={50} />
                  </a>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
