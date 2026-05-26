import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pokeApi, pokemonDetailApi } from "../constants/api";
import PokemonImage from "../components/PokemonImage";
import PokemonDescription from "../components/PokemonDescription";
import PokemonStats from "../components/PokemonStats";
import PokemonEvolution from "../components/PokemonEvolution";
import PokemonAbout from "../components/PokemonAbout";
import PokemonBreeding from "../components/PokemonBreeding";
import PokemonMoves from "../components/PokemonMoves";
import PokemonHeldItems from "../components/PokemonHeldItems";
import { tabs } from "../constants/utils";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolution, setEvolution] = useState(null);
  const [species, setSpecies] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`${pokeApi}${id}`);
        if (!res.ok) throw new Error("Pokémon not found");
        const data = await res.json();
        setPokemon(data);

        const speciesRes = await fetch(`${pokemonDetailApi}${id}`);
        if (!speciesRes.ok) throw new Error("Species data not found");
        const speciesData = await speciesRes.json();
        setSpecies(speciesData);

        const evoRes = await fetch(speciesData.evolution_chain.url);
        if (!evoRes.ok) throw new Error("Evolution data not found");
        const evoData = await evoRes.json();
        setEvolution(evoData.chain);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDetails();
  }, [id]);

  if (error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-400 text-xl">
        {error}
      </div>
    );
  if (!pokemon)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="pokeball"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-900 mb-3"
        >
          Go Back
        </button>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <PokemonImage pokemon={pokemon} />
          <PokemonDescription pokemon={pokemon} />
        </div>
        {species && (
          <div className="mt-16">
            <div className="flex flex-wrap gap-2 border-b pb-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === tab.key
                      ? "bg-slate-800 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {activeTab === "about" && (
              <PokemonAbout pokemon={pokemon} species={species} />
            )}
            {activeTab === "breeding" && <PokemonBreeding species={species} />}
            {activeTab === "moves" && <PokemonMoves pokemon={pokemon} />}
            {activeTab === "items" && <PokemonHeldItems pokemon={pokemon} />}
          </div>
        )}
        <div className="mt-16 flex flex-col md:flex-row gap-12">
          <PokemonStats pokemon={pokemon} />
          {evolution && <PokemonEvolution chain={evolution} />}
        </div>
      </div>
    </div>
  );
};

export default Details;
