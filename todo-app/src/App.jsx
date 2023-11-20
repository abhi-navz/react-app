import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [loading, setLoading] = useState(true);

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(mainTask));
  }, [mainTask]);

  // retrieving data from local storage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    const parsedTasks = JSON.parse(storedTasks);

    if(parsedTasks){
      setMainTask(parsedTasks);
    }

  

    setLoading(false);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Enter both fields!");
    } else {
      const newTask = { title, desc };

      setMainTask([...mainTask, newTask]);

      settitle("");
      setdesc("");
    }
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (!loading && mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className=" flex justify-evenly items-center mb-3">
          <div className=" w-2/3 ">
            <h5 className=" text-xl font-bold break-normal ">{t.title}</h5>
            <p className="break-normal">{t.desc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="text-sm bg-red-400 rounded-lg px-3 py-1 text-white"
          >
            Delete
          </button>
        </li>
      );
    });
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
      <hr />
      <div className="flex justify-center">
        <div className="bg-slate-200 p-5 mt-5 w-3/4 rounded-lg ">
          <ul className="list-disc">{renderTask}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
