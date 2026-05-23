import { useNavigate } from "react-router-dom";
import { SPRITE_URL } from "../constants/api";

const ArrowIcon = () => (
  <svg
    className="w-8 h-8 text-gray-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const PokemonEvolution = ({ chain }) => {
  const navigate = useNavigate();
  const evolutions = [];
  let current = chain;

  while (current) {
    const temp = current.species.url.split("/");
    const id = temp[temp.length - 2];
    evolutions.push({ name: current.species.name, id });
    current =
      current.evolves_to && current.evolves_to.length > 0
        ? current.evolves_to[0]
        : null;
  }

  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
        Evolution Chain
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
        {evolutions.map((stage, index) => (
          <div key={stage.id} className="flex items-center gap-8 flex-shrink-0">
            {index > 0 && <ArrowIcon />}
            <div 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => navigate(`/search?q=${stage.name.toLowerCase()}`, { state: { fromEvolution: true } })}
            >
              <div className="bg-gray-50 p-4 rounded-full border border-gray-100 mb-3 group-hover:border-blue-300 group-hover:shadow-md transition-all">
                <img
                  src={`${SPRITE_URL}/${stage.id}.png`}
                  alt={stage.name}
                  className="w-20 h-20 object-contain transition-transform duration-200 group-hover:scale-110"
                />
              </div>
              <span className="text-gray-800 font-bold capitalize group-hover:text-blue-600 transition-colors">
                {stage.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonEvolution;
