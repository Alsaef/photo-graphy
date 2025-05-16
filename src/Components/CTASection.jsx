import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const CTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <section data-aos="fade-up" data-aos-delay="40" data-aos-duration="1000" data-aos-once="false"  className=" text-white mt-12 py-24 px-5 md:px-0 relative text-center">
      {/* Left blue triangle */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 animate-[spin_3s_linear_infinite]">
        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-blue-500" />
      </div>

      {/* Right blue triangle */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-180 animate-[spin_3s_linear_infinite]">
        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-blue-500" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug">
          Let’s collaborate to build<br />
          something <em className="italic font-medium">amazing</em>/together
        </h2>

        <div className="mt-10 flex justify-center">
         <Link to='/contact-us'>
          <button className="text-white font-semibold flex items-center cursor-pointer  gap-2  hover:translate-x-1 transition duration-300">
            Apply For Meeting <span className="text-xl">→</span>
          </button>
         </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
