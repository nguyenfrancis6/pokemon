import React from "react";
import "./Search.css";
import pokemon_background from "../../assets/pokemon_background.png";
import pokemon_pin from "../../assets/pokemon_pin.png";
import search_icon from "../../assets/search_icon.png";

const Search = () => {
  return (
    <div className="search">
      <div className="search-top">
        <h1>Online Pokédex</h1>
        <img src={pokemon_pin} alt="" />
      </div>
      <form action="">
        <input
          className="search-input"
          type="text"
          maxLength="30"
          placeholder="Search a Pokémon!"
        />
        <button className="search-button">
          <img src={search_icon} alt="" />
        </button>
      </form>
      <img className="search-image" src={pokemon_background} alt="" />
    </div>
  );
};

export default Search;
