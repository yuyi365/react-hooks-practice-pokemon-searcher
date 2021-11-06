import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const PokemonPage = ({allPokemons, setAllPokemons}) => {

  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value);
    }

    const pokemonsToDisplay = allPokemons.filter((pokemon) => {
      return pokemon.name.toUpperCase().includes(search.toUpperCase());
    })

  const addPokemon = (newEntry) => {
    setAllPokemons([
      ...allPokemons,
      newEntry
    ]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection allPokemons={pokemonsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
