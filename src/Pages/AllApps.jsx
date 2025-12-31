import React from 'react';
import { Link } from 'react-router';

const AllApps = ({data}) => {
    const {id} =data;
    return (
       
      <div >
         <Link to={`/gamedetails/${id}`}>
          <div
            key={data?.id }
            className="border-0 rounded-lg p-4 shadow"
          >
            <img
              src={data?.coverPhoto || "https://i.ibb.co/2kRZyq0/user.png"}
              alt={data?.name || "data Image"}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="text-lg font-semibold mt-2">
              {data?.title || "Unnamed data"}
            </h3>

            <p className="text-sm">
              Category: {data?.category || "N/A"}
            </p>
            <p className="text-sm">
                Developer: {data?.developer || "N/A"}
            </p>

            <p className="text-sm">
              Price: {data?.price || "Free"}
            </p>
          </div>
          </Link>
      </div>

    );
};

export default AllApps;