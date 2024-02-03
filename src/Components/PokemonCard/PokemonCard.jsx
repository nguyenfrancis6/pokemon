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
                <h1>{item.id}</h1>
                <img src={item.sprites.front_default} alt="" />
                <p>{item.name}</p>
              </div>
              <div className="card-bottom">

              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default PokemonCard;
