import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

const PokemonCollection = ({allPokemons}) => {

  const mapPokemons = allPokemons.map((pokemon) => {
    return <PokemonCard 
      key = {pokemon.id}
      name = {pokemon.name}
      hp = {pokemon.hp}
      sprites={pokemon.sprites}
    />
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {mapPokemons}
    </Card.Group>
  );
}

export default PokemonCollection;
