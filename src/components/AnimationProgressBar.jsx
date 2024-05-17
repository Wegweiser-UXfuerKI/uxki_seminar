import { motion, AnimatePresence } from "framer-motion";

export const AnimationProgressBar = ({ maxCount, currentCount }) => {
  const dots = [];

  for (let i = 0; i < maxCount; i++) {
    dots.push(
      <motion.div
        key={i}
        className="w-[6px] h-[6px] rounded-full"
        animate={{ backgroundColor: i < currentCount ? "#404040" : "#a1a1aa" }}
        transition={{ duration: 0.3, delay: 1.5 }}
      />
    );
  }
  return (
    <div className=" absolute bottom-5 flex justify-center items-center w-full">
      <div className="w-3/4 flex justify-between items-center space-x-1">
        <AnimatePresence>{dots}</AnimatePresence>
      </div>
    </div>
  );
};
