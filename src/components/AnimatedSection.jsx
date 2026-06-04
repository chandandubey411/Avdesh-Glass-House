import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

const AnimatedSection = ({
  children,
  className = "",
  variant = fadeUp,
  delay = 0,
  once = true,
  margin = "-80px",
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={variant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
