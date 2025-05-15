import React from 'react';

const Counter = () => {
    return (
        <div className=" text-white mt-[110px] py-8 flex lg:flex-row flex-col items-center gap-3.5 justify-around  text-center">
            <h2 className="text-5xl font-semibold mb-6">Our Fun Fact</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="">
                    <h2 className="text-4xl font-semibold">500+</h2>
                    <span className="text-sm">Global Happy Clients</span>
                </div>
                <div className="">
                    <h2 className="text-4xl font-semibold">2K+</h2>
                    <span className="text-sm">Complete Projects</span>
                </div>
                <div className="">
                    <h2 className="text-4xl font-semibold">13+</h2>
                    <span className="text-sm">Team Members</span>
                </div>
                <div className="">
                    <h2 className="text-4xl font-semibold">95%</h2>
                    <span className="text-sm">Repeat Client</span>
                </div>
            </div>
        </div>
    );
};

export default Counter;