import React from 'react';
import { Link } from 'react-router-dom';
import BGhero from '../assets/images/hero_bg_4.png';
const PageHero = ({pageTitle,pageSubTitle}) => {
    return (
         <div className="overflow-hidden w-full">
                <div
                    className="lg:h-[400px] md:h-[350px] sm:h-[300px] h-[230px]  w-full bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${BGhero})` }}
                >
                    <div className="p-8 text-center text-white">
                       
                       <h2  data-aos="fade-right" data-aos-delay="10" data-aos-duration="1000"   className='lg:text-5xl text-3xl font-bold py-4'>{pageTitle}</h2>
                      <p className='font-semibold my-1'><Link to='/' className='cursor-pointer hover:text-blue-500'>Home</Link> | {pageSubTitle}</p>
                    </div>
                </div>
            </div>
    );
};

export default PageHero;