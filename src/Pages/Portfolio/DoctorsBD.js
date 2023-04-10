import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import img1 from '../../assets/img/doctors-bd1.png';
import img2 from '../../assets/img/doctors-bd2.png';
import img3 from '../../assets/img/doctors-bd3.png';
import img4 from '../../assets/img/doctors-bd4.png';

const DoctorsBD = () => {
    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold text-cyan-500'>3.Doctors BD</h3>
            </div>
            <div className='w-full h-full  md:flex lg:flex  lg:justify-center items-center'>
                <motion.div className='lg:w-1/2 sm:w-full text-justify lg:m-4 lg:p-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >

                    <div className='sm:text-sm md:text-base lg:text-base'>
                        <p>
                            The Doctors BD website is a MERN stack web application that is designed to enable users to book appointments with doctors. The website has been developed using technologies such as MongoDB database, Node.js, React.js, Firebase, React Datepicker, React Router DOM, JWT environment variable, and private routes.

                            The website has two types of users - the admin and the general users. The users can create appointments, view their own appointments, view the admin, and also see all appointments scheduled for the day. The admin, on the other hand, can manage appointments, make users admin, and delete appointments.

                            The website uses Firebase Authentication system to ensure secure user login and user data management. With the React Datepicker feature, users can select dates and times for their appointments with ease. The private routes ensure that users are authorized to access certain parts of the website, ensuring maximum security.

                            Overall, the Doctors BD website is a reliable platform that simplifies the appointment booking process while ensuring the security of user data.
                        </p>

                    </div>

                    <div className='flex '>
                        <Link target='_blank' to="https://github.com/AzizulHakim18/doctors-portal-client-side"><AiFillGithub className='w-12 h-12 m-2 p-2 text-cyan-500'></AiFillGithub></Link>
                        <Link target='_blank' to="https://doctors-portals-b725f.firebaseapp.com/"><BiLinkExternal className='w-12 h-12 m-2 p-2 text-cyan-500'></BiLinkExternal></Link>
                    </div>
                </motion.div>
                <div className='lg:w-1/2' >
                    <Tilt className="Tilt" options={{ max: 25, speed: 450 }} >
                        <div className='w-11/12 h-1/4  bg-gray-900 border-2 border-emerald-500 rounded-lg shadow-lg shadow-cyan-500/50 '>

                            <div className="carousel w-full">
                                <div id="doctrs1" className="carousel-item w-full">
                                    <img src={img1} alt="" className="w-full" />
                                </div>
                                <div id="doctrs2" className="carousel-item w-full">
                                    <img src={img2} alt="" className="w-full" />
                                </div>
                                <div id="doctrs3" className="carousel-item w-full">
                                    <img src={img3} alt="" className="w-full" />
                                </div>
                                <div id="doctrs4" className="carousel-item w-full">
                                    <img src={img4} alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#doctrs1" className="btn btn-xs">1</a>
                                <a href="#doctrs2" className="btn btn-xs">2</a>
                                <a href="#doctrs3" className="btn btn-xs">3</a>
                                <a href="#doctrs4" className="btn btn-xs">4</a>
                            </div>
                        </div>
                    </Tilt>


                </div>
            </div>
        </div>
    );
};

export default DoctorsBD;