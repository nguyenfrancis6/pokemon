import React from "react";
import "./PokeStats.css";

const PokeStats = ({ pokemon, loading }) => {
  return (
    <div className="container">
      <div className="container-left">
        <img src={pokemon.sprites.front_default} alt="" />
        <p>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</p>
      </div>
      <div className="container-right">
        <div className="container-right-top">
          <div className="types">
            <p className="type-label">Type</p>
            <p>
              {pokemon.types[0].type.name[0].toUpperCase() +
                pokemon.types[0].type.name.substring(1)}
              {pokemon.types[1]
                ? "/" +
                  pokemon.types[1].type.name[0].toUpperCase() +
                  pokemon.types[1].type.name.substring(1)
                : null}
            </p>
          </div>
          <div className="abilities">
            <p>Abilities</p>
            <ul>
              {pokemon.abilities.map((abilityArray) => (
                <li>
                  {abilityArray.ability.name[0].toUpperCase() +
                    abilityArray.ability.name.substring(1)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="stats">
          <ul>
            <li>HP: {pokemon.stats[0].base_stat}</li>
            <li>Atk: {pokemon.stats[1].base_stat}</li>
            <li>Def: {pokemon.stats[2].base_stat}</li>
            <li>Sp Atk: {pokemon.stats[3].base_stat}</li>
            <li>Sp Def: {pokemon.stats[4].base_stat}</li>
            <li>Spe: {pokemon.stats[5].base_stat}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeStats;
