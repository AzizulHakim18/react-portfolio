import React from 'react';
import "./Service.css";
import { MdDeveloperMode } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';
import { FaCode, FaLaptopCode, FaSearchengin, FaBug } from 'react-icons/fa';
import { motion } from "framer-motion";


const Service = () => {
    return (
        <div>
            <div>
                <motion.h1
                    className='lg:text-6xl md:text-5xl sm:text-3xl font-extrabold text-center text-green-600 m-4 p-2'
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                >SERVICES</motion.h1>
                <motion.p className='lg:text-xl md:text-xl sm:text-lg lg:font-semibold text-justify'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    I'm passionate about making the web accessible to everyone and I enjoy solving complex problems using web technologies.I work on a wide variety of interesting and meaningful projects on a daily basis.
                </motion.p>
            </div>

            <div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <h3><MdDeveloperMode className='h-12 w-12 mx-auto'></MdDeveloperMode>
                                    <div>Web Developmet</div>
                                </h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>I'm passionate about making the web accessible to everyone and I enjoy solving complex problems using web technologies.</p>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <h3><DiResponsive className='h-12 w-12 mx-auto'></DiResponsive>
                                    <div>Responsive Design</div>
                                </h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>I am passionate about responsiveness and making the websites I build look good on different devices, browsers and cross platforms using both "mobile first" approach and desktop "media queries"</p>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <h3><FaCode className='h-12 w-12 mx-auto'></FaCode>
                                    <div>Reusable & Minimal code</div>
                                </h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>I try my best to write as minimal code as possible by using tools like CSS Variables and writing custom utility classes.</p>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <h3 ><FaLaptopCode className='h-12 w-12 mx-auto'></FaLaptopCode>
                                    <div>
                                        Great UI/UX & Accessibility</div>
                                </h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>I have a strong eye for designs, which allows me to transform templates into pixel-perfect code while making it accessible to all users. Principles I picked up from solving various frontendmentor challenges.</p>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <h3 ><FaBug className='h-12 w-12 mx-auto'></FaBug>
                                    <div>
                                        Bug Fixing</div>
                                </h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>A patch is a set of changes to a computer program or its supporting data designed to update, fix, or improve it. This includes fixing security vulnerabilities and other bugs.</p>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <h3 ><FaSearchengin className='h-12 w-12 mx-auto'></FaSearchengin>
                                    <div>

                                        Search Engine Optimization</div>
                                </h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>I employ best SEO practices like "Semantic HTML" and more on websites and projects I work on to improve the site visibility and rankings on Google.</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Service;