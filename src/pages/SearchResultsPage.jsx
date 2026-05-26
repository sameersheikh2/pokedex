import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { useFuzzySearch } from "../hooks/useFuzzySearch";
import SearchResults from "../components/SearchResults";
import Search from "../components/Search";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const exact = searchParams.get("exact");
  const navigate = useNavigate();
  const location = useLocation();
  const { searchPokemon, loading, error, pokemonData } = usePokemonSearch();
  const { suggest } = useFuzzySearch();
  const [correctedTo, setCorrectedTo] = useState(null);

  const isFromEvolution = location.state?.fromEvolution;

  useEffect(() => {
    setCorrectedTo(null);
    if (query) searchPokemon(query);
  }, [query, exact]);

  useEffect(() => {
    if (error && query && !exact) {
      const match = suggest(query);
      if (match) {
        setCorrectedTo(match);
        searchPokemon(match);
      }
    }
  }, [error]);

  useEffect(() => {
    if (isFromEvolution && !loading && !error && pokemonData.length > 0) {
      navigate(`/details/${pokemonData[0].id}`, { replace: true });
    }
  }, [isFromEvolution, loading, error, pokemonData, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Search Results for "{query}"
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-900"
          >
            Back to Home
          </button>
        </div>

        <div className="mb-8">
          <Search />
        </div>

        {correctedTo && !loading && !error && pokemonData.length > 0 && (
          <div className="text-sm text-gray-600 mb-6">
            Showing results for{" "}
            <span className="font-semibold text-gray-900">{correctedTo}</span>.{" "}
            <button
              onClick={() => navigate(`/search?q=${query}&exact=1`)}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Search instead for "{query}"
            </button>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="pokeball"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-xl text-center py-20 font-medium">
            Pokémon not found. Please try a valid name or an ID between 1 and
            1025.
          </div>
        )}

        {!loading && !error && pokemonData.length === 0 && (
          <div className="text-gray-500 text-xl text-center py-20 font-medium">
            No Pokémon found matching "{query}".
          </div>
        )}

        {!loading && !error && pokemonData.length > 0 && (
          <SearchResults pokemon={pokemonData} />
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
