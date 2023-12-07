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
  pokemonList,
  showPokemon,
  setPokemonList,
  setShowPokemon,
  loading,
  setLoading,
  error,
  setError,
  setPokemonArray,
  pokemonArray,
}) => {
  useEffect(() => {
    if (!pokemonType) return;

    setLoading(true);
    setError(false);

    try {
      fetchData(`https://pokeapi.co/api/v2/type/${pokemonType}`).then(
        (data) => {
          setPokemonList(data.pokemon);
        }
      );
    } catch (error) {
      console.error("Error in useEffect - 1:", error);
      setLoading(false);
      setError(true);
    }
  }, [pokemonType]);

  useEffect(() => {
    try {
      Promise.all(
        pokemonList.map((pokemon) => fetchData(pokemon.pokemon.url))
      ).then((data) => {
        setLoading(false);
        setError(false);
        setPokemonArray(data);
        setShowPokemon(data);
      });
    } catch (error) {
      console.error("Error in useEffect:", error);
      setLoading(false);
      setError(true);
    }
  }, [pokemonList]);

  useEffect(() => {
    if (!pokemonStat) return;

    const sortedPokemon = [...pokemonArray].sort((a, b) => {
      return (
        b.stats[statsmap[pokemonStat]].base_stat -
        a.stats[statsmap[pokemonStat]].base_stat
      );
    });
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
