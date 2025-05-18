import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
// Reusable card component to avoid repetition
function CardItem({ image, type, title, isMobile, delay }) {
  return (
    <motion.div
      className="card-animate overflow-hidden rounded-xl shadow-lg transition-all duration-500 relative group"
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.5, delay }}
    >
      {/* Image background with blur */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center blur-[2px] transition-all duration-300 group-hover:blur-sm"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Color overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
      
      <div className="h-44 p-4 flex flex-col justify-end text-white relative overflow-hidden">
        {/* Content that shows by default and moves up on hover */}
        <div className="transition-all duration-300 transform group-hover:-translate-y-10">
          <span className="mb-1 inline-block font-outfit rounded-full bg-white/20 px-2 py-0.5 text-xs backdrop-blur-sm">
            {type}
          </span>
          <h3 className="text-base font-outfit font-semibold mb-1">
            {title}
          </h3>
        </div>
        
        {/* Button that appears on hover */}
        <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="w-full rounded-full font-outfit cursor-pointer bg-transparent backdrop-blur-sm text-white border border-white/30 px-4 py-2 flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-white/30">
            <span>Explore More</span>
            <IoIosArrowRoundForward className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CardItem