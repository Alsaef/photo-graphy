import React from 'react';
import ImageBanner from '../assets/images/hero_bg_3.jpeg';
import { motion } from "framer-motion";
import Counter from './Counter';
const Hero = () => {
    return (
        <div> 
            <div className=" relative overflow-hidden">
                <div
                    className="min-h-screen bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${ImageBanner})` }}
                >
                    <div className="p-8 mt-[120px] ">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }} className="lg:text-8xl md:text-4xl text-3xl text-center text-white font-bold my-4">
                            We Are Easy  <span className='text-blue-500'>C</span>eative <span className='text-blue-500'> <br /> S</span>olution
                        </motion.div>
                        <p className="lg:text-lg text-xl lg:pt-12 md:pt-5 pt-5 text-white mb-6 text-center">Your Go-To Video Editing & IT Solution Agency</p>
                    <Counter></Counter>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;