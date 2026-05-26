const PokemonBreeding = ({ species }) => {
  const genderRate = species.gender_rate;
  let genderDisplay;
  if (genderRate === -1) {
    genderDisplay = "Genderless";
  } else {
    const femalePercent = (genderRate / 8) * 100;
    const malePercent = 100 - femalePercent;
    genderDisplay = `♂ ${malePercent}% / ♀ ${femalePercent}%`;
  }

  const attributes = [
    {
      label: "Egg Groups",
      value: species.egg_groups?.map((g) => g.name).join(", ") || "Unknown",
      capitalize: true,
    },
    { label: "Gender", value: genderDisplay },
    { label: "Capture Rate", value: species.capture_rate ?? "Unknown" },
    { label: "Base Happiness", value: species.base_happiness ?? "Unknown" },
    {
      label: "Growth Rate",
      value: species.growth_rate?.name?.replace(/-/g, " ") || "Unknown",
      capitalize: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {attributes.map(({ label, value, capitalize }) => (
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
};

export default PokemonBreeding;
