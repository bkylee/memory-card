import React, { useEffect } from 'react'
import uniqid from 'uniqid'

const Cards = ({toggleEnd, order, currentScore, selected, addSelected, incrementScore, updateHS, shuffle}) => {
    useEffect(()=>{   
        shuffle();
        updateHS();
    },[currentScore]);
    
    const onClick = (card) =>{
        if(!selected.includes(card)){
            addSelected(card);
            incrementScore();
        }else{
            toggleEnd();
        };
    };

    let output = order.map(card=> 
        <div key={uniqid()} id={card} className="cards" onClick={()=>onClick(card)}>{card}</div>);
  return (
    <div id='cardWrap'>{output}</div>
  )
}

export default Cards