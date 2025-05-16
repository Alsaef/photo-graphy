import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const services = [
    {
        title: "Video Editing",
        image: "https://easycreativesolution.com/wp-content/uploads/2025/05/Video-editing.jpg", // Ensure this image is placed in your `public` folder
    },
    {
        title: "Video Production",
        image: "https://easycreativesolution.com/wp-content/uploads/2025/05/Video-production.jpg",
    },
    {
        title: "Graphic Design",
        image: "https://i0.wp.com/websenor.com/wp-content/uploads/2021/10/websenor-banner-646.jpg?fit=1024%2C989&ssl=1",
    },
    {
        title: "Motion Graphics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVuXVZOBMiXD3cVn2eiAJ3hQSYa0YO6_SDX-pNGkjIdNogjjEKMuW5cDWNhDdampK1_A&usqp=CAU",
    },
    
];


const Services = () => {
      useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

    return (
        <section className=" text-white py-16 px-6">


            <div className="my-10" data-aos="fade-right" data-aos-delay="10" data-aos-duration="1000" data-aos-once="false"

            >
                <p className='text-center text-xl font-semibold py-3'>Services</p>
                <p className='text-center lg:text-5xl text-2xl text-white font-semibold'>What we provide</p>

            </div>
            <div className="flex lg:flex-row flex-col-reverse lg:items-center items-center lg:gap-10 gap-3 justify-center my-20">
                {/* Heading */}
                <div className="mb-12 lg:text-left text-center lg:py-0 md:py-3 py-10">
                    <p className="text-sm text-gray-400 uppercase font-semibold">
                        What Can We Do
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
                        Services we can <br /> help you with
                    </h2>
                    <p className="py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo exercitationem <br /> dignissimos fuga mollitia praesentium deleniti excepturi ut veritatis itaque quae.</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-blue-500"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-40 sm:h-48 object-cover transition duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mb-2"></div>
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
