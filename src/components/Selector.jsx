import style from "../components/css/Selector.module.css";
const Selector = ({ setPokemonType, setPokemonStat }) => {
  return (
    <>
      <h1>Elige el tipo de Pokemon</h1>
      <section className={style.selectorContainer}>
        <select
          className="form-select"
          onChange={(e) => setPokemonType(e.target.value)}
        >
          <option selected>Elige un tipo de pokemon</option>
          <option value="electric">Electric</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="steel">Steel</option>
        </select>
        <select
          className="form-select"
          onChange={(e) => setPokemonStat(e.target.value)}
        >
          <option selected>Elige una stat para ordenar</option>
          <option value="attack">Attack</option>
          <option value="hp">HP</option>
          <option value="defense">Defense</option>
          <option value="special-attack">Special attack</option>
          <option value="special-defense">Special defense</option>
          <option value="speed">Speed</option>
        </select>
      </section>
    </>
  );
};

export default Selector;
