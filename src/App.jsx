import { useState, useEffect } from "react";
import "./App.css";
import MiAPI from "./components/MiAPI";
import Selector from "./components/Selector";

function App() {
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonStat, setPokemonStat] = useState("");
  const [pokemonArray, setPokemonArray] = useState([]);
  const [showPokemon, setShowPokemon] = useState([]);

  return (
    <div>
      <Selector
        {...{
          setPokemonType,
          setPokemonStat,
          pokemonStat,
          setShowPokemon,
          pokemonArray,
        }}
      />
      <MiAPI
        {...{
          pokemonType,
          pokemonStat,
          showPokemon,
          setShowPokemon,
          setPokemonArray,
          pokemonArray,
          setPokemonStat,
        }}
      />
    </div>
  );
}

export default App;
