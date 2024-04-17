import React from 'react'
import { PokemonEntries } from '../models/PokemonEntries'
import { Link } from "react-router-dom";

function PokomonItem(pokemonEntries: PokemonEntries) {

  const navigationPath = "/pokemon-detail/" + pokemonEntries.entry_number
  
  // TODO refresh outlet

  return (
    <>
      <Link to={navigationPath}>
        <div className="single-line-container single-line PokomonItem-style">
          #{pokemonEntries.entry_number}     {pokemonEntries.pokemon_species.name}
        </div>
      </Link>
      <hr className="black-line" />
    </>
  )
}

export default PokomonItem