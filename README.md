# Pokédex Explorer

Pokédex Explorer is a clean, fast, and minimal web app that lets you search for any Pokémon and dive into their details. Whether you're looking for specific stats, abilities, or just want to see the complete evolution chain of your favorites, this app has it neatly organized. It also features a daily random "Pokémon of the Day" on the homepage if you're just looking to discover something new!

![Homepage](/public/homepage.png)
![Details Page](/public/deatilpage.png)
![SearchResult](/public/search-result.png)

## Features

- **Instant Search:** Find any Pokémon by name or ID.
- **Fuzzy Search:** Handles typos with "Did you mean?" suggestions powered by Fuse.js.
- **Deep Details:** View high-res official artwork, physical traits, stats, and abilities.
- **Tabbed Detail View:** Explore About, Breeding, Moves, and Held Items tabs for each Pokémon.
- **Breeding Info:** Gender ratios, egg groups, capture rate, happiness, and growth rate.
- **Moves & Held Items:** Browse the full move pool and wild-held items.
- **Evolution Chains:** Visually track the complete evolution path.
- **Pokémon of the Day:** Discover a randomly generated Pokémon every day.

## How to run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```
