'use client'
import PageTransition from '@/components/PageTransition'
import React from 'react'
import Link from 'next/link'
import {Linkedin,Instagram,Github } from 'lucide-react'

const page = () => {
  return (
    <PageTransition>
    <div className='flex flex-col px-10 justify-center items-center w-full gap-5 h-screen'>
      <h1 className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl font-black text-[#FAE9D0]'>Get in touch at suhebism@gmail.com</h1>
      <h1 className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl font-black text-[#FAE9D0]'>+91 8660215481</h1>
      <div className='flex gap-5 md:gap-10 text-[#FAE9D0] absolute bottom-3'>
        <Link href='https://www.linkedin.com/in/suhebism/' target="_blank" rel="noopener noreferrer"><Linkedin /></Link>
        <Link href='https://github.com/suhebism' target="_blank" rel="noopener noreferrer"><Github /></Link>
        <Link href='https://www.instagram.com/suhebism/' target="_blank" rel="noopener noreferrer"><Instagram  /></Link>
      </div>
      
    </div>
    </PageTransition>
  )
}

export default page
