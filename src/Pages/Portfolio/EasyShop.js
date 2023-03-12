import React from 'react';
import Tilt from 'react-tilt'
import img1 from '../../assets/img/easy-shop-ss-11.png'
import img2 from '../../assets/img/easy-shop-ss-12.png'
import img3 from '../../assets/img/easy-shop-ss-13.png'
import img4 from '../../assets/img/easy-shop-ss-14.png'
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

import { Link } from 'react-router-dom';

const EasyShop = () => {
    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold text-cyan-500'>1.E-commerce Website</h3>
            </div>
            <div className='w-full h-full  md:flex lg:flex  lg:justify-center items-center'>
                <motion.div className='lg:w-1/2 sm:w-full text-justify lg:m-4 lg:p-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >

                    <div className='sm:text-sm md:text-base lg:text-base'>
                        <p>
                            This is a fully MERN stack base eCommerce website.Where you can add product in the cart section and make payment by using stripe.The main features of this project are pagination, add to cart using help of local storage your data can save automatically,also have a simple dashboard where you can add product and delete the product whatever you want and also have the authentication system. By using firebase you can easily log into google. And have the private route section.
                        </p>
                        <p>
                            One of the key features of the eCommerce project is the ability to add products dynamically, allowing store owners to add and update their product catalog quickly and easily. This feature enables the store to remain up-to-date with the latest product offerings, increasing customer satisfaction and engagement.Overall, the MERN stack Easy Shop project offers a secure, reliable, and user-friendly eCommerce platform, making it an ideal solution for businesses looking to expand their online presence.
                        </p>
                    </div>

                    <div className='flex '>
                        <Link ><AiFillGithub className='w-12 h-12 m-2 p-2 text-cyan-500'></AiFillGithub></Link>
                        <Link ><BiLinkExternal className='w-12 h-12 m-2 p-2 text-cyan-500'></BiLinkExternal></Link>
                    </div>
                </motion.div>
                <div className='lg:w-1/2' >
                    <Tilt className="Tilt" options={{ max: 25, speed: 450 }} >
                        <div className='w-11/12 h-1/4  bg-gray-900 border-2 border-emerald-500 rounded-lg shadow-lg shadow-cyan-500/50 '>

                            <div className="carousel w-full">
                                <div id="product1" className="carousel-item w-full">
                                    <img src={img1} alt="" className="w-full" />
                                </div>
                                <div id="product2" className="carousel-item w-full">
                                    <img src={img2} alt="" className="w-full" />
                                </div>
                                <div id="product3" className="carousel-item w-full">
                                    <img src={img3} alt="" className="w-full" />
                                </div>
                                <div id="product4" className="carousel-item w-full">
                                    <img src={img4} alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#product1" className="btn btn-xs">1</a>
                                <a href="#product2" className="btn btn-xs">2</a>
                                <a href="#product3" className="btn btn-xs">3</a>
                                <a href="#product4" className="btn btn-xs">4</a>
                            </div>
                        </div>
                    </Tilt>


                </div>
            </div>
        </div>
    );
};

export default EasyShop;