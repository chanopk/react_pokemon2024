import React from 'react'
import { PokemonEntries } from '../models/PokemonEntries'

function PokomonItem(pokemonEntries: PokemonEntries) {
  return (
    <>
      <div className="single-line-container single-line PokomonItem-style">
            #{pokemonEntries.entry_number}     {pokemonEntries.pokemon_species.name}  
        </div>
      <hr className="black-line" /> 
    </>
  )
}

export default PokomonItem