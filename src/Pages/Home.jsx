import React from 'react'
import Search from '../Components/Search/Search'

const Home = () => {
  return (
    <div style={{minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Search/>
    </div>
  )
}

export default Home