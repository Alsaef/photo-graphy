import React from 'react';

const MapSection = () => {
    return (
        <div>
            <div  className='mt-14 flex justify-center' style={{ marginTop: "49px" }}>
                <iframe className='bg-black' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.329483931286!2d90.39037348687046!3d23.706717138330248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b918fa127625%3A0x3837bf41f6df6c90!2sZinzira%2C%20Keraniganj!5e1!3m2!1sen!2sbd!4v1747585958305!5m2!1sen!2sbd" style={{ height: "500px", width: "2050px",background:'gray' }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default MapSection;