//sử dụng useReducer thay cho state
import { useReducer, useRef } from "react";

import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
//1. Init state

//2.Actions

//3.Reducer

// 4. sử dụng useReducer

function Todo() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  const inputRef = useRef();

  const handleAdd = () => {
    if (job === "") {
      alert("Not empty!!!");
      return;
    }
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>TODO APP</h3>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        placeholder="Enter your job..."
      />
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
