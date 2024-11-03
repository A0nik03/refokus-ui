import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImage] = useState([
    {
      url: "https://wallpapers.com/images/featured/spiderman-pictures-8opf8q4smmpx644d.jpg",
      top: "60%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://wallpapers.com/images/featured/spider-man-axtz0jnhj20oq57g.jpg",
      top: "70%",
      left: "46%",
      isActive: false,
    },
    {
      url: "https://4kwallpapers.com/images/wallpapers/marvels-spider-man--13276.jpeg",
      top: "40%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://4kwallpapers.com/images/wallpapers/marvels-spider-man-3840x2160-12891.jpg",
      top: "65%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://rukminim2.flixcart.com/image/850/1000/l1tmf0w0/poster/x/i/g/small-poster-spiderman-comic-wall-poster-300-gsm-matte-paper-13-original-imaexgm28m3vhckp.jpeg?q=90&crop=false",
      top: "59%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/40/53/97/4053972724e06696425c31dd15f9ea34.jpg",
      top: "48%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    const showImage = (arr) => {
      setImage((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };
    const value = Math.floor(data * 100);
    console.log(value);

    switch (value) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 2:
        showImage([0, 1]);
        break;
      case 3:
        showImage([0, 1, 2]);
        break;
      case 4:
        showImage([0, 1, 2, 3]);
        break;
      case 5:
        showImage([0, 1, 2, 3, 4]);
        break;
      case 6:
        showImage([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[20vw] text-white leading-none tracking-none select-none font-medium">
          <span
            style={{ textShadow: "0 0 0.01em #FF0000" }}
            className="text-red-600"
          >
            S
          </span>
          pider
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-52 h-44 object-cover m-auto rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt="Spidey"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
