import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ text, bgColor = "bg-secondary", desc="" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  return (
<div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[90%] mx-auto md:w-1/3 cursor-pointer relative"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full aspect-square relative"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div
          className={`rounded-[10px] absolute ${bgColor} text-center p-4 text-white flex items-center justify-center h-full w-full overflow-hidden`}
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl tracking-wide break-words">
            {text}
          </h2>
        </div>
        <div
          className={`rounded-[10px] absolute ${bgColor} text-center p-4 text-white w-full h-full flex items-center justify-center overflow-hidden`}
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wide break-words overflow-auto max-h-full">
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
