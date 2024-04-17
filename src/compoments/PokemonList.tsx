import React from 'react'
import { Pokedex } from '../models/PokemonEntries'
import PokomonItem from './PokemonItem'
import { Outlet } from "react-router-dom";


function PokemonList(pokedex: Pokedex) {
    return (
        <div className="PokemonList-style">
            {
                pokedex.data.map((val) => {
                    return <div className="scroll-area">
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