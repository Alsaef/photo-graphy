import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Ifram = ({ video, index }) => {
    const [aosAnimation, setAosAnimation] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                setAosAnimation('fade-up');
            } else {
                setAosAnimation(index % 2 === 0 ? 'fade-left' : 'fade-right');
            }
        };

        handleResize(); // run on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [index]);
    
        useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false, // scroll korle bar bar animate hobe
            });
        }, []);
    return (
        <div
            data-aos={aosAnimation}
            key={index}
            className="mx-auto w-full aspect-video"
        >
            <iframe
                className="w-full h-full rounded-xl"
                src={video.embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Ifram;