import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${query.toLowerCase()}`);
  };

  return (
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
          placeholder="Search by Name or ID (1-1025)..."
        />
        <button
          type="submit"
          className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-900"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
