const Selector = ({ setPokemonType }) => {
  return (
    <section>
      <h1>Elige el tipo de Pokemon</h1>
      <select onChange={(e) => setPokemonType(e.target.value)}>
        <option value="">Elige un tipo de pokemon</option>
        <option value="electric">Electric</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
      </select>
    </section>
  );
};

export default Selector;
