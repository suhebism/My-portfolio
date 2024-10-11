'use client'
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';


const page = () => {
  return (
    <PageTransition>
    <div className='flex flex-col items-center h-screen justify-center'>
          <h1 className="text-7xl font-black text-[#FAE9D0]">
            Hello!
          </h1>
          <p className="text-[#FAE9D0] w-1/2 text-center text-lg">
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
    </PageTransition>
  )
}

export default page
