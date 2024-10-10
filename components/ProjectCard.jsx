'use client'
import React from 'react'
import { motion } from "framer-motion"
const ProjectCard = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
    >
      <div>Projects</div>
    </motion.div>
  )
}

export default ProjectCard
