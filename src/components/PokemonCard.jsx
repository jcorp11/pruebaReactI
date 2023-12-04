const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "20px" }}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <p className="card-text">Height: {pokemon.height}</p>
        <p className="card-text">Weight: {pokemon.weight}</p>

        <h6>Abilities:</h6>
        <ul className="list-group">
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name} className="list-group-item">
              {ability.ability.name}
            </li>
          ))}
        </ul>

        <h6>Stats:</h6>
        <ul className="list-group">
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name} className="list-group-item">
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
