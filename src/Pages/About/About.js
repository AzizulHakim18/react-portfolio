import { motion } from 'framer-motion';
import React from 'react';
import img from "../../assets/img/azizul_hakim_rony.png"
const About = () => {
    return (
        <div>
            <motion.h1
                className='text-6xl font-extrabold text-center text-green-600 m-4 p-2'
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >About Me
            </motion.h1>

            <div className='lg:flex justify-center items-center'>
                <motion.div className='w-full flex lg:m-8 lg:p-4'
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <img src={img} alt="profile" className='outline outline-offset-2 outline-4 outline-cyan-500 shadow-lg shadow-cyan-500/50' />
                </motion.div>
                <motion.div className='text-xl font-semibold text-justify my-3 py-3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h3>Hello! I'm Rony, a junior web developer.I'm enjoying to create things that live on the internet, whatever they are websites, applications, or anything in between. I'm highly proficient in HTML, CSS but have built some other projects with JavaScript. I'm currently working on improving my JavaScript skills by building various projects to enhance my abilities.</h3> <br />
                    <h3>I'm always eager to learn new things every day and keep up with the new technologies.My Goal is to become one of the best Web Developer in the world and work with a big companies.</h3>
                </motion.div>
            </div>
        </div>
    );
};

export default About;