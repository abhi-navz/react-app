import { useState } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
      <h1 className="bg-black text-white text-center p-5 font-bold text-3xl">
        Todo App
      </h1>
      <div className="flex align-center justify-center">
      <form className="flex flex-col justify-center w-80 ">
        <input
          type="text"
          placeholder="Enter your title here..."
          className="border-2 px-5 py-2 border-gray-600 m-5 rounded-lg"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
  
        />
        <input
          type="text"
          placeholder="Enter description here..."
          className="border-2 px-5 py-2 border-gray-600 m-5 rounded-lg"
          value={desc}
          onChange={(e)=> {
            setdesc(e.target.value)
          }}
        />
        <button  className="border-2 px-4 py-1 rounded-lg mx-5 bg-purple-500 text-white">Add task</button>
      </form>
      </div>
    </>
  );
}

export default App;
