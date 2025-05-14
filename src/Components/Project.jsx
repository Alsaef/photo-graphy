import React, { use, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({ fetchVideo }) => {
    const [toggle, setToggle] = useState('reels')
    const handelToggle = (toggleValue) => {
        setToggle(toggleValue)
    }

    const videos = use(fetchVideo)

    AOS.init();
    return (
        <div className='my-20 px-5'>


            <div data-aos="fade-up" data-aos-delay="10" data-aos-duration="1000" data-aos-once="false"
              
            >
                <p className='text-center text-xl font-semibold py-3'>Latest Projects</p>
                <p className='text-center lg:text-5xl text-2xl text-white font-semibold'>Portfolio to explore</p>

            </div>
            <div className='flex justify-center items-center flex-wrap gap-3 my-16'>
                <button onClick={() => handelToggle('reels')} className={`${toggle === 'reels' ? 'bg-blue-500 text-white rounded-lg btn btn-lg' : 'bg-white text-black rounded-lg btn btn-lg hover:bg-blue-500 hover:text-white'}`}>Reels Video</button>
                <button onClick={() => handelToggle('youtube video')} className={`${toggle === 'youtube video' ? 'bg-blue-500 text-white rounded-lg btn btn-lg' : 'bg-white text-black rounded-lg btn btn-lg hover:bg-blue-500 hover:text-white '}`}>Youtube Video</button>
                <button onClick={() => handelToggle('promotional')} className={`${toggle === 'promotional' ? 'bg-blue-500 text-white rounded-lg btn btn-lg' : 'bg-white text-black rounded-lg btn btn-lg hover:bg-blue-500 hover:text-white'}`}>Promotional Video</button>
            </div>


            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
                data-aos-easing="ease-in-out"  className='grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto w-[80%] my-10'>
                {videos
                    ?.filter((video) => video.category === toggle)
                    .map((video, index) => (
                        <div
                            key={index}
                            className={`mx-auto w-full aspect-video`}
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
                    ))}
            </div>

        </div>
    );
};

export default Project;