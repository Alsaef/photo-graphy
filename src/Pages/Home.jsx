import React from 'react';
import Hero from '../Components/Hero';
import Project from '../Components/Project';
import Services from '../Components/Services';
import ClientReviews from '../Components/ClientReviews';
import ClientsSection from '../Components/TopClient';
import CTASection from '../Components/CTASection';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Project></Project>
            <Services></Services>
            <ClientReviews></ClientReviews>
            <ClientsSection></ClientsSection>
            <CTASection></CTASection>
        </div>
    );
};

export default Home;