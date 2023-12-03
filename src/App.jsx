import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const parameters = new URLSearchParams({
      limit: 150,
    });

    // Fetch the list of Pokémon
    fetch("https://pokeapi.co/api/v2/type/electric?" + parameters)
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .then(() => console.log(pokemonList))
      .catch((error) => console.error("Error fetching Pokémon list:", error));
  }, []);

  const handlePokemonClick = async (pokemon) => {
    try {
      // Fetch details of the selected Pokémon
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  return (
    <div>
      <h1>Pokémon API Demo</h1>
      <ol>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} onClick={() => handlePokemonClick(pokemon)}>
            {pokemon.name}
          </li>
        ))}
      </ol>

      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
        </div>
      )}
    </div>
  );
}

export default App;
