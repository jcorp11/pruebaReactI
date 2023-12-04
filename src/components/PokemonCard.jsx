import cap from "../utils/capitalize";
import styles from "./css/PokemonCard.module.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card" style={{ width: "20rem", margin: "20px" }}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{cap(pokemon.name)}</h5>
        <section className={styles.containerHeightWeight}>
          <p className="card-text">Height: {pokemon.height}</p>
          <p className="card-text">Weight: {pokemon.weight}</p>
        </section>

        <h6>Abilities:</h6>
        <ul className={`${styles.abilityContainer} list-group`}>
          {pokemon.abilities.map((ability) => (
            <li
              key={ability.ability.name}
              className={`${styles.abilityItem} list-group-item `}
            >
              {ability.ability.name}
            </li>
          ))}
        </ul>

        <h6>Stats:</h6>
        <ul className={`${styles.statGroup} list-group`}>
          {pokemon.stats.map((stat) => (
            <li
              key={stat.stat.name}
              className={`${styles.statContainer} list-group-item`}
            >
              <p>{stat.stat.name}:</p>
              <p>{stat.base_stat}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
