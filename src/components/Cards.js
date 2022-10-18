import React, { useEffect } from 'react'
import uniqid from 'uniqid'

const Cards = ({resetSelected, order, currentScore, selected, addSelected, incrementScore, updateHS, resetScore, shuffle}) => {
    useEffect(()=>{   
        shuffle();
        updateHS();
    },[currentScore]);

    const onClick = (card) =>{
        if(!selected.includes(card)){
            addSelected(card);
            incrementScore();
        }else{
            resetSelected();
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