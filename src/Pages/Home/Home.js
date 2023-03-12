import React from 'react';
import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import '../../App.css';
import particlesOptions from "../../particles.json";
import "./Home.css"
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { motion } from "framer-motion";

const Home = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    return (
        <div>
            <Particles options={particlesOptions} init={particlesInit} />

            <section className="App-header">

                <div>
                    <div class="title-name">
                        <h1>
                            <i class="title-name-style"></i>
                            <span id="a">AZIZUL</span>
                            <span id="b">HAKIM</span>
                            <span id="c">RONY</span>
                        </h1>
                    </div>
                </div>

                <div>
                    <h2 class="title-work">JUNIOR WEB DEVELOPER.</h2>
                </div>

                <div>



                    <motion.button className="btn btn-outline btn-info mx-3"

                    >HIRE ME</motion.button>
                    <motion.button className="btn btn-outline btn-info mx-3"
                        initial={{ x: "1oovw" }}
                        animate={{ x: 0 }}
                    >DOWNLOAD MY CV</motion.button>
                </div>

                <div className='flex m-4 p-4'>
                    <AiFillLinkedin className=' text-cyan-600 h-8 w-8 mx-2'></AiFillLinkedin>
                    <AiFillGithub className=' text-cyan-600 h-8 w-8 mx-2'></AiFillGithub>
                    <AiFillFacebook className=' text-cyan-600 h-8 w-8 mx-2'></AiFillFacebook>
                    <AiOutlineInstagram className=' text-cyan-600 h-8 w-8 mx-2'></AiOutlineInstagram>
                </div>

            </section>



        </div>
    );
};

export default Home;