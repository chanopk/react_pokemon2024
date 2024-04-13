import { useEffect, useState } from 'react'
import axios from 'axios'
import { PokemonEntries, Pokedex } from './models/PokemonEntries'
import './App.css'
import PokemonList from './compoments/PokemonList'
import PokomonItem from './compoments/PokemonItem'

function App() {
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
      <div className="Screen-style">
        <div className="PokemonList-bordered scrollable-area" id="scroll">
          <PokemonList data={data} />
        </div>
      </div>
    </>
  )
}

export default App
