const PokemonMoves = ({ pokemon }) => {
  const moves = pokemon.moves
    .map((m) => m.move.name.replace(/-/g, " "))
    .sort();

  return (
    <div>
      <p className="text-gray-400 text-sm mb-4">
        {moves.length} moves available
      </p>
      <div className="flex flex-wrap gap-2 max-h-96 overflow-y-auto">
        {moves.map((move) => (
          <span
            key={move}
            className="px-3 py-1 bg-gray-100 text-gray-700 font-medium rounded-full text-sm border border-gray-200 capitalize"
          >
            {move}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonMoves;
