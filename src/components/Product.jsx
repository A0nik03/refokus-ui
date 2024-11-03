import React from "react";
import Button from "./Button";

const Product = ({ data,mover,count,color}) => {
  return (
    <div className="h-[18rem] w-full py-5 text-white hover:bg-[#7443ff] flex flex-col items-center">
      <div onMouseEnter={()=>{mover(count)}} className = {`max-w-screen-xl h-[18rem] px-[6vw] py-10 mx-auto flex items-center justify-between gap-32 `}>
        <h1 className="text-6xl capitalize font-semibold">{data.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{data.description}</p>
          <div className="flex items-center gap-5">
            {data.live && <Button />}
            {data.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
