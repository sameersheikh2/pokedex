import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { pokeApi } from "../constants/api";

const CACHE_KEY = "pokedex_all_names";

const loadNames = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch {}
  return null;
};

export const useFuzzySearch = () => {
  const [names, setNames] = useState(loadNames);
  const fuseRef = useRef(null);

  useEffect(() => {
    if (names) {
      fuseRef.current = new Fuse(names, { keys: ["name"], threshold: 0.4 });
      return;
    }
    fetch(`${pokeApi}?limit=1025`)
      .then((r) => r.json())
      .then((data) => {
        const list = data.results.map((p) => ({ name: p.name }));
        localStorage.setItem(CACHE_KEY, JSON.stringify(list));
        setNames(list);
        fuseRef.current = new Fuse(list, { keys: ["name"], threshold: 0.4 });
      })
      .catch(console.error);
  }, []);

  const suggest = (query) => {
    if (!fuseRef.current || !query) return null;
    const results = fuseRef.current.search(query.toLowerCase(), { limit: 1 });
    if (!results.length) return null;
    const match = results[0].item.name;
    return match === query.toLowerCase() ? null : match;
  };

  return { suggest };
};
