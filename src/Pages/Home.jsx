import React from 'react';
import ImageSlider from '../Component/ImageSlider';
import PopularGames from '../Component/PopularGames';

const Home = () => {
    return (
        <div className='w-full mx-auto p-4 bg-gray-100'>

            <div className='text-center mb-10 mt-6'>
                <h1 className="text-3xl font-bold mt-3">Welcome to <span className='text-purple-400'>GameStore</span></h1>
                <p className="mt-2 text-gray-600">
                    Explore the best indie games and support your favorite developers.
                </p>
            </div>
            {/* Banner / Hero Slider */}
            <div className='w-full mx-auto mb-10 mt-8'>
            <ImageSlider />

            </div>

            <div className='w-full mx-auto mt-4'>
                <PopularGames/>
            </div>


        </div>
    );
};

export default Home;