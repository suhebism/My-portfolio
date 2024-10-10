import React from "react";
import ProjectCard from "./ProjectCard";
import chargespot from '@/public/image.png'
const ProjectSection = () => {
  return (
    <div className="px-10 ">
      <div className='flex gap-5 items-center justify-center'>

      <ProjectCard
        img={chargespot}
        title="ChargeSpot"
        desc="EV Vehicle"
        projectDetail="Routine Builder - Improving the Skincare Product Shopping Experience"
        />
       <ProjectCard
        img={chargespot}
        title="Centarius.app"
        desc="Gaming platform"
        projectDetail="Routine Builder - Improving the Skincare Product Shopping Experience"
        />
        </div>
    </div>
  );
};

export default ProjectSection;
