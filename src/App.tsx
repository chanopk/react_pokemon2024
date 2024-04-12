import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonEntries {
  entry_number: number; 
  pokemon_species: PokemonSpecies;
}

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
     {
      data.map((val) => {
        return <p>
          name: {val.pokemon_species.name}
        </p>
      })
     }
    </>
  )
}

export default App
