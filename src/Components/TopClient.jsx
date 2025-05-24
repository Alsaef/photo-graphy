import React, { useEffect } from 'react';
import nestleLogo from '../assets/images/Nestle-e1746427623738.png';
import tenMinuteSchoolLogo from '../assets/images/Nasdaily-e1746427716481.png';
import nasdailyLogo from '../assets/images/Bank-asia-e1746427749345.png';
import bankAsiaLogo from '../assets/images/Nasdaily-e1746427716481.png';
import AOS from 'aos';
import 'aos/dist/aos.css'
const ClientsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <section className=" text-white py-16 px-5">
      <div data-aos="fade-right" data-aos-delay="10" data-aos-duration="1000" data-aos-once="false"  className="text-center mb-12">
        <h4 className="text-sm   py-4">Top Clients</h4>
        <h2 className="text-4xl font-bold">Our reputed partner</h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10 my-16">
         
        <i className='text-3xl font-semibold text-blue-500 '>Digital Dropouts</i>
    
        <em className='text-3xl font-semibold text-blue-500'>Outsourcing BD Institute</em>
    
        <i className='text-3xl font-semibold text-blue-500'>GM Studio</i>
    
      </div>
    </section>
  );
};

export default ClientsSection;
