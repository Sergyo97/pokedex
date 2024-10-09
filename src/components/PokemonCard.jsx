import { IconButton, Paper, Tooltip } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import PokemonDetailModal from "./PokemonDetailModal";
import { deepPurple } from "@mui/material/colors";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function PokemonCard({ pokemon, addFavorite }) {
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
        <div className="flex w-full justify-end">
          <Tooltip title="Favorite">
            <IconButton onClick={() => handleFavorite(pokemon)}>
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
        <img
          src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
          alt="pokemonImg"
          className="h-40 w-40 p-2"
        />
        <div className="flex flex-row w-full items-center justify-between px-5">
          <span className="">{pokemon.name}</span>
          <IconButton onClick={handleModal}>
            <OpenInFullIcon fontSize="small" sx={{ color: deepPurple[100] }} />
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
