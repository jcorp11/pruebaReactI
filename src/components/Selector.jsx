import style from "../components/css/Selector.module.css";
import cap from "../utils/capitalize";
const Selector = ({
  setPokemonType,
  setPokemonStat,
  setPokeName,
  pokeName,
}) => {
  const pokeTypes = [
    "electric",
    "fire",
    "water",
    "steel",
    "dark",
    "normal",
    "bug",
    "fairy",
    "ghost",
    "ground",
    "dragon",
    "flying",
    "ice",
    "psychic",
    "rock",
    "grass",
    "poison",
    "fighting",
  ];

  return (
    <>
      <section className={style.selectorContainer}>
        <section>
          <h1>Elige el tipo de Pokemon</h1>
          <select
            className="form-select"
            onChange={(e) => setPokemonType(e.target.value)}
          >
            <option defaultValue={""}>Elige un tipo de pokemon</option>
            {pokeTypes.map((type) => (
              <option key={type} value={type}>
                {cap(type)}
              </option>
            ))}
          </select>
        </section>
        <section>
          <h1>Elige la stat para ordenar</h1>
          <select
            className="form-select"
            onChange={(e) => setPokemonStat(e.target.value)}
          >
            <option value={""}>Elige una stat para ordenar</option>
            <option value="attack">Attack</option>
            <option value="hp">HP</option>
            <option value="defense">Defense</option>
            <option value="special-attack">Special attack</option>
            <option value="special-defense">Special defense</option>
            <option value="speed">Speed</option>
          </select>
        </section>
        <section>
          <h1>Busca por nombre</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa el nombre"
            value={pokeName}
            onChange={(e) => setPokeName(e.target.value)}
          />
        </section>
      </section>
    </>
  );
};

export default Selector;
