import React from 'react'

const Scores = ({currentScore, highscore}) => {
  return (
    <>
    <h2>Current Score: {currentScore}</h2>
    <h2>High Score: {highscore}</h2>
    </>
  )
}

export default Scores