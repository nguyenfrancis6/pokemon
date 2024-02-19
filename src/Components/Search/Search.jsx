import React from "react";
import "./Search.css";
import pokemon_background from "../../assets/pokemon_background.png";
import pokemon_pin from "../../assets/pokemon_pin.png";
import search_icon from "../../assets/search_icon.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [pokemonData, setPokemonData] = useState([])

  const searchPokemon = async (pokemon) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    setPokemonData(response.data)
  }

  useEffect(() => {
    console.log(pokemonData)
  }, [pokemonData])

  return (
    <div className="search">
      <div className="search-top">
        <h1>Online Pokédex</h1>
        <img src={pokemon_pin} alt="" />
      </div>
      <div className="search-form">
        <input
          className="search-input"
          type="text"
          maxLength="30"
          placeholder="Search a Pokémon!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">
          <img src={search_icon} alt="" onClick={() => searchPokemon(searchTerm)}/>
        </button>
      </div>
      <img className="search-image" src={pokemon_background} alt="" />
    </div>
  );
};

export default Search;
