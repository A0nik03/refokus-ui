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
    }
  ];

  const [pos, setPos] = useState(null);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => {
        return <Product key={index} count={index} data={elem} mover={mover} />;
      })}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        {products.map(
          (elem, index) =>
            index === pos / 23 && (
              <motion.div
                key={index}
                initial={{ y: index * 23 + `rem` }}
                animate={{ y: index === pos * 23 ? 0 : index * 23 + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className={`absolute w-[32rem] h-[23rem] left-[26%] overflow-hidden rounded-lg ${
                  index * 23 === pos ? "shadow-xl scale-105" : ""
                }`}
              >
                <motion.div
                  key={index}
                  className="absolute w-full h-full bg-white rounded-lg overflow-hidden"
                >
                  <video
                    src={elem.url}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export default Products;
