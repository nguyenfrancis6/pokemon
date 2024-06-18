import React from 'react'
import Questions from '../Components/Questions/Questions'

const Trivia = () => {
  return (
    <div style={{minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Questions/>
    </div>
  )
}

export default Trivia