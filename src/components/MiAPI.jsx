import fetchData from "../utils/fetchData";
import cap from "../utils/capitalize";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import styles from "../components/css/MiAPI.module.css";

const statsmap = {
  hp: 0,
  attack: 1,
  defense: 2,
  "special-attack": 3,
  "special-defense": 4,
  speed: 5,
};

const MiAPI = ({
  pokemonType,
  pokemonStat,
  setPokemonStat,
  showPokemon,
  setShowPokemon,
  setPokemonArray,
  pokemonArray,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!pokemonType) return;

    setLoading(true);
    setError(false);

    try {
      fetchData(`https://pokeapi.co/api/v2/type/${pokemonType}`)
        .then((data) => {
          const pokeList = data.pokemon;
          // console.log(pokeList);
          return Promise.all(
            pokeList.map((pokemon) => fetchData(pokemon.pokemon.url))
          );
        })
        .then((data) => {
          setPokemonArray(data);
          setShowPokemon(data);
          setLoading(false);
          setError(false);
          setPokemonStat("");
        })
        .catch((error) => {
          console.error("Error in useEffect - 2:", error);
          setLoading(false);
          setError(true);
        });
    } catch (error) {
      console.error("Error in useEffect - 1:", error);
      setLoading(false);
      setError(true);
    }
  }, [pokemonType]);

  useEffect(() => {
    if (!pokemonStat) return;

    const sortedPokemon = [...pokemonArray].sort((a, b) => {
      return (
        b.stats[statsmap[pokemonStat]].base_stat -
        a.stats[statsmap[pokemonStat]].base_stat
      );
    });
    setPokemonArray(sortedPokemon);
    setShowPokemon(sortedPokemon);
  }, [pokemonStat]);

  return (
    <div className={styles.container}>
      {loading && <h1 className={styles.errLoad}>Loading...</h1>}
      {error && <h1 className={styles.errLoad}>Error Fetching Data</h1>}
      {!loading && !error && (
        <>
          <h2>{cap(pokemonType)} Pokemon:</h2>

          <section className={styles.cardContainer}>
            {showPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default MiAPI;
