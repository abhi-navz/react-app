import { useState } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    if(!title || !desc){
      alert("Enter both fields!")
    }
    else{

      setMainTask([...mainTask, {title, desc}])
      console.log(mainTask)
      settitle("");
      setdesc("");
    }
  };

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2> 
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{

      return <li key={i} className=" flex justify-evenly items-center mb-3">
        <div className="flex justify-between  items-center w-2/3 ">
        <h5 className=" text-xl font-bold ">{t.title}</h5>
        <h6 className="">{t.desc}</h6>
        
      </div>
      <button onClick={()=> {deleteHandler(i)}} className="text-sm bg-red-400 rounded-lg px-3 py-1 text-white">Delete</button>
      </li>
    })
    
  }
  
  return (
    <>
      <h1 className="bg-red-400 mt-2 text-white text-center p-5 font-bold text-3xl">
        Todo App
      </h1>
      <div className="flex align-center justify-center m-5">
        <form
          className="flex flex-col justify-center w-80  "
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Enter your title here..."
            className="border-2 px-5 py-2 border-gray-600 m-5 rounded-lg"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter description here..."
            className="border-2 px-5 py-2 border-gray-600 m-5 rounded-lg"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="border-2 px-4 py-1 rounded-lg mx-5 bg-purple-500 text-white">
            
            Add task
          </button>
        </form>
      </div>
      <hr/>
      <div className="bg-slate-200 p-5 mt-5 ">
        <ul className="list-disc">
          {renderTask}
        </ul>
      </div>
    </>
  );

}

export default App;
