import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((json) => setPokemons(json.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="flex flex-wrap gap-5 justify-between px-16 py-10">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <PokemonCard pokemon={pokemon}></PokemonCard>
        </li>
      ))}
    </ul>
  );
}
