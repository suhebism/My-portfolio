
'use client'
import { motion } from "framer-motion";

const pageTransitionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },   
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransitionVariants}
      transition={{ duration: 0.5 }} 
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
