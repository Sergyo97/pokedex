import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";

export default function PokemonDetailModal({ openModal, closeModal, pokemon }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(pokemon.url);
      const resData = await response.json();
      console.log(resData.sprites.front_default);
      setSelectedPokemon(resData);
    }
    fetchPokemon();
  }, [pokemon.url]);

  return (
    <Dialog open={openModal} onClose={closeModal}>
      <div className="flex flex-col grass">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl">{selectedPokemon.name}</h1>
          <h1 className="text-3xl">{`#${selectedPokemon.id}`}</h1>
          {/*Esto solo funciona si uso el optional chaining*/}
          <h1>{selectedPokemon?.sprites?.front_default}</h1>
        </div>
        {/*Pero acá si uso esto así no más se rompe*/}
        {/*<img src={selectedPokemon.sprites.front_default} alt="pokemon" />*/}
      </div>
    </Dialog>
  );
}
