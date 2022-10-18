import React, {useState} from "react";

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

}