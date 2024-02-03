import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../Components/Pagination/Pagination'
import PokemonCard from '../Components/PokemonCard/PokemonCard'
import './Browse.css'

const Browse = () => {
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [pokeData, setPokeData] = useState([])
  const [pokedex, setPokedex] = useState();

  const pokeFun = async () => {
    setLoading(true) 
    const res = await axios.get(currentPageUrl)
    setNextPageUrl(res.data.next);
    setPrevPageUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
    console.log(pokeData)
  }


  useEffect(() => {
    pokeFun()
  }, [currentPageUrl])

  const getPokemon = async(res) => {
    res.map(async(item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state=[...state, result.data]
        state.sort((a,b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }

  function goToNextPage() {
    setPokeData([])
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setPokeData([])
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return 'Loading...'


  return (
    <div>
      <div className="card-container">
        <PokemonCard className='card' pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokedex(poke)}/>
      </div>
      <Pagination goToNextPage={nextPageUrl ? goToNextPage : null} goToPrevPage={prevPageUrl ? goToPrevPage : null}/>
    </div>
  )
}

export default Browse