import React from 'react'

const Scores = ({currentScore, highscore}) => {
  return (
    <>
    <h2>{currentScore}</h2>
    <h2>{highscore}</h2>
    </>
  )
}

export default Scores