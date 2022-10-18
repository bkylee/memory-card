import React, {useState} from "react";
import Cards from "./components/Cards";
import Scores from "./components/Scores";

const App = () =>{
    let cards = [1,2,3,4,5,6,7,8,9,10];
    const [order, setOrder] = useState(()=>cards);
    const [selected, setSelected] = useState(()=>[]);
    const [currentScore, setCurrentScore] = useState(()=>0);
    const [highscore, setHighScore] = useState(()=>0);

    const incrementScore = ()=>{
        setCurrentScore(prevScore => prevScore + 1);
    }

    const resetScore = () =>{
        setCurrentScore(0);
    }

    const shuffle = ()=>{
        let newArr= cards.length, t, i;
        while (newArr){
            i = Math.floor(Math.random()*newArr--);

            t = cards[newArr];
            cards[newArr] = cards[i];
            cards[i] = t;
        }
        setOrder(cards);
    }

    const addSelected = (card) =>{
        setSelected(prevArr => prevArr.concat(card));
    }

    const updateHS = ()=>{
        if (currentScore > highscore){
            setHighScore(currentScore);
        }else{setHighScore(highscore)}
    };

    return(
        <>
        <Scores currentScore={currentScore} highscore={highscore}  />
        <Cards setOrder={setOrder} order={order} shuffle={shuffle} addSelected={addSelected} selected={selected} incrementScore={incrementScore} resetScore={resetScore} currentScore={currentScore} updateHS={updateHS}/> 
        </>
        )
}

export default App