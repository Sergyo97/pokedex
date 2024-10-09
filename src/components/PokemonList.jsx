import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const { setItem } = useLocalStorage("favorites");

  let favorites = [];

  function handleFavorites(pokemonToAdd) {
    favorites.push(pokemonToAdd);
    setItem(favorites);
  }

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
          <PokemonCard
            pokemon={pokemon}
            handleFavorite={handleFavorites}
          ></PokemonCard>
        </li>
      ))}
    </ul>
  );
}
