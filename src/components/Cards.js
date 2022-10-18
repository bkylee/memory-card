import React, { useEffect } from 'react'
import uniqid from 'uniqid'

const Cards = ({order, currentScore, selected, addSelected, incrementScore, updateHS, resetScore, shuffle}) => {
    // useEffect(()=>{   
    //     shuffle();
    // },[currentScore]);

    const onClick = (card) =>{
        if(!selected.includes(card)){
            addSelected(card);
            incrementScore();
            updateHS();
        }else{
            resetScore();
        };
    };

    let output = order.map(card=> 
        <button type='button' key={uniqid()} onClick={()=>onClick(card)}>{card}</button>);
  return (
    <div>{output}</div>
  )
}

export default Cards