import React from 'react';
import { useLoaderData } from 'react-router';
import AllApps from './AllApps';
import { AuthContext } from '../Context/AuthContext';

const Apps = () => {

  const allData = useLoaderData();
  console.log(allData);
  return (
<div className='bg-purple-100  '>
    <div className='w-11/12 mx-auto'>
      <div>
      <p className='text-3xl font-bold text-center  mb-6 pt-6 '>Our All <span className='text-purple-400'>Product</span></p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
    {
      allData.map(data => <AllApps key={data.id} data={data} />)
    }
    </div>
    </div>
    </div>
  );
};

export default Apps;