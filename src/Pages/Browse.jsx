import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../Components/Pagination/Pagination'

const Browse = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true) 
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
    
  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }


  return (
    <div>
      {pokemon.map(p => <div key={p.name}>{p}</div>)}
      <Pagination goToNextPage={goToNextPage} goToPrevPage={goToPrevPage}/>
    </div>
  )
}

export default Browse