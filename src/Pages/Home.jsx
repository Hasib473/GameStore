import React from 'react';
import ImageSlider from '../Component/ImageSlider';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>

            <div className='text-center mb-4'>
                <h1 className="text-3xl font-bold mt-3">Welcome to <span className='text-purple-400'>GameStore</span></h1>
                <p className="mt-2 text-gray-600">
                    Explore the best indie games and support your favorite developers.
                </p>
            </div>
            {/* Banner / Hero Slider */}
            <ImageSlider />


        </div>
    );
};

export default Home;