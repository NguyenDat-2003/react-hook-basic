//sử dụng useReducer thay cho state

import { useReducer, useRef } from "react";

//1. Init state
const initState = {
  job: "",
  jobs: [],
};

//2.Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

//3.Reducer
const reducer = (state, action) => {
  // console.log("action>>", action);
  // console.log("Prev statre>>", state);

  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);

      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("Invalid !!");
  }
};

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
