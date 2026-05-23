import { useState } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import SearchResults from "./SearchResults";
import RandomPokemon from "./RandomPokemon";

const Search = () => {
  const [query, setQuery] = useState("");
  const { searchPokemon, loading, error, pokemonData, clearData } =
    usePokemonSearch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    await searchPokemon(query);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto flex gap-3">
        <form
          className="w-full flex justify-center items-center flex-col sm:flex-row gap-3"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 pl-11 text-base text-gray-900 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500"
            placeholder="Search for a Pokémon..."
          />
          <button
            type="submit"
            className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-900"
          >
            Search
          </button>
        </form>
      </div>

      {pokemonData.length > 0 && (
        <main className="max-w-6xl mx-auto px-4 py-10 text-left">
          <h3 className="mb-6 text-red-100 text-md font-medium flex items-center">
            Showing results
            <button
              className="ml-4 bg-slate-800 text-white px-3 py-1 rounded-lg font-medium hover:bg-slate-900"
              onClick={() => {
                clearData([]);
                setQuery("");
              }}
            >
              Clear
            </button>
          </h3>
          <SearchResults pokemon={pokemonData} />
        </main>
      )}

      <RandomPokemon />

      {error && (
        <div className="max-w-2xl mx-auto mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      {loading && (
        <div className="max-w-2xl mx-auto mt-4 p-4 bg-gray-100 text-gray-700 rounded-lg">
          Loading...
        </div>
      )}
    </>
  );
};

export default Search;
