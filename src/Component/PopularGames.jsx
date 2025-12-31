import { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/Info.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedGames = data
          .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
          .slice(0, 3); 

        setGames(sortedGames);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
       Popular <span className="text-purple-400">Games</span>
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {games.map((game) => (
  <Link
    key={game.id}
    to={`/gamedetails/${game.id}`}
    className="block"
  >
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-48 object-cover rounded-xl p-4"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{game.title}</h3>

        <p className="text-sm text-gray-500 mt-1">
          Category: {game.category}
        </p>

        <p className="mt-2 font-medium">
          ⭐ Rating: {game.ratings}
        </p>
      </div>
    </div>
  </Link>
))}
      </div>
    </div>
  );
};

export default PopularGames;
