import { useState, useEffect } from "react";
import "./App.css";
import MiAPI from "./components/MiAPI";
import Selector from "./components/Selector";

function App() {
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonStat, setPokemonStat] = useState("");
  return (
    <div>
      <Selector {...{ setPokemonType, setPokemonStat }} />
      <MiAPI {...{ pokemonType, pokemonStat }} />
    </div>
  );
}

export default App;
