import React, { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mijo015', 'template_c4w8a4h', form.current, 'fz-Bfdm6JTkRoqCdF')
            .then((result) => {
                console.log(result.text);
                toast.success("Successfully send your message.")
              
            }, (error) => {
                console.log(error.text);
                toast.error("Something is missing.")
            });
    };


    return (
        <div>
            <motion.h1 className='lg:text-6xl md:text-5xl sm:text-3xl font-extrabold text-center text-green-600 m-4 p-2'
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >Get in touch!</motion.h1>

            <div className='h-full w-full flex justify-center items-center'>
                <motion.form ref={form} onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >

                    <div className='flex justify-center'>
                        <input type="text" name='from_name' placeholder="Name" className="input input-bordered input-info w-full max-w-xs m-4 p-4" required />
                    </div>
                    <div className='lg:flex justify-center items-center'>
                        <input type="text" name='from_email' placeholder="Email" className="input input-bordered input-info w-full m-4 p-4" required />
                        <input type="text" name='from_phone' placeholder="Phone Number" className="input input-bordered input-info w-full m-4 p-4" required />
                    </div>
                    {/* <input type="text" name='message' placeholder="Say Hi..." className="textarea input input-bordered input-info w-full h-40 m-4 p-4 " required /> */}
                    <textarea name="message" placeholder="Say Hi..." className="textarea input input-bordered input-info w-full h-40 m-4 p-4 " required />
                    <div className='flex justify-end'>
                        <input type="submit" value="Submit" className='btn btn-outline btn-info rounded-lg shadow-lg' />
                    </div>

                    {/* <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" /> */}
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;