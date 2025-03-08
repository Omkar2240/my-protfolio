'use client';

import { motion } from "framer-motion";
import { GraduationCap, Instagram, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import {  useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div 
      ref={inViewRef} 
      className="flex flex-col items-center md:mb-0 justify-start pt-96 md:!pt-0 px-10 md:px-20 min-h-screen"
    >
      <motion.h2 
        className="text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      {/* Container of about me */}
      <motion.div 
        className="max-w-5xl w-full shadow-xl rounded-3xl p-10 bg-white/5 backdrop-blur-lg flex flex-col md:flex-row gap-10 border border-white/20"
        initial={{ scale: 0.9 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center md:w-2/3 text-white">
          <p className="text-2xl mb-6">
            Hey! I&apos;m a passionate web developer and tech enthusiast, constantly exploring new technologies
            to build impactful digital experiences. I love working on projects that solve real-world problems
            and integrate sustainability and innovation.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <Link href="https://instagram.com/omkar_ramgirwar_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <Instagram className="w-10 h-10" />
            </Link>
            <Link href="https://www.linkedin.com/in/omkar-ramgirwar-5b9409226/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
              <Linkedin className="w-10 h-10" />
            </Link>
            <Link href="https://github.com/Omkar2240" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <Github className="w-10 h-10" />
            </Link>
            <Link href="https://x.com/omkar_ramgirwar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <Twitter className="w-10 h-10" />
            </Link>
          </div>
        </div>
        <motion.div 
          className="md:w-1/3 flex flex-col items-center text-white"
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <GraduationCap className="w-16 h-16 mb-4" />
          <span className="text-2xl font-medium text-center">B.Tech Computer Science</span>
          <span className="text-lg text-center">Tier 3 College</span>
        </motion.div>
      </motion.div>
      <motion.div 
  className="mt-16 w-full max-w-4xl bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20"
  initial={{ opacity: 0, y: 20 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-3xl font-bold text-white text-center mb-6">My Developer Journey 🚀</h3>
  <div className="relative border-l-4 border-purple-500 pl-6 space-y-6">
    <div>
      <h4 className="text-xl font-semibold text-white">✨ First Line of Code</h4>
      <p className="text-white/80">Started coding in C++ and built a simple calculator! (Year: 2023 😉)</p>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white">🌍 Entered Web Development</h4>
      <p className="text-white/80">Built my first React project & never looked back!</p>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white">🔥 Open Source & Hackathons</h4>
      <p className="text-white/80">Started contributing to open source & winning hackathons!</p>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white">🚀 The Future</h4>
      <p className="text-white/80">Building impactful projects, learning AI, and dreaming big!</p>
    </div>
  </div>
</motion.div>

    </div>
  );
}
