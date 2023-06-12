import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeAndScaleProps = {
  children: ReactNode;
};

export const FadeAndScale = ({ children }: FadeAndScaleProps) => {
  const handleClick = () => {
    // Animate the element to fade out and reduce size on click
    // The `onComplete` function sets the `scale` to 1 to reset it after the animation
    return {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 1,
        ease: "easeInOut",
        onComplete: () => {
          // return { scale: 1 };
        },
      },
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
};
