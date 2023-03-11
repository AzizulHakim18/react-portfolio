import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3, SiFirebase, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { DiNodejsSmall } from 'react-icons/di';
import "./Skills.css"
import Service from '../Services/Service';
import { motion } from "framer-motion";

const Skills = () => {



    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div>
            <motion.h1
                className='lg:text-6xl md:text-5xl sm:text-3xl font-extrabold text-center text-green-600 m-4 p-2'
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >SKILLS</motion.h1>
            <motion.p className='lg:text-xl md:text-xl sm:text-lg lg:font-semibold text-justify'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

            >
                As an expert in the MERN stack, I possess a strong command of web development technologies including MongoDB, Express.js, React.js, and Node.js. I have experience building full-stack web applications, designing and implementing APIs, and working with front-end frameworks. Additionally, I am knowledgeable about database design, RESTful architecture, and agile development methodologies, and can apply these concepts to build scalable and robust web applications.
            </motion.p>

            <motion.div
                className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-11/12 mx-auto lg:my-4 lg:py-3'
                variants={container}
                initial="hidden"
                animate="visible"


            >

                <AiFillHtml5
                    className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-white hover:text-orange-500 duration-300' variants={item}></AiFillHtml5>
                <SiCss3 className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-white hover:text-sky-700 duration-300' variants={item}></SiCss3>
                <FaBootstrap className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-white hover:text-violet-800 duration-300' variants={item}></FaBootstrap>
                <SiTailwindcss className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-white hover:text-sky-400 duration-300' variants={item}></SiTailwindcss>
                <TbBrandJavascript className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:text-white hover:bg-orange-500  duration-300' variants={item}></TbBrandJavascript>
                <FaReact className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-black hover:text-sky-900 duration-300' variants={item}></FaReact>
                <SiFirebase className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-white hover:text-yellow-500 duration-300' variants={item}></SiFirebase>
                <SiExpress className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-white hover:text-black duration-300' variants={item}></SiExpress>
                <DiNodejsSmall className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-white hover:text-green-600 duration-300' variants={item}></DiNodejsSmall>
                <SiMongodb className='item h-32 w-32 m-3 p-3 bg-gray-900 border-2 border-emerald-500 shadow-lg shadow-cyan-500/50 border-1 rounded-lg hover:animate-bounce hover:bg-gray-900 hover:text-green-600 duration-300' variants={item}></SiMongodb>


            </motion.div>

            <section>
                <Service></Service>
            </section>
        </div>
    );
};

export default Skills;