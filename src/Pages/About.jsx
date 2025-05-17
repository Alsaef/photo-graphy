import React from 'react';
import PageHero from '../Components/PageHero';
import TeamSection from '../Components/TeamSection';
import Services from '../Components/Services';
import CTASection from '../Components/CTASection';
const About = () => {
    return (
        <div>
            <PageHero pageTitle='About Us' pageSubTitle='About Us'></PageHero>

            <TeamSection></TeamSection>
          
                <Services></Services>
           
            <CTASection></CTASection>

        </div>
    );
};

export default About;