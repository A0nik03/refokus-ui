import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import assets from "../assets/Products/assets";

const Products = () => {
  const products = [
    {
      title: "arqitel",
      url: assets.intenseye,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      url: assets.ttr,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      url: assets.yir,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      url: assets.yahoo,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: true,
    },
    {
      title: "arqitel",
      url: assets.intenseye,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      url: assets.ttr,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      url: assets.yir,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      url: assets.yahoo,
      description:
        "Arquivo default bookkeeping shop hahile trans Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas?",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 18);
  };

  return (
    <div className="mt-20 relative">
      {products.map((elem, index) => {
        return (
          <Product
            key={index}
            count={index}
            data={elem}
            mover={mover}
            color={"#7443ff"}
          />
        );
      })}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        {products.map(
          (elem, index) =>
            index === pos / 18 && (
              <motion.video
                key={index}
                src={elem.url}
                autoPlay
                loop
                muted
                initial={{ x: "-50%", y: pos + `rem` }}
                animate={{ y: pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                className="absolute w-[28rem] h-[18rem] left-[46%] object-cover overflow-hidden"
              >
                <motion.div
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                  animate={{ y: -pos + `rem` }}
                  className="w-full h-full bg-sky-100"
                ></motion.div>
              </motion.video>
            )
        )}
      </div>
    </div>
  );
};

export default Products;
