'use client'
import Image from "next/image";
import {motion } from 'framer-motion';
import HomeBanner from "@/components/HomeBanner";
import ProjectSection from "@/components/ProjectSection";
export default function Home() {
  return (
    <div className=''>
      <HomeBanner />
      <ProjectSection />
    </div>
  );
}
