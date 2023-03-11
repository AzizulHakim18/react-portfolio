import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div>
            <motion.h1 className='lg:text-6xl md:text-5xl sm:text-3xl font-extrabold text-center text-green-600 m-4 p-2'
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >Get in touch!</motion.h1>

            <div className='h-full w-full flex justify-center items-center'>
                <motion.form action=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >

                    <div className='flex justify-center'>
                        <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs m-4 p-4" required />
                    </div>
                    <div className='lg:flex justify-center items-center'>
                        <input type="text" placeholder="Email" className="input input-bordered input-info w-full m-4 p-4" required />
                        <input type="text" placeholder="Phone Number" className="input input-bordered input-info w-full m-4 p-4" required />
                    </div>
                    <input type="text" placeholder="Say Hi..." className="textarea input input-bordered input-info w-full h-40 m-4 p-4 " required />
                    <div className='flex justify-end'>
                        <input type="submit" value="Submit" className='btn btn-outline btn-info rounded-lg shadow-lg' />
                    </div>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;