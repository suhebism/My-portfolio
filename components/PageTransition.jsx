// components/PageTransition.js
'use client'
import { motion } from "framer-motion";

const pageTransitionVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly moved down
  visible: { opacity: 1, y: 0 },  // Fully visible and in place
  exit: { opacity: 0, y: -20 },    // Exit by fading out and moving up
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransitionVariants}
      transition={{ duration: 0.5 }} // Animation duration
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
