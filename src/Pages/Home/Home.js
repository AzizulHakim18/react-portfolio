
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
import { Link } from 'react-router-dom';


const Home = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])



    return (
        <div>
            <Particles options={particlesOptions} init={particlesInit} />

            <section >
                <div >
                    <div className="title-name flex justify-center items-center">
                        <h1>
                            <i class="title-name-style"></i>
                            <span id="a">AZIZUL</span>
                            <span id="b">HAKIM</span>
                            <span id="c">RONY</span>
                        </h1>
                    </div>
                    <div className='flex justify-center my-3'>
                        <h2 class="title-work">MERN STACK WEB DEVELOPER.</h2>
                    </div>

                    <div className='flex justify-center items-center'>
                        <Link className="btn btn-outline btn-info mx-3"
                            to='/contact'>Hire Me</Link>
                        <motion.button className="btn btn-outline btn-info mx-3"
                            initial={{ x: "1oovw" }}
                            animate={{ x: 0 }}
                        >DOWNLOAD MY CV</motion.button>
                    </div>

                    <div className='flex justify-center items-center m-4 p-4'>
                        <Link target="_blank" to="https://www.linkedin.com/in/azizul-hakim-9757bb228/"> <AiFillLinkedin className=' text-cyan-600 h-8 w-8 mx-2'></AiFillLinkedin></Link>
                        <Link target="_blank" to="https://github.com/AzizulHakim18"> <AiFillGithub className=' text-cyan-600 h-8 w-8 mx-2'></AiFillGithub></Link>
                        <Link target="_blank" to="https://www.facebook.com/profile.php?id=100077263034519"> <AiFillFacebook className=' text-cyan-600 h-8 w-8 mx-2'></AiFillFacebook></Link>
                        <Link target="_blank" to="https://www.instagram.com/asgardian_godzz/">   <AiOutlineInstagram className=' text-cyan-600 h-8 w-8 mx-2'></AiOutlineInstagram></Link>
                    </div>
                </div>

            </section>



        </div>
    );
};

export default Home;