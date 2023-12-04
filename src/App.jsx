import { useState, useEffect } from "react";
import "./App.css";
import MiAPI from "./components/MiAPI";
import Selector from "./components/Selector";

function App() {
  const [pokemonType, setPokemonType] = useState("");
  return (
    <div>
      <Selector {...{ setPokemonType }} />
      <MiAPI {...{ pokemonType }} />
    </div>
  );
}

export default App;
