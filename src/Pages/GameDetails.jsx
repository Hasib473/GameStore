import React, { useContext } from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Login from './Login';

const GameDetails = () => {
    const {user} =useContext(AuthContext)
    const { id } = useParams();
    const ids =parseInt(id);
    const data = useLoaderData();

    // 🔥 string vs string compare
    const infoData = data.find(d => d.id === ids);

    // 🔒 Guard clause (VERY IMPORTANT)
    if (!infoData) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold text-red-500">
                    No App Found
                </h2>
                <Link to="/" className="text-blue-500 underline mt-4 inline-block">
                    Go Back
                </Link>
            </div>
        );
    }

    const {
        title,
        coverPhoto,
        downloadLink,
        ratings,
        developer,
        category,
        description
    } = infoData;

    return (
        <>
            {
  user ? (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">

    
        <figure className="lg:w-1/2 p-4">
          <img
            src={coverPhoto}
            alt={title}
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>

        
        <div className="card-body lg:w-1/2">
          <h1 className="card-title text-3xl font-bold">
            {title}
          </h1>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Developer:</span>{" "}
              <span className="badge badge-outline">{developer}</span>
            </p>

            <p>
              <span className="font-semibold">Category:</span>{" "}
              <span className="badge badge-secondary">{category}</span>
            </p>

            <p>
              <span className="font-semibold">Ratings:</span>{" "}
              <span className="text-yellow-500 font-bold">
                ⭐ {ratings}/5
              </span>
            </p>
          </div>

          <p className="mt-4 text-justify leading-relaxed text-gray-600">
            {description}
          </p>

          
          <div className="card-actions justify-start mt-6 gap-4">
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
               Download
            </a>

            <Link to="/" className="btn btn-outline">
               Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  )
}


        </>
      
    );
};

export default GameDetails;
