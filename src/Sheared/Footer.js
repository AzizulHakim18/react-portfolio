import React from 'react';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='p-10 bg-base-200 text-base font-normal text-center'>

            <p>Copyright © - All right reserved by</p>
            <p className='text-cyan-400'>Azizul Hakim Rony</p>
            <div className='md:flex lg:flex justify-between items-center'>
                <p>azizulhakimrony18@gmail.com</p>
                <p>+8801957871746</p>
            </div>

        </footer>
    );
};

export default Footer;