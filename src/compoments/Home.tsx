import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PokemonEntries, Pokedex } from '../models/PokemonEntries'
import '../App.css'
import PokemonList from '../compoments/PokemonList'
import { Outlet } from "react-router-dom";

function Home() {
  const [data, setData] = useState<PokemonEntries[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokedex/2/');
      setData(result.data.pokemon_entries)
      console.log(result.data)
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="Screen-style flex-container">

        <div className="flex-item-left">
          <div className="PokemonList-Area">
            <PokemonList data={data} />
          </div>
        </div>

        <div className="flex-item-right">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home