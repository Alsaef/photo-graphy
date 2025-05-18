import React from 'react';

const MapSection = () => {
    return (
        <div>
            <div  className='mt-14 flex justify-center' style={{ marginTop: "49px" }}>
                <iframe className='bg-black' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22244.888350781624!2d90.37482986643874!3d23.80283349261721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1747562106960!5m2!1sen!2sbd" style={{ height: "500px", width: "2050px",background:'gray' }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default MapSection;