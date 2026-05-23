import Search from "../components/Search";
import RandomPokemon from "../components/RandomPokemon";

const Home = () => (
  <div className="min-h-screen bg-[#f8f9fa] font-sans">
    <header className="bg-red-600 text-white pt-16 pb-12 px-4 shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Pokédex Explorer
        </h1>
        <p className="text-xl md:text-2xl font-medium text-red-50 max-w-2xl mx-auto mb-10">
          Discover, search, and learn about your favorite Pokémon in one place.
        </p>
        <Search />
        <RandomPokemon />
      </div>
    </header>
  </div>
);

export default Home;
