import { useState, useEffect } from "react";
import "./App.css";
import MiAPI from "./components/MiAPI";
import Selector from "./components/Selector";

function App() {
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonStat, setPokemonStat] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [showPokemon, setShowPokemon] = useState([]);
  return (
    <div>
      <Selector
        {...{
          setPokemonType,
          setPokemonStat,
          setPokeName,
          pokeName,
          showPokemon,
          setShowPokemon,
        }}
      />
      <MiAPI
        {...{
          pokemonType,
          pokemonStat,
          pokemonList,
          showPokemon,
          setPokemonList,
          setShowPokemon,
        }}
      />
    </div>
  );
}

export default App;
