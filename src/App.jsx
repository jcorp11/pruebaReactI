import { useState, useEffect } from "react";
import "./App.css";
import MiAPI from "./components/MiAPI";
import Selector from "./components/Selector";

function App() {
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonStat, setPokemonStat] = useState("");
  const [pokeName, setPokeName] = useState("");
  return (
    <div>
      <Selector
        {...{ setPokemonType, setPokemonStat, setPokeName, pokeName }}
      />
      <MiAPI {...{ pokemonType, pokemonStat, pokeName }} />
    </div>
  );
}

export default App;
