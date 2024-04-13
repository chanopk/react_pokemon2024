export interface PokemonSpecies {
    name: string;
    url: string;
}

export interface PokemonEntries {
    entry_number: number; 
    pokemon_species: PokemonSpecies;
}

export interface Pokedex {
    data: PokemonEntries[];
  }