import React from "react";
import "./Search.css";
import pokemon_background from "../../assets/pokemon_background.png";
import pokemon_pin from "../../assets/pokemon_pin.png";
import search_icon from "../../assets/search_icon.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [pokemonData, setPokemonData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchPokemon = async (pokemon) => {
    if (!pokemon) {
      return alert("Put in a Pokemon name or number");
    }
    try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    setPokemonData(response.data)
    setErrorMessage('')
    } catch (error) {
      console.error('An error occurred: ', error)
      setErrorMessage("Pokemon doesn't exist or is not found!")
    }
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
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button className="search-button">
          <img src={search_icon} alt="" onClick={() => searchPokemon(searchTerm)}/>
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <img className="search-image" src={pokemon_background} alt="" />
    </div>
  );
};

export default Search;
