const PokemonStats = ({ pokemon }) => (
  <div className="w-full md:w-1/2">
    <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
      Base Stats
    </h2>
    <div className="flex flex-col gap-4">
      {pokemon.stats.map((s) => (
        <div key={s.stat.name} className="flex items-center">
          <span className="w-32 text-gray-500 font-semibold uppercase text-xs tracking-wider">
            {s.stat.name.replace("-", " ")}
          </span>
          <span className="w-12 text-gray-800 font-bold text-right pr-4">
            {s.base_stat}
          </span>
          <progress
            className={`flex-1 h-3 rounded-full ${s.base_stat >= 50 ? "accent-green-500" : "accent-red-500"}`}
            value={s.base_stat}
            max="150"
          />
        </div>
      ))}
    </div>
  </div>
);

export default PokemonStats;
