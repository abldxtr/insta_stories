"use client";

import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

type props = {
  imgsrc: string;
  children?: React.ReactNode;
};

export default function MotionImg({ imgsrc, children }: props) {
  return (
    <AnimatePresence>
      <motion.div
        // initial={{
        // clipPath: "polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)",
        // }}
        // animate={{
        // clipPath: "polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)",
        // clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
        // }}
        initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        exit={{
          clipPath: "inset(0% 0% 0% 0%)",
          // rotate: 25,
          // scale: 2,
          // transition: { delay: 1 },
        }}
        transition={{ duration: 0.5 }}
        className={classNames(
          " w-full h-full ",
          // active === 1 && "bg-red-300",
          // active === 2 && "bg-green-300 ",
          // active === 3 && "bg-blue-300",
        )}
      >
        {/* <AnimatePresence mode="sync"> */}
        <motion.img
          src={imgsrc}
          //   key={index}
          alt="pic"
          // width={100}
          // height={80}
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
            // transition: { delay: 1 },
          }}
          transition={{
            // delay: 0.5,
            type: "spring",
            bounce: 0,
          }}
          className=" object-cover w-full h-full  "
        />
        {/* </AnimatePresence> */}
      </motion.div>
    </AnimatePresence>
  );
}
