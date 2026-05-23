import { SPRITE_URL } from "../constants/api";

const PokemonImage = ({ pokemon }) => (
  <div className="w-full md:w-1/3 flex justify-center bg-pink-50 rounded-2xl p-8 border border-pink-100">
    <img
      src={`${SPRITE_URL}/${pokemon.id}.png`}
      alt={pokemon.name}
      className="w-full max-w-[250px] object-contain drop-shadow-lg"
    />
  </div>
);

export default PokemonImage;
