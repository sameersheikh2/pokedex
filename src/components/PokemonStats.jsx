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
          <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${s.base_stat >= 50 ? "bg-green-400" : "bg-red-400"}`}
              style={{ width: `${Math.min(100, (s.base_stat / 150) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PokemonStats;
