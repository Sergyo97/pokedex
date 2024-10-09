import { Chip, Dialog, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";

export default function PokemonDetailModal({ openModal, closeModal, pokemon }) {
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(pokemon.url);
      const resData = await response.json();
      setSelectedPokemon(resData);
    }
    fetchPokemon();
  }, [pokemon.url]);

  const getType = () => {
    const type = selectedPokemon && selectedPokemon.types[0].type.name;
    return type === "grass"
      ? "grass"
      : type === "fire"
        ? "fire"
        : type === "water"
          ? "water"
          : type === "bug"
            ? "bug"
            : type === "electric"
              ? "electric"
              : type === "ghost"
                ? "ghost"
                : type === "psychic"
                  ? "psychic"
                  : "normal";
  };

  const stylePerType = `flex flex-col ${getType()}`;

  return (
    selectedPokemon && (
      <Dialog open={openModal} onClose={closeModal} fullWidth>
        <div className={stylePerType}>
          <div className="flex flex-row justify-between m-2">
            <h1 className="text-3xl text-stone-50">{selectedPokemon.name}</h1>
            <h1 className="text-3xl text-stone-50">{`#${selectedPokemon.id}`}</h1>
          </div>
          <img src={selectedPokemon.sprites.front_default} alt="pokemon" />
          <Paper elevation={1} className="m-1">
            <ul className="flex flex-row m-2 justify-center gap-2">
              {selectedPokemon.types.map((type) => (
                <Chip label={type.type.name}></Chip>
              ))}
            </ul>
          </Paper>
        </div>
      </Dialog>
    )
  );
}
