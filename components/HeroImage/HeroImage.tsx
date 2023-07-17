import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  const HoverImage = () => {
    return (
      <Image
        src={"/images/bandit-pic"}
        alt={"Group Picture"}
        className="w-full h-full object-cover object-center"
      />
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="filter grayscale brightness-50 transition-shadow duration-300 z-1 h-30 sm:h-full w-full"
      >
        {HoverImage()}
      </motion.div>
    </>
  );
}
