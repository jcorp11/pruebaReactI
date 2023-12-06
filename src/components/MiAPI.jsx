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
}) => {
  useEffect(() => {
    if (!pokemonType) return;
    try {
      fetchData(`https://pokeapi.co/api/v2/type/${pokemonType}`)
        .then((data) => {
          setPokemonList(data.pokemon);
          // setPokemonList(data.pokemon.slice(0, 5));
          //   console.log(data.pokemon.slice(0, 10));
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
        // console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching Pokémon details:", error)
      );
  }, [pokemonList]);

  useEffect(() => {
    if (!pokemonStat) return;

    const sortedPokemon = [...showPokemon].sort((a, b) => {
      //   console.log({ b, a, stat: statsmap[pokemonStat] });
      return (
        b.stats[statsmap[pokemonStat]].base_stat -
        a.stats[statsmap[pokemonStat]].base_stat
      );
    });
    setShowPokemon(sortedPokemon);
    // console.log(sortedPokemon);
  }, [pokemonStat]);

  return (
    <div className={styles.container}>
      <h2>{cap(pokemonType)} Pokemon:</h2>

      <section className={styles.cardContainer}>
        {showPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default MiAPI;
