import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-white">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "facebook", "LinkedIn"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "facebook", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              refokus Lorem ipsum dolor sit amet Lorem ipsum dolor sit.
            </p>
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              className="w-44 mt-10 object-cover flex-shrink-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
