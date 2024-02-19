import React from "react";
import "./PokeStats.css";

const PokeStats = ({ pokemon, loading }) => {
  return (
    <div className="container">
      <div className="container-left">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="container-right">
        <p>Name: {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</p>
        <p>
          Type: {pokemon.types[0].type.name[0].toUpperCase() +
            pokemon.types[0].type.name.substring(1)}
          {pokemon.types[1]
            ? "/" +
              pokemon.types[1].type.name[0].toUpperCase() +
              pokemon.types[1].type.name.substring(1)
            : null}
        </p>
        <p>Abilities: {pokemon.abilities.map((abilityArray) => abilityArray.ability.name + '/')}</p>
        <p>Stats</p>
        <ul>
          <li>{pokemon.stats[0].stat.name[0].toUpperCase() + pokemon.stats[0].stat.name.substring(1)}: {pokemon.stats[0].base_stat}</li>
          <li>{pokemon.stats[1].stat.name[0].toUpperCase() + pokemon.stats[1].stat.name.substring(1)}: {pokemon.stats[1].base_stat}</li>
          <li>{pokemon.stats[2].stat.name[0].toUpperCase() + pokemon.stats[2].stat.name.substring(1)}: {pokemon.stats[2].base_stat}</li>
          <li>{pokemon.stats[3].stat.name[0].toUpperCase() + pokemon.stats[3].stat.name.substring(1)}: {pokemon.stats[3].base_stat}</li>
          <li>{pokemon.stats[4].stat.name[0].toUpperCase() + pokemon.stats[4].stat.name.substring(1)}: {pokemon.stats[4].base_stat}</li>
          <li>{pokemon.stats[5].stat.name[0].toUpperCase() + pokemon.stats[5].stat.name.substring(1)}: {pokemon.stats[5].base_stat}</li>
        </ul>
      </div>
    </div>
  );
};

export default PokeStats;
