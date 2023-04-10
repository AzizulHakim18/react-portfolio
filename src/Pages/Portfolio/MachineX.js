import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import img1 from '../../assets/img/machinex1.png';
import img2 from '../../assets/img/machinex2.png';
import img3 from '../../assets/img/machinex3.png';
import img4 from '../../assets/img/machinex4.png';
const MachineX = () => {
    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold text-cyan-500'>5.MachineX</h3>
            </div>
            <div className='w-full h-full  md:flex lg:flex  lg:justify-center items-center'>
                <motion.div className='lg:w-1/2 sm:w-full text-justify lg:m-4 lg:p-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >

                    <div className='sm:text-sm md:text-base lg:text-base'>
                        <p>
                            The Machinex website is a MERN stack web application that allows users to purchase services and view their details after the purchase. The website features a fully responsive design, ensuring that it can be accessed from any device.

                            The website has been developed using the popular MERN stack technologies, including MongoDB database, Express.js, React.js, and Node.js. Firebase Authentication system has also been implemented to ensure secure user login and data management.

                            The Machinex website is a single-page application, which means that users can navigate between pages without having to reload the entire website. This results in faster page load times and a smoother user experience.

                            The website offers a range of services that can be purchased by users, including maintenance, repair, and installation services. Once a user purchases a service, they can view their details and track the progress of their service.

                            Overall, the Machinex website is a reliable and efficient platform for purchasing services and managing user data. Its responsive design and single-page application make it easy to use on any device, while the use of MERN stack technologies and Firebase Authentication system ensure secure user data management.</p>

                    </div>

                    <div className='flex '>
                        <Link target='_blank' to="https://github.com/AzizulHakim18/machine-x"><AiFillGithub className='w-12 h-12 m-2 p-2 text-cyan-500'></AiFillGithub></Link>
                        <Link target='_blank' to="https://singular-rolypoly-047f9e.netlify.app"><BiLinkExternal className='w-12 h-12 m-2 p-2 text-cyan-500'></BiLinkExternal></Link>
                    </div>
                </motion.div>
                <div className='lg:w-1/2' >
                    <Tilt className="Tilt" options={{ max: 25, speed: 450 }} >
                        <div className='w-11/12 h-1/4  bg-gray-900 border-2 border-emerald-500 rounded-lg shadow-lg shadow-cyan-500/50 '>

                            <div className="carousel w-full">
                                <div id="machine1" className="carousel-item w-full">
                                    <img src={img1} alt="" className="w-full" />
                                </div>
                                <div id="machine2" className="carousel-item w-full">
                                    <img src={img2} alt="" className="w-full" />
                                </div>
                                <div id="machine3" className="carousel-item w-full">
                                    <img src={img3} alt="" className="w-full" />
                                </div>
                                <div id="machine4" className="carousel-item w-full">
                                    <img src={img4} alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#machine1" className="btn btn-xs">1</a>
                                <a href="#machine2" className="btn btn-xs">2</a>
                                <a href="#machine3" className="btn btn-xs">3</a>
                                <a href="#machine4" className="btn btn-xs">4</a>
                            </div>
                        </div>
                    </Tilt>


                </div>
            </div>
        </div>
    );
};

export default MachineX;