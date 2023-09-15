
import './App.css'
import { useState } from 'react';

function App() {
  
  let count = 0 ;
  function incrementCount(){
    count = count+1 // it's a normal local variable and react doesn't track changes in local variables and hence doesn't rerender
    console.log('increment clicked ',count)

  }
  function decrementCount(){
    count = count-1 
    console.log('decrement clicked ',count)

  }

  const [counter,setCounter] = useState(0)  // a state variable and changes in state variable is tracked by react and rerendered on browser

  function incrementCounter(){
    setCounter(counter+1)
    
    console.log('increment counter clicked ',counter)

  }
  function decrementCounter(){
    setCounter(counter-1)
    console.log('decrement counter clicked ',counter)

  }


  return (
    
    <>
     <div>
      Count:{count}
      
     </div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
     <div>
      Counter:{counter}
      
     </div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </>
  )
}

export default App
