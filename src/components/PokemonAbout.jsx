const PokemonAbout = ({ pokemon, species }) => {
  const englishEntries = species.flavor_text_entries?.filter(
    (e) => e.language.name === "en"
  );
  const flavorEntry = englishEntries?.length > 0
    ? englishEntries[englishEntries.length - 1]
    : null;

  let flavorText = "No description available.";
  if (flavorEntry) {
    flavorText = flavorEntry.flavor_text
      .replaceAll("\n", " ")
      .replaceAll("\f", " ")
      .replaceAll("\r", " ");
  }

  const genParts = species.generation?.name?.split("-") || [];
  const generation = genParts.length > 1
    ? "Generation " + genParts[1].toUpperCase()
    : "Unknown";

  const attributes = [
    { label: "Generation", value: generation },
    { label: "Habitat", value: species.habitat?.name || "Unknown", capitalize: true },
    { label: "Shape", value: species.shape?.name || "Unknown", capitalize: true },
    { label: "Color", value: species.color?.name || "Unknown", capitalize: true },
  ];

  return (
    <div>
      {(species.is_legendary || species.is_mythical) && (
        <div className="flex gap-2 mb-4">
          {species.is_legendary && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 font-bold rounded-full text-sm border border-yellow-200">
              ⭐ Legendary
            </span>
          )}
          {species.is_mythical && (
            <span className="px-3 py-1 bg-purple-100 text-purple-700 font-bold rounded-full text-sm border border-purple-200">
              ✨ Mythical
            </span>
          )}
        </div>
      )}

      <p className="text-gray-600 leading-relaxed mb-6">{flavorText}</p>

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

export default PokemonAbout;
