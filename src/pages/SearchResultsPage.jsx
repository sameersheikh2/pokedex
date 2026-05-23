import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import SearchResults from "../components/SearchResults";
import Search from "../components/Search";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const navigate = useNavigate();
  const { searchPokemon, loading, error, pokemonData } = usePokemonSearch();

  useEffect(() => {
    if (query) {
      searchPokemon(query);
    }
  }, [query]);

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

        {loading && (
          <div className="text-gray-500 text-xl text-center py-20 font-medium">
            Loading...
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
