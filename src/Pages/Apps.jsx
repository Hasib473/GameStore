import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from './AllApps';
import { div } from 'framer-motion/client';
import { AuthContext } from '../Context/AuthContext';
import Login from './Login';

const Apps = () => {

  const {user } =useContext(AuthContext)
  const allData = useLoaderData();
  console.log(allData);
  return (
<div className='bg-purple-100 '>
      {
  user ? (
    <div>
      <div>
        <p className="text-3xl font-bold text-center mb-6 pt-6">
          Our All <span className="text-purple-400">Product</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          allData.map(data => (
            <AllApps key={data.id} data={data} />
          ))
        }
      </div>
    </div>
  ) : <Login/>
}

    </div>
  );
};

export default Apps;