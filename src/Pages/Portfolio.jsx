import React from 'react';
import PageHero from '../Components/PageHero';
import Project from '../Components/Project';
import { useLocation } from 'react-router-dom';
import CTASection from '../Components/CTASection';

const Portfolio = () => {
    const loacation=useLocation()
    const loacationPath=loacation.pathname
    return (
        <div>
             <PageHero pageTitle='Portfolio' pageSubTitle='Portfolio'></PageHero>
             <Project loacationPath={loacationPath}></Project>
             <CTASection></CTASection>
        </div>
    );
};

export default Portfolio;