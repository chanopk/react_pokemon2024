import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PokemonObject } from '../models/PokemonObject'

function PokemonDetail() {

    const { entry_number } = useParams();

    const [data, setData] = useState<PokemonObject>()

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon/'+entry_number);
        setData(result.data)
        console.log(result.data)
      };
  
      fetchData();
    }, [entry_number]);
// TODO add detail and style
    return (
        <div>
            <p>Name: {data?.name}</p>
            {/* <img src={data?.sprites.front_default} alt="Pokemon Image" className="image-responsive"></img> */}
            <img src={data?.sprites.versions['generation-vi']['x-y'].front_default} alt="Pokemon Image" className="image-responsive"></img>
        </div>
    )
}

export default PokemonDetail


// tvPokemonHeight.text = "Height : "+pokemon.height.toString()
// tvPokemonWeight.text = "Weight : "+pokemon.weight.toString()
// tvPokemonTypes.text = "Types : "+pokemon.types?.map { it.type?.name }.toString().replace("[","").replace("]","")
// pokemon.stats?.forEach {
//     when(it.stat?.name) {
//         "hp" -> { tvhp.text = it.baseStat.toString() }
//         "attack" -> { tvattack.text = it.baseStat.toString() }
//         "special-attack" -> { tvspecial_attack.text = it.baseStat.toString() }
//         "defense" -> { tvdefense.text = it.baseStat.toString() }
//         "special-defense" -> { tvspecial_defense.text = it.baseStat.toString() }
//         "speed" -> { tvspeed.text = it.baseStat.toString() }
//     }
// }