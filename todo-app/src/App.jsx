import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState(() => {
    // checking if there's any local storage and if there's initializing the mainTask with the stored Tasks.
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(mainTask));
  }, [mainTask]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Enter both fields!");
    } else {
      const newTask = { title, desc };
      newTask.completed = false;

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
  const handleCheckboxChange = (i) => {
    const checkedTasks = [...mainTask];
    checkedTasks[i].completed = !checkedTasks[i].completed;
    setMainTask(checkedTasks);
  };
  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className=" flex justify-evenly items-center mb-3">
          <div className="">
            <input
              className="w-5 h-5"
              type="checkbox"
              checked={t.completed}
              onChange={() => {
                handleCheckboxChange(i);
              }}
            />
          </div>
          <div className=" w-1/3 ">
            <h5
              className={`text-xl font-bold break-normal ${
                t.completed ? "line-through" : ""
              }`}
            >
              {t.title}
            </h5>
            <p className={`break-normal ${t.completed ? "line-through" : ""}`}>
              {t.desc}
            </p>
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
    <div className=" h-screen">
      <h1 className="bg-red-400 mt-6 md:mt-2 text-white text-center px-5 py-3 font-bold text-3xl mx-3">
        Todo App
      </h1>
      <div className="flex flex-col justify-center h-5/6 md:h-auto md:mt-5">
        <div className="flex align-center justify-center m-5 shadow-lg px-5 py-3 md:mt-0 mt-12 bg-slate-100 md:bg-transparent">
          <form
            className="flex flex-col justify-center w-80  "
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="Enter your title here..."
              className=" px-5 py-2 border-gray-600 m-5 rounded-lg"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter description here..."
              className=" px-5 py-2 border-gray-600 m-5 rounded-lg"
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
        <hr className="bg-gray-800 mx-3" />
        <div className="flex justify-center">
          <div className="bg-slate-200 p-5 mt-5 w-3/4 shadow-lg  h-96 md:h-44 overflow-y-scroll ">
            <ul className="list-disc">{renderTask}</ul>
          </div>
        </div>
      </div>

      <div className=" mx-3 mt-12 absolute bottom-0 p-2 ">
        <p class="text-sm text-gray-600">
          © Copyright 2023. All Rights Reserved by{" "}
          <a
            className="text-blue-800 underline"
            target="_blank"
            href="https://www.linkedin.com/in/abhi-navz/"
          >
            Abhinav.dev
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
