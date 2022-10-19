import React from 'react'

const Winscreen = ({endClick}) => {
  return (
<div className='endWrap'>
<div id='Victory'>Victory!</div>
<img src="https://media.tenor.com/-O0Xii3GomgAAAAd/pug-dance.gif" alt="" />
<button onClick={endClick} type="button">Play Again</button> 
</div>
  )
}

export default Winscreen