"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import ImageComponent from "./ImageComponent";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-72 md:mt-20 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
                <motion.div variants={slideInFromTop}>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <div className="flex items-center Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9]">
                            <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
                            <h1 className="Welcome-text text-sm">Fullstack Developer</h1>
                        </div>
                        <div className="flex items-center Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9]">
                            <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
                            <h1 className="Welcome-text text-sm">Data Science Student</h1>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[800px]"
                >
                    <span>
                        I&apos;m
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}Omkar Ramgirwar{" "}
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] mx-auto md:mx-0"
                >
                    I&apos;m a Full Stack Developer with experience in Website and
                    Mobile development. Check out my projects and skills.
                </motion.p>
                <div className="flex gap-5">

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] mx-auto md:mx-0"
                    href="/#about"
                >
                    Know More About Me!
                </motion.a>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[230px] mx-auto md:mx-0"
                    href="https://drive.google.com/file/d/1KU298fm-LeE_FVVUrVVa0mMrA7aPr7z9/view?usp=sharing"
                    target="_blank"
                     id="about"
                >
                    View Resume
                </motion.a>
                </div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center mt-20 md:mt-0"
            >
                {/* <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={500}
                    width={500}
                    className="w-[300px] md:w-[500px] lg:w-[650px]"
                /> */}
                <ImageComponent/>
            </motion.div>
            
        </motion.div>
    );
};

export default HeroContent;