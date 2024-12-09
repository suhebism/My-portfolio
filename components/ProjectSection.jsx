import React from "react";
import ProjectCard from "./ProjectCard";
import chargespot from "@/public/image.png";
import centarius from "@/public/centarius.png";
import upsc from "@/public/upsc.png";
import homeshiksha from "@/public/homeshiksha.png";
import cookie from '@/public/cookie-.png'
import spilledCoffee from '@/public/spilled-coffee-cup.png'
import pizza from '@/public/pizza.png'
import pastry from '@/public/cream-pastry.png'


const ProjectSection = () => {
  return (
    <div className="px-10 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
        <ProjectCard
          img={chargespot}
          img2={cookie}
          title="ChargeSpot"
          desc="EV Vehicle"
          projectDetail=" Streamlining EV Charging with User-Centered Design"
          url='https://chargespot.app/'
        />
        <ProjectCard
          img={centarius}
          img2={spilledCoffee}
          title="Centarius.app"
          desc="Gaming platform"
          projectDetail="Redefining Gaming with Seamless Contests & Rewards"
          url='https://www.centarius.app/'
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
        <ProjectCard
          img={homeshiksha}
          img2={pizza}
          title="Homeshiksha"
          desc="Online Tutoring"
          projectDetail="Designing a Seamless Tutor-Student Platform"
          url='https://student.homeshiksha.com/need-a-tutor'
        />
        <ProjectCard
          img={upsc}
          img2={pastry}
          title="Quiz App - in Production"
          desc="UPSC Quiz App"
          projectDetail="UPSC Preparation:Quiz App for Focused Learning"
          url='https://quiz-app-alpha-sand.vercel.app/'
        />
      </div>
      <p className='text-3xl font-black text-[#FAE9D0] text-center'>Plenty left untold</p>
    </div>
  );
};

export default ProjectSection;
