"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ProjectCard = ({ img,title, desc,projectDetail,img2,url }) => {
  return (
    <div
      className="relative w-1/2 flex gap-5 border-[1px] border-[#fae9d04a] bg-[#EC935F] p-4 rounded-3xl items-center hover:scale-105 transition-all duration-300 ease-in-out"
    >
      
      <Image className="w-[250px] h-[250px] rounded-3xl" src={img} />
      <div className=" flex flex-col gap-2">
        <div>
          <h1 className="text-3xl font-black text-[#FAE9D0]">{title}</h1>
          <p className="text-sm  text-[#FAE9D0]">{desc}</p>
        </div>
        <div>
          <h1 className="text-lg font-black text-[#FAE9D0]">Case Study</h1>
          <p className="text-sm  text-[#FAE9D0]">{projectDetail}</p>
        </div>
        <div className="text-sm  text-[#FAE9D0]">Product Design | Frontend Development</div>
        <Link className='' href={url}
            target="_blank"
            rel="noopener noreferrer"><Button title='View'/></Link>
      </div>
      <Image src={img2}  width={100} className='absolute top-5 right-5'/>
    </div>
  );
};

export default ProjectCard;
