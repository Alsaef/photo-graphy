import React from 'react';
import PageHero from '../Components/PageHero';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <PageHero pageTitle='404' pageSubTitle='404'></PageHero>

            <div className="flex flex-col items-center justify-center py-24 bg-gray-900 text-white text-center">
                <h1 className="text-9xl font-bold text-blue-500">404</h1>
                <p className="mt-4 text-lg">Sorry, the page you are looking for could not be found</p>
                <Link
                    to="/"
                    className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Back to home
                </Link>
            </div>

        </div>
    );
};

export default NotFound;