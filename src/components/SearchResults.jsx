import PokemonCard from "./PokemonCard";

const SearchResults = ({ pokemon }) => (
  <div className="flex flex-wrap justify-center gap-6">
    {pokemon?.map((p) => (
      <PokemonCard key={p.id} pokemon={p} />
    ))}
  </div>
);

export default SearchResults;
