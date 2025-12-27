import { useState } from "react";
import gamesData from "../../public/Info.json";

const Games = () => {
  const [search, setSearch] = useState("");

  const filteredGames = gamesData.filter((game) => {
    const gameName = game?.name ?? "";
    return gameName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-6 bg-purple-100">
      <h1 className="text-3xl font-bold mb-4 text-center mt-4">Find Your <span className="text-purple-400">Favorite Game</span></h1>

      <input
        type="text"
        placeholder="Search game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-50  mb-6 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGames.map((game, index) => (
          <div
            key={game?.id || index}
            className="border rounded-lg p-4 shadow"
          >
            <img
              src={game?.coverPhoto || "https://i.ibb.co/2kRZyq0/user.png"}
              alt={game?.name || "Game Image"}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="text-lg font-semibold mt-2">
              {game?.title || "Unnamed Game"}
            </h3>

            <p className="text-sm">
              Category: {game?.category || "N/A"}
            </p>
            <p className="text-sm">
                Developer: {game?.developer || "N/A"}
            </p>

            <p className="text-sm">
              Price: {game?.price || "Free"}
            </p>
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No games found
        </p>
      )}
    </div>
  );
};

export default Games;
