import React from 'react';
import Hero from '../Components/Hero';
import Project from '../Components/Project';
import Services from '../Components/Services';
import ClientReviews from '../Components/ClientReviews';
import ClientsSection from '../Components/TopClient';

const fetchVideo=fetch('/data.json').then(res=>res.json())
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Project fetchVideo={fetchVideo}></Project>
            <Services></Services>
            <ClientReviews></ClientReviews>
            <ClientsSection></ClientsSection>
        </div>
    );
};

export default Home;