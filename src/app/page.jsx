"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <blockquote className="text-4xl md:text-6xl font-bold">
           
          </blockquote>
          <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
              <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"The interface is like a painting, where we draw and user dances on them"</p>
          </blockquote>
          {/* DESC */}
          <p className="md:text-xl">
            My approach involves closely monitoring and analyzing user preferences and
            habits. This allows me to effectively address front-end issues and create the
            best possible experience for users.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/about" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Who am i ? 
            </Link>
            <Link href="/portfolio" className="p-4 rounded-lg ring-1 ring-black">
              See my project
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
