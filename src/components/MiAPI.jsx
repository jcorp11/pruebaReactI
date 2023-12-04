import fetchData from "../utils/fetchData";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import styles from "../components/css/MiAPI.module.css";

const MiAPI = ({ pokemonType }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [showPokemon, setShowPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    if (!pokemonType) return;
    try {
      fetchData(`https://pokeapi.co/api/v2/type/${pokemonType}`)
        .then((data) => {
          setPokemonList(data.pokemon.slice(0, 10));
          console.log(data.pokemon.slice(0, 10));
        })
        .catch((error) => {
          console.error(
            `Error fetching ${pokemonType}-type Pokémon list:`,
            error
          );
        });
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [pokemonType]);

  useEffect(() => {
    Promise.all(pokemonList.map((pokemon) => fetchData(pokemon.pokemon.url)))
      .then((data) => {
        setShowPokemon(data);
        console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching Pokémon details:", error)
      );
  }, [pokemonList]);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <h2>Pokemones Electric:</h2>

      <section className={styles.cardContainer}>
        {showPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={handlePokemonClick}
          />
        ))}
      </section>

      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>

          <h3>Stats:</h3>
          <ul>
            {selectedPokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MiAPI;