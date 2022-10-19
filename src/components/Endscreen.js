import React from 'react'

const Endscreen = ({endClick, currentScore, highscore}) => {
  return (
    <div className='endWrap'>
        <div id='defeat'>Defeat!</div>
    <h1>Your score was: {currentScore}</h1>
    <br></br>
    <h1>High Score: {highscore}</h1>
    <button onClick={endClick} type="button">Play Again</button> 
    </div>
  )
}

export default Endscreen