import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
              <div className="card-top">
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default ? item.sprites.front_default : item.sprites.other.home.front_default} alt="" />
                <p>{item.name[0].toUpperCase() + item.name.substring(1)}</p>
              </div>
              <div className="card-bottom">
                {item.types[0].type.name[0].toUpperCase() + item.types[0].type.name.substring(1)}
                {item.types[1] ? '/' + item.types[1].type.name[0].toUpperCase() + item.types[1].type.name.substring(1) : null}
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default PokemonCard;
