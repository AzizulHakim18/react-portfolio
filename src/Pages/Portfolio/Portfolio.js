import React from 'react';
import EasyShop from './EasyShop';
import PizzaPalace from './PizzaPalace';
import { motion } from 'framer-motion';
import DoctorsBD from './DoctorsBD';
import QucikQuiz from './QucikQuiz';
import MachineX from './MachineX';
const Portfolio = () => {
    return (
        <div>

            <motion.h1
                className='lg:text-6xl md:text-3xl sm:text-xl lg:font-extrabold sm:font-semibold text-center text-green-600 m-4 p-2'
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >Something I Have Built
            </motion.h1>
            <div>
                <div>
                    <EasyShop></EasyShop>
                </div>
                <div className='my-4 py-4'>
                    <QucikQuiz></QucikQuiz>
                </div>
                <div className='my-4 py-4'>
                    <DoctorsBD></DoctorsBD>
                </div>
                <div className='my-4 py-4'>
                    <PizzaPalace></PizzaPalace>
                </div>
                <div className='my-4 py-4'>
                    <MachineX></MachineX>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-cyan-500'>6.Booking website Loading...........</h3>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;