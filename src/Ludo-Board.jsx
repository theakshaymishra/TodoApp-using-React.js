import {useState} from 'react';


export default function LudoBoard(){
    let [Moves,setMoves] = useState({ blue : 0 , red : 0 , green : 0 , yellow : 0});
    
    let updateBlue = ()=>{
        setMoves( {...Moves , blue : Moves.blue + 1});
        console.log(Moves.blue);
    }
    // let updateBlue = () => {
    // setMoves((prevMoves) => ({...prevMoves,blue: prevMoves.blue + 1}));
    // console.log(Moves.blue);  
    // This will log the old value, not the updated one
    let updatered = ()=>{
        setMoves( {...Moves , red : Moves.red + 1});
        console.log(Moves.red);
    }
    let updategreen = ()=>{
        setMoves( {...Moves , green : Moves.green + 1});
        console.log(Moves.green);
    }
    let updateyellow = ()=>{
        setMoves( {...Moves , yellow : Moves.yellow + 1});
        console.log(Moves.yellow);
    }


    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue Moves = {Moves.blue}</p>
                <button onClick={updateBlue} style = {{ backgroundColor: "blue"}}>1</button>
            </div>
            <div className="board">
                <p>Green Moves = {Moves.green}</p>
                <button onClick={updategreen} style = {{ backgroundColor: "green"}}>1</button>
            </div>
            <div className="board">
                <p>Red Moves = {Moves.red} </p>
                <button onClick={updatered} style = {{ backgroundColor: "red"}}>1</button>
            </div>
            <div className="board">
                <p>Yellow Moves = {Moves.yellow} </p>
                <button onClick={updateyellow} style = {{ backgroundColor: "yellow" , color: "black"}}>1</button>
            </div>

        </div>
    )
}