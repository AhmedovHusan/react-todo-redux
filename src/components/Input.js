import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/TodoSlice";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding ${input}`);

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="input">
      <input
        className="input__text"
        type="text"
        value={input}
        onChange={(z) => setInput(z.target.value)}
      />
      <button className="input__button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default Input;
