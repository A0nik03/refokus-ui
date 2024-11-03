import React from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";

const Card = ({ width, start, para, hover = false }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover ? "#7443ff" : undefined,
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl text-white ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <HiArrowLongRight />
        </div>
        <div>
          <h1 className="text-3xl font-medium mt-5">Whatever heading....</h1>
        </div>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            perferendis maiores adipisci. Exercitationem, odit est!
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
