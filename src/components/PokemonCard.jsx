import { IconButton, Paper } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useState } from "react";
import PokemonDetailModal from "./PokemonDetailModal";

export default function PokemonCard({ pokemon }) {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal((prevState) => !prevState);
  }

  return (
    <>
      <Paper
        elevation={3}
        className="flex flex-col justify-center items-center"
      >
        <img
          src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
          alt="pokemonImg"
          className="h-40 w-40 p-2"
        />
        <div className="flex flex-row items-center">
          <span className="flex justify-start">{pokemon.name}</span>
          <IconButton onClick={handleModal}>
            <OpenInFullIcon fontSize="small" />
          </IconButton>
        </div>
      </Paper>
      {openModal && (
        <PokemonDetailModal
          openModal={openModal}
          closeModal={handleModal}
          pokemon={pokemon}
        ></PokemonDetailModal>
      )}
    </>
  );
}
