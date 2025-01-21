import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { CreateTask } from "./api";
import { notify } from "./utils";
const TaskManager = () => {
  const [input, setInput] = useState("");
  const handleInputValue = async () => {
    const obj = {
      taskName: input,
      idDone: false,
    };
    try {
      const { success, message } = await CreateTask(obj);
      if (success) {
        notify(message, "success");
      } else {
        notify(message, "error");
      }
      
    } catch (err) {
      console.log(err);
      notify( "failed to create error", "error");
    }
  };

  return (
    <div className="d-flex w-50 m-auto flex-column mt-5 align-items-center">
      <h1 className="mb-4">Task Manager</h1>
      {/* input and search items */}
      <div className="d-flex justify-content-between align-items-center mb-4 w-100">
        <div className="input-group flex-grow-1 me-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a New Task"
            className="form-control me-1"
          />

          <button
            onClick={handleInputValue}
            className="btn btn-success btn-sm me-2"
          >
            <FiPlus className="me-2" />
          </button>
        </div>
        <div className="input-group flex-grow-1">
          <span className="input-group-text">
            <RiSearchLine />
          </span>
          <input
            type="text"
            placeholder="Search Task"
            className="form-control"
          />
        </div>
      </div>
      {/* list of items */}
      <div className="d-flex flex-column w-100">
        <div className="m-2 p-2 border bg-light rounded-3 d-flex justify-content-between align-items-center">
          <span className="text-decoration-line-through">first todo task</span>
          <div>
            <button className="btn btn-success btn-sm me-2">
              <IoCheckboxOutline />
            </button>{" "}
            <button className="btn btn-primary btn-sm me-2">
              <FaPen />
            </button>{" "}
            <button className="btn btn-danger btn-sm me-2">
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      </div>

      {/* toastify */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default TaskManager;
