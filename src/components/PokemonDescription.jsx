const attributes = (pokemon) => [
  { label: "Height", value: pokemon.height },
  { label: "Weight", value: pokemon.weight },
  { label: "Base Exp", value: pokemon.base_experience },
  {
    label: "Abilities",
    value: pokemon.abilities.map((a) => a.ability.name).join(", "),
    capitalize: true,
  },
];

const PokemonDescription = ({ pokemon }) => (
  <div className="w-full md:w-2/3 flex flex-col gap-6">
    <div className="flex items-end gap-4 mb-3">
      <h1 className="text-4xl font-extrabold text-gray-800 capitalize">
        {pokemon.name}
      </h1>
      <span className="text-2xl font-bold text-gray-400 mb-0.5">
        #{pokemon.id}
      </span>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {pokemon.types.map((t) => (
        <span
          key={t.type.name}
          className="px-4 py-1 bg-pink-100 text-pink-700 font-bold rounded-full uppercase text-sm border border-pink-200"
        >
          {t.type.name}
        </span>
      ))}
    </div>

    <div className="flex flex-wrap gap-4 mt-2">
      {attributes(pokemon).map(({ label, value, capitalize }) => (
        <div
          key={label}
          className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex-1 min-w-25 flex flex-col items-center text-center"
        >
          <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
            {label}
          </span>
          <span
            className={`text-gray-800 font-semibold ${capitalize ? "capitalize" : ""}`}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default PokemonDescription;
