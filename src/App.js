import React, {useState} from "react";
import Cards from "./components/Cards";
import Scores from "./components/Scores";

const App = () =>{
    let cards = [1,2,3,4,5,6,7,8,9,10];
    const [order, setOrder] = useState(()=>cards);
    const [currentScore, setCurrentScore] = useState(()=>0);
    const [highscore, setHighScore] = useState(()=>0);

    const incrementScore = ()=>{
        setCurrentScore(prevScore => prevScore + 1);
    }

    const resetScore = () =>{
        setCurrentScore(currentScore = 0);
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

    return(
        <>
        <Scores currentScore={currentScore} setCurrentScore={setCurrentScore} highscore={highscore} setHighScore={setHighScore} />
        <Cards setOrder={setOrder} order={order} /> 
        </>
        )
}