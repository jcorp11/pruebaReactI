import style from "../components/css/Selector.module.css";
const Selector = ({ setPokemonType, setPokemonStat }) => {
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
            <option value="electric">Electric</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="steel">Steel</option>
          </select>
        </section>
        <section>
          <h1>Elige la stat para ordenar</h1>
          <select
            className="form-select"
            onChange={(e) => setPokemonStat(e.target.value)}
          >
            <option defaultValue={""}>Elige una stat para ordenar</option>
            <option value="attack">Attack</option>
            <option value="hp">HP</option>
            <option value="defense">Defense</option>
            <option value="special-attack">Special attack</option>
            <option value="special-defense">Special defense</option>
            <option value="speed">Speed</option>
          </select>
        </section>
      </section>
    </>
  );
};

export default Selector;
