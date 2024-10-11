'use client'
import PageTransition from '@/components/PageTransition'
import React from 'react'
import Link from 'next/link'
import {Linkedin,Instagram,Github } from 'lucide-react'
import { useState } from 'react';
import Button from '@/components/Button'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <PageTransition>
      <div className='pt-20'>
    <div className="max-w-lg mx-auto p-8 bg-[#EC935F] shadow-lg rounded-3xl">
      <h2 className="text-2xl font-bold mb-6 text-[#FAE9D0] text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name" className="block text-sm font-semibold text-[#FAE9D0]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border bg-[#FAE9D0] text-[#EC935F] border-gray-300 rounded-md shadow-sm focus:ring-[#E94F54] focus:border-[#E94F54] sm:text-sm outline-none"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-[#FAE9D0]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border bg-[#FAE9D0] text-[#EC935F] border-gray-300 rounded-md shadow-sm focus:ring-[#E94F54] focus:border-[#E94F54] sm:text-sm outline-none"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold text-[#FAE9D0]">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border bg-[#FAE9D0] text-[#EC935F] border-gray-300 rounded-md shadow-sm focus:ring-[#E94F54] focus:border-[#E94F54] sm:text-sm outline-none"
            placeholder="Subject"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-[#FAE9D0]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border bg-[#FAE9D0] text-[#EC935F] border-gray-300 rounded-md shadow-sm focus:ring-[#E94F54] focus:border-[#E94F54] sm:text-sm outline-none"
            rows="5"
            placeholder="Write your message..."
          />
        </div>

        <button type="submit">
          <Button  title="Submit" >
          Send Message
          </Button>
        </button>
      </form>
    </div>
    <div className='flex flex-col px-10 justify-center items-center w-full gap-5 '>
      <h1 className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl font-black text-[#FAE9D0]'>Get in touch at suhebism@gmail.com</h1>
      <h1 className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl font-black text-[#FAE9D0]'>+91 8660215481</h1>
      <div className='flex gap-5 md:gap-10 text-[#FAE9D0] '>
        <Link href='https://www.linkedin.com/in/suhebism/' target="_blank" rel="noopener noreferrer"><Linkedin /></Link>
        <Link href='https://github.com/suhebism' target="_blank" rel="noopener noreferrer"><Github /></Link>
        <Link href='https://www.instagram.com/suhebism/' target="_blank" rel="noopener noreferrer"><Instagram  /></Link>
      </div>
      
    </div>
    </div>
    </PageTransition>
  )
}

export default page
