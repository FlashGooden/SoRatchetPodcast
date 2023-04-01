import { motion } from "framer-motion";
import Image from "next/image";
import heroPic from "../../public/images/trap-museum.jpeg";
import banditPic from "../../public/images/bandit-pic.jpg";
import React, { useState } from "react";

export default function HeroImage() {
  const [isHovering, setIsHovering] = useState(false);

  const HoverImage = () => {
    return (
      <Image
        src={isHovering ? heroPic : banditPic}
        alt={"Group Picture"}
        className="relative m-auto mt-9 w-full px-5 filter grayscale transition-shadow duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        // figure out a slow transition for image
        // style={{ opacity: 1, transition: "opacity 0.5s ease-in-out" }}
      />
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative purple"
      >
        {HoverImage()}
      </motion.div>
    </>
  );
}
