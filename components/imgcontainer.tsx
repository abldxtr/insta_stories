"use client";

import Image from "next/image";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import MotionImg from "./motionImg";

export default function ImgContainer() {
  const items = [
    "https://a.storyblok.com/f/133769/2400x2990/61c001bac1/columbia-pictures-hero.jpg/m/2400x2990/filters:quality(80)",
    "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)",
    "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/2400x2990/filters:quality(80)",
    "https://a.storyblok.com/f/133769/2400x2990/fab67b71d9/plugged-live-shows-hero.jpg/m/2400x2990/filters:quality(80)",
    "https://a.storyblok.com/f/133769/2400x2990/13b1c95334/ali-ali-hero.jpg/m/2400x2990/filters:quality(80)",
  ];

  const [active, setActive] = useState(0);

  return (
    <div className=" w-full h-screen relative isolate bg-black">
      <motion.div className=" absolute inset-0 overflow-hidden z-[-1] ">
        {/* <AnimatePresence> */}
        {/* {items.map((item, index) => {
            return ( */}
        {/* <motion.img
          src={items[active]}
          // key={index}
          alt="sasdf"
          className="w-full h-full"
          initial={{
            // clipPath: "inset(0% 100% 0% 0%)",

            scale: 2,
            rotate: -25,
          }}
          animate={{
            // clipPath: "inset(0% 0% 0% 0%)",

            scale: 1,
            rotate: 0,
          }}
          exit={{
            // clipPath: "inset(0% 100% 0% 0%)",
            rotate: 25,
            scale: 2,
            transition: { delay: 1 },
          }}
          transition={{
            // delay: 0.5,
            type: "spring",
            bounce: 0,
          }}
        /> */}
        {/* );
          })} */}
        {/* </AnimatePresence> */}
        {active === 0 && <MotionImg imgsrc={items[active]} />}

        {active === 1 && <MotionImg imgsrc={items[active]} />}
        {active === 1 && <MotionImg imgsrc={items[active]} />}
        {active === 2 && <MotionImg imgsrc={items[active]} />}
        {active === 3 && <MotionImg imgsrc={items[active]} />}
        {active === 4 && <MotionImg imgsrc={items[active]} />}
        {/* <img src={items[active]} alt="sasdf" className="w-full h-full" /> */}
      </motion.div>
      <div className=" w-full flex items-center justify-center pt-8 z-[1000] gap-1 absolute  ">
        {[...new Array(5)].map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className=" p-1 cursor-pointer "
            >
              <div className=" w-16 h-1 bg-black/5 backdrop-blur-[20px] rounded-full   ">
                sss
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
