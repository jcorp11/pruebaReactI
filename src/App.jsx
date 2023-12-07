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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
          loading,
          setLoading,
          error,
          setError,
        }}
      />
    </div>
  );
}

export default App;
