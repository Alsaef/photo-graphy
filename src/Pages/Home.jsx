import React from 'react';
import Hero from '../Components/Hero';
import Project from '../Components/Project';

const fetchVideo=fetch('/data.json').then(res=>res.json())
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Project fetchVideo={fetchVideo}></Project>
        </div>
    );
};

export default Home;