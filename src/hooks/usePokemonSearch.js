import { useState } from "react";
import { pokeApi } from "../constants/api";

export const usePokemonSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);

  const searchPokemon = async (query) => {
    if (!query || String(query).trim() === "") return;
    setPokemonData([]);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${pokeApi}${String(query).toLowerCase()}`);
      if (!res.ok) throw new Error("Pokémon not found");
      const data = await res.json();
      setPokemonData([data]);
    } catch (err) {
      setError("Pokémon not found. Please try another name or ID.");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchPokemon,
    loading,
    error,
    pokemonData,
  };
};
