import React, { useEffect } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import SearchResults from "./SearchResults";

const RandomPokemon = () => {
  const { searchPokemon, loading, error, pokemonData } = usePokemonSearch();

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("pokemonDate");
    const storedId = localStorage.getItem("dailyPokemonId");

    let pokemonId;
    if (storedDate === today && storedId) {
      pokemonId = parseInt(storedId, 10);
    } else {
      pokemonId = Math.floor(Math.random() * 1025) + 1;
      localStorage.setItem("pokemonDate", today);
      localStorage.setItem("dailyPokemonId", pokemonId.toString());
    }

    searchPokemon(pokemonId);
  }, []);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto mt-4 p-4 flex justify-center items-center">
        <div className="pokeball"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-4 p-4 text-red-50 font-medium">
        Could not load Pokémon of the Day.
      </div>
    );
  }

  if (pokemonData.length > 0) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10 text-left">
        <h3 className="mb-6 text-red-100 text-sm font-medium">
          Pokémon of the Day
        </h3>
        <SearchResults pokemon={pokemonData} />
      </main>
    );
  }

  return null;
};

export default RandomPokemon;
