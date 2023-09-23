
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
 // conditonal rendering
  let condition = true;
  // if(condition){
  //   return <div>Hello, it is conditional based rendering </div>
  // }

// rendering arrays:

 const[todos, setTodos] = useState(['todo1','todo2'])
  return (
    
    <>
     <div>
      Value of Count:{count} which is {(count%2 == 0 )? 'Even':'Odd'} value.
      
     </div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
     <div>
     Value of Counter:{counter} which is {(counter%2 == 0 )? 'Even':'Odd'} value.
      
     </div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>


      Rendering Arays:
      <h1>Todo List:</h1>
      {todos.map((value) => <li>{value}</li>)}

      <button onClick={()=> setTodos([...todos,'todo 3'])}>Click to Add</button>
    </>
   


   
  )
}

export default App
