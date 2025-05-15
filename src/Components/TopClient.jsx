import React from 'react';
import nestleLogo from '../assets/images/Nestle-e1746427623738.png';
import tenMinuteSchoolLogo from '../assets/images/Nasdaily-e1746427716481.png';
import nasdailyLogo from '../assets/images/Bank-asia-e1746427749345.png';
import bankAsiaLogo from '../assets/images/Nasdaily-e1746427716481.png';

const ClientsSection = () => {
  return (
    <section className=" text-white py-16 px-5">
      <div data-aos="fade-right" className="text-center mb-12">
        <h4 className="text-sm   py-4">Top Clients</h4>
        <h2 className="text-4xl font-bold">Our reputed partner</h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10 my-16">
        <img src={nestleLogo} alt="Nestlé" className="h-[60px]" />
        <img src={tenMinuteSchoolLogo} alt="10 Minute School" className="h-[60px]" />
        <img src={nasdailyLogo} alt="Nas Daily" className="h-[60px]" />
        <img src={bankAsiaLogo} alt="Bank Asia" className="h-[60px]" />
      </div>
    </section>
  );
};

export default ClientsSection;
