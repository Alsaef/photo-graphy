import React from 'react';
import PageHero from '../Components/PageHero';
import ContactForm from '../Components/ContactSection';
import MapSection from '../Components/MapSection';

const Contact = () => {
    return (
        <div>
                <PageHero pageTitle='Contact Us' pageSubTitle='Contact Us'></PageHero>

                <ContactForm></ContactForm>

                <MapSection></MapSection>
        </div>
    );
};

export default Contact;