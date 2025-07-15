"use client";


import ArrowRight from "@/assets/arrow-right.svg"
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import Image from "next/image";
import {motion, useScroll,useTransform, useMotionValueEvent} from "framer-motion"
import { useRef } from "react";

export const CallToAction = () => {
    const heroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );




  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <motion.img
        src={starImage.src} 
        alt="Star Image" 
        width={300} 
        className="absolute -left-[330px] -top-[80px]"
        style={{
          translateY: translateY,
        }}
        />
        <motion.img
        src={springImage.src} 
        alt="Spring Image" 
        width={300} 
        className="absolute -right-[331px] -top-[28px]"
        style={{
          translateY: translateY,
        }}
        />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5"/>
            </button>
        </div>
      </div>
    </section>
  );
};
