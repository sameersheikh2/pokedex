import { Link } from "react-router-dom";
import { SPRITE_URL } from "../constants/api";

const PokemonCard = ({ pokemon }) => (
  <Link
    to={`/details/${pokemon.id}`}
    className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 w-full sm:w-64"
  >
    <div className="p-6 flex justify-center items-center h-48 relative">
      <span className="absolute top-3 right-4 text-gray-500 font-bold opacity-30 text-lg">
        #{pokemon.id}
      </span>
      <img
        src={`${SPRITE_URL}/${pokemon.id}.png`}
        alt={pokemon.name}
        className="h-36 w-36 object-contain drop-shadow-md"
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">
        {pokemon.name}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-500 border border-gray-200"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

export default PokemonCard;
