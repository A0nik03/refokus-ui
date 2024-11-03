import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-3 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
      <img className="h-10 ml-8" src="./logo.png" alt="spiderman-new"/>
      <div className="links flex gap-10 ml-12">
        {["Home", "Work", "Culture" ,"","News"].map((elem, index) => (
          elem.length === 0 ? <span key={index} className="w-[1px] h-8 bg-zinc-700">{elem}</span> : (
            <a
            key={index}
            className="text-sm flex items-center text-white gap-2"
            href="#"
          >
            {index === 1 && (<span style={{boxShadow: "0 0 0.25em #00FF19"}} className="inline-block w-2 h-2 rounded-full bg-green-600">
            </span>)}
            {elem}
          </a>
          )
        ))}
      </div>
      </div>
      <div className="nright">
      <Button/>
      </div>
    </div>
  );
};

export default Navbar;
