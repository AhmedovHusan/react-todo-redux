import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // first initialState is initial case of input which would be empty
  todoList: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = TodoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default TodoSlice.reducer;

// state.todoList.push(action.payload)  [ this looks like 👇 ]
// const [todoList, setTodoList] = useState([])

// (state, action)
// state ==> todoList which is initial value
// action ==> setTodoList which to update
