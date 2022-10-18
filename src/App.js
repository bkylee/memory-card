import React, {useEffect, useState} from "react";
import Cards from "./components/Cards";
import Endscreen from "./components/Endscreen";
import Header from "./components/Header";
import Scores from "./components/Scores";

const App = () =>{
    let cards = ['Adon','Dan','Akuma','Dhalsim','Guy','Ken','Birdie','Charlie','ChunLi','Gen'];
    const [order, setOrder] = useState(()=>cards);
    const [selected, setSelected] = useState(()=>[]);
    const [currentScore, setCurrentScore] = useState(()=>0);
    const [highscore, setHighScore] = useState(()=>0);
    const [end, setEnd] = useState(()=> false);

    const toggleEnd = ()=>{
        if(end){
            setEnd(false)
        }else{
            setEnd(true)
        };
    };

    const endClick = () =>{
        toggleEnd();
        resetSelected();
        resetScore();
    }

    const incrementScore = ()=>{
        setCurrentScore(prevScore => prevScore + 1);
    }

    const resetScore = () =>{
        setCurrentScore(0);
    }

    const resetSelected =()=>{
        setSelected([]);
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
        <div id="wrap">
        <Header />
        <Scores currentScore={currentScore} highscore={highscore}  />
        <Cards toggleEnd={toggleEnd} end={end} setOrder={setOrder} order={order} shuffle={shuffle} addSelected={addSelected} selected={selected} incrementScore={incrementScore} currentScore={currentScore} updateHS={updateHS}/> 
        {end ? <Endscreen resetScore={resetScore} endClick={endClick} currentScore={currentScore} highscore={highscore} /> : null}
        </div>
        )
}

export default App