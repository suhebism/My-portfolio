import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='w-full h-12 px-10 bg-white flex items-center justify-between'>
      <Link href='/' className='text-black'>Home</Link>
      <div className='flex gap-10'>
        <Link href='projects' className='text-black'>Project</Link>
        <Link href='about' className='text-black'>About</Link>
        <Link href='blog' className='text-black'>Blog</Link>
        <Link href='contact' className='text-black'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
