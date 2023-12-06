import cap from "../utils/capitalize";
import styles from "./css/PokemonCard.module.css";
import { v4 as uuidv4 } from "uuid";

const PokemonCard = ({ pokemon }) => {
  const statAbr = {
    hp: "Hp",
    attack: "Atk",
    defense: "Def",
    "special-attack": "SpA",
    "special-defense": "SpD",
    speed: "Spe",
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <section className={`${styles.imagenContainer}`}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className={`card-img-top ${styles.imagen}`}
        />
      </section>
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className="card-title">{cap(pokemon.name)}</h5>
        <section className={styles.containerHeightWeight}>
          <p className="card-text">Height: {pokemon.height}</p>
          <p className="card-text">Weight: {pokemon.weight}</p>
        </section>

        <h6>Abilities:</h6>
        <ul className={`${styles.abilityContainer} list-group`}>
          {pokemon.abilities.map((ability) => (
            <li
              key={uuidv4()}
              className={`${styles.abilityItem} list-group-item `}
            >
              {ability.ability.name}
            </li>
          ))}
        </ul>

        <section className={styles.statWrapper}>
          <h6>Stats:</h6>
          <ul className={`${styles.statGroup} list-group`}>
            {pokemon.stats.map((stat) => (
              <li
                key={uuidv4()}
                className={`${styles.statContainer} list-group-item`}
              >
                <p>{statAbr[stat.stat.name]}:</p>
                <p>{stat.base_stat}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PokemonCard;
