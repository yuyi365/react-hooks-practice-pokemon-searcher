import React, {useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

const App = () => {
  
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((res) => res.json())
    .then((data) => setAllPokemons(data))
  }, [])

  return (
    <div className="App">
      <PokemonPage
        allPokemons={allPokemons}
        setAllPokemons={setAllPokemons}
      />
    </div>
  );
}

export default App;
