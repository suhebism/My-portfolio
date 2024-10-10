'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const menu = [
  {name: 'Home', path:'/'},
  {name: 'Projects', path:'/projects'},
  {name: 'About', path:'/about'},
  {name: 'Contact', path:'/contact'},
]
const Navbar = () => {
  return (
    <div className='flex px-10 justify-between items-center w-full h-10 fixed  backdrop-filter backdrop-blur-sm bg-opacity-10 z-50'>
      <Link href='/' className='text-[#80E7C3] text-lg'>Suheb Ahmed</Link>
      <div className='flex gap-10'>
        {menu.map((item, index)=>(
            <Link href={item.path} >
              <div className='text-[#FAE9D0] hover:underline underline-offset-2 transition-all duration-500 ease-in-out'>{item.name}</div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
