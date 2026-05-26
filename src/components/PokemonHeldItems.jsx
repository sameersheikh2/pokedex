const PokemonHeldItems = ({ pokemon }) => {
  const items = pokemon.held_items;

  if (!items || items.length === 0) {
    return (
      <p className="text-gray-400 text-center py-8">
        This Pokémon does not hold any items in the wild.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <div
            key={item.item.name}
            className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex-1 min-w-25 flex flex-col items-center text-center"
          >
            <span className="text-gray-800 font-semibold capitalize">
              {item.item.name.replace(/-/g, " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonHeldItems;
