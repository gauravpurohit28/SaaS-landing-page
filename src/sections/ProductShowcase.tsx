"use client";

import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png"
import tube from "@/assets/tube.png"
import Image from "next/image";
import {motion, useScroll,useTransform, useMotionValueEvent} from "framer-motion"
import { useRef } from "react";

export const ProductShowcase = () => {
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
    <section ref={heroRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>
        </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS
            website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10" />
        <motion.img 
        src={pyramid.src} 
        alt="pyramid" 
        height={262} 
        width={262} 
        className="hidden md:block absolute -right-36 -top-32"
        style={{
          translateY: translateY,
        }}
        />
        <motion.img 
        src={tube.src} 
        alt="tube" 
        height={262} 
        width={262}
        className="hidden md:block absolute bottom-24 -left-36"
        style={{
          translateY: translateY,
        }}
        />
        </div>
      </div>
    </section>
  );
};
