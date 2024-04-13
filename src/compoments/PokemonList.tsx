import React from 'react'
import { PokemonEntries, Pokedex } from '../models/PokemonEntries'
import PokomonItem from './PokemonItem'


function PokemonList(pokedex: Pokedex) {
    return (
        <div className="bordered-element PokemonList-style">
            {
                pokedex.data.map((val) => {
                    return <div>
                        <ul>
                            <li key={val.entry_number}>
                                <PokomonItem entry_number={val.entry_number} pokemon_species={val.pokemon_species} />
                            </li>
                        </ul>
                    </div>
                })
            }
        </div>
    )
}

export default PokemonList