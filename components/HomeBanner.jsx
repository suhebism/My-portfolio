import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import PageTransition from "./PageTransition";
import burger from '@/public/burger.png'
import donut from '@/public/donut.png'
import drink from '@/public/drink.png'
import tomato from '@/public/tomato.png'
const HomeBanner = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <div className='flex flex-col items-center'>
          <h1 className="text-7xl font-black text-[#FAE9D0]">
            Hello!
          </h1>
          <p className="text-[#FAE9D0] p-5 w-full sm:w-1/2 text-center text-xs">
            {" "}
            I'm <span className="font-black">Suheb Ahmed</span>- a product
            designer and front end developer who thrives on turning the ordinary
            into the extraordinary. Think of this portfolio as a gallery of
            innovation where each project is a canvas, every detail a
            brushstroke, and user experience the masterpiece. Join me on a
            journey where imagination meets precision, and let's design
            something remarkable together.
          </p>
        </div>
        <div className='flex gap-3 sm:gap-10'>
            <Image className='w-16 h-16 sm:w-28 sm:h-28 rotate-6 floating-on-hover' src={tomato} />
            <Image className='w-16 h-16 sm:w-28 sm:h-28 -rotate-12 floating-on-hover' src={drink} /> 
            <Image className='w-16 h-16 sm:w-28 sm:h-28 floating-on-hover' src={donut} /> 
            <Image className='w-16 h-16 sm:w-28 sm:h-28 rotate-6 floating-on-hover' src={burger} /> 
            
        </div>
        <div className='flex gap-4'>
            <Link href='/contact'><Button title='Contact' /></Link>
            <Link href='/projects'><Button title='Projects' /></Link>
            
        </div>
      </div>
    </PageTransition>
  );
};

export default HomeBanner;
