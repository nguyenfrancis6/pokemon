import React from "react";
import "./PokeStats.css";

const PokeStats = ({ pokemon }) => {
  const calculateStatWidth = (baseStat) => {
    return (baseStat / 255) * 100 + "%";
  };

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
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                <div className="stat-info">
                  <span className="stat-name">
                    {stat.stat.name.length > 3
                      ? stat.stat.name === "defense"
                        ? stat.stat.name[0].toUpperCase() +
                          stat.stat.name.slice(1, 3)
                        : stat.stat.name[0].toUpperCase() +
                          stat.stat.name.slice(1, 2) +
                          stat.stat.name.slice(-1)
                      : stat.stat.name[0].toUpperCase() +
                        stat.stat.name.substring(1)}
                    :
                  </span>{" "}
                  <span className="stat-value">{stat.base_stat}</span>
                </div>
                <div className="stat-bar-container">
                  <div
                    className="stat-bar"
                    style={{ width: calculateStatWidth(stat.base_stat) }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeStats;
