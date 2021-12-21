import React from "react";
import "./TodoItem.css";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/TodoSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        {...label}
        onChange={handleChange}
        defaultChecked
        color="primary"
      />
      {/* name */}
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
