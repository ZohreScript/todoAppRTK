import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../../featuers/todo/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  return loading ? (
    <h2 className="flex container justify-center items-center">Loading</h2>
  ) : error ? (
    <h2 className="flex container justify-center items-center">{error}</h2>
  ) : (
    <div className="gride container justify-center items-center">
      <h2 className="mt-5 text-xl text-center font-bold text-pink-800">TodoList</h2>
      <ul className="grid grid-cols-2 gap-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
