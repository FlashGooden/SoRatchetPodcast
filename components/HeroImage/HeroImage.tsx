import { motion } from 'framer-motion'
import Image from "next/image";
import heroPic from "../../public/images/trap-museum.jpeg";
import banditPic from "../../public/images/bandit-pic.jpg";
import {useHover} from 'react-use';
import React from 'react'

const imageWrapper = () =>
<Image
src={banditPic}
alt="Picture of the podcast group"
className="relative m-auto mt-9 w-full px-5 filter grayscale z-30"
width={undefined}
height={undefined}
/>

export default function HeroImage() {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative purple"
        >
          <Image
            src={banditPic}
            alt="Picture of the podcast group"
            className="relative m-auto mt-9 w-full px-5 filter grayscale z-30"
            width={undefined}
            height={undefined}
          />
          {/* <div className="absolute inset-0 border-4 border-gray-800 top-4"></div> */}
          {/* <div className="absolute left-0 bottom-0 bg-white shadow-lg transform -translate-x-4 translate-y-4" style={{width: '94%', height: '92%'}}></div> */}
        </motion.div>
  )
}
