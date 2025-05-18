import React, { useEffect } from 'react';
import ImageBanner from '../assets/images/hero_bg_3.jpeg';
import { motion } from "framer-motion";
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Hero = () => {




    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, [AOS]);
    return (
        <div>
            <div className=" relative overflow-hidden">
                <div
                    className="min-h-screen bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${ImageBanner})` }}
                >
                    <div className="p-8 lg:mt-[194px] mt-[120px] ">
                        <div
                            data-aos="fade-right" data-aos-delay="10" data-aos-duration="1000" data-aos-once="false" className="lg:text-8xl md:text-4xl text-3xl text-center text-white font-bold my-4">
                            We Are 3Mi   <span className='text-blue-500'>S</span>tudio
                        </div>
                        <p className="lg:text-lg text-xl lg:pt-10 md:pt-5 pt-5 text-white mb-6 text-center">Your Go-To Video Editing & IT Solution Agency</p>
                        <Counter></Counter>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;