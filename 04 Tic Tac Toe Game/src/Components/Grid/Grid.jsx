import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'

function Grid({numberOfCards}){
  const [ turn, setTurn ] = useState(true)  // true => O false => X
  function play(){
    setTurn(!turn)
    console.log('Move played')
  }
    return(
        <>
        <h1 className="current-turn">Current Turn: { turn ? "O" : "X"} </h1>
        <div className="grid">
          {
            Array(numberOfCards).fill(<Card iconName={''}/>).map((el, idx)=>{
                return  <Card onPlay ={play}  key ={idx}  />

            })
          }
        
        </div>
        </>
    )


}


export default Grid;