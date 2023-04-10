import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import Tilt from 'react-tilt';
import img1 from '../../assets/img/quick-quiz1.png';
import img2 from '../../assets/img/quick-quiz2.png';
import img3 from '../../assets/img/quick-quiz3.png';
import img4 from '../../assets/img/quick-quiz4.png';
import { Link } from 'react-router-dom';
const QucikQuiz = () => {
    return (
        <div>

            <div>
                <h3 className='text-2xl font-semibold text-cyan-500'>2.Quick Quiz</h3>
            </div>
            <div className='w-full h-full lg:flex md:flex justify-center items-center'>
                <div className='lg:w-1/2'>
                    <Tilt className="Tilt" options={{ max: 25, speed: 450 }} >
                        <div className='w-11/12 h-1/4  bg-gray-900 border-2 border-emerald-500 rounded-lg shadow-lg shadow-cyan-500/50 '>

                            <div className="carousel w-full">
                                <div id="quiz1" className="carousel-item w-full">
                                    <img src={img1} alt="" className="w-full" />
                                </div>
                                <div id="quiz2" className="carousel-item w-full">
                                    <img src={img2} alt="" className="w-full" />
                                </div>
                                <div id="quiz3" className="carousel-item w-full">
                                    <img src={img3} alt="" className="w-full" />
                                </div>
                                <div id="quiz4" className="carousel-item w-full">
                                    <img src={img4} alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#quiz1" className="btn btn-xs">1</a>
                                <a href="#quiz2" className="btn btn-xs">2</a>
                                <a href="#quiz3" className="btn btn-xs">3</a>
                                <a href="#quiz4" className="btn btn-xs">4</a>
                            </div>
                        </div>
                    </Tilt>


                </div>
                <div className='lg:w-1/2'>
                    <motion.div className='w-full text-justify lg:m-4 lg:p-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >

                        <div className='sm:text-sm md:text-base lg:text-base w-full' >
                            <p>
                                The Quick Quiz website is a MERN stack web application designed to provide a fun and engaging experience for beginners. The website allows users to take quizzes and see their results once they complete the quiz.

                                The website has been developed using popular technologies such as React.js, React Router DOM, Firebase, Tailwind CSS, and DaisyUI. The use of these technologies ensures a smooth and seamless user experience.

                                The private route feature ensures that users are authorized to access certain parts of the website. This ensures maximum security of user data. Additionally, users can view their quiz results and track their progress over time.

                                The Quick Quiz website is perfect for beginners who want to test their knowledge in a fun and interactive way. The website provides an engaging experience that will keep users coming back for more. With its easy-to-use interface and reliable technology, the Quick Quiz website is the perfect choice for anyone looking to challenge themselves and have fun at the same time.
                            </p>

                        </div>

                        <div className='flex '>
                            <Link target='_blank' to="https://github.com/AzizulHakim18/quick-quize-final"><AiFillGithub className='w-12 h-12 m-2 p-2 text-cyan-500'></AiFillGithub></Link>
                            <Link target='_blank' to="https://transcendent-moxie-0f80b4.netlify.app/"><BiLinkExternal className='w-12 h-12 m-2 p-2 text-cyan-500'></BiLinkExternal></Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default QucikQuiz;