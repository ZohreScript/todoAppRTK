import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from "react-redux";
import {
  deleteAsyncTodos,
  toggleCompleteAsync,
} from "../../featuers/todo/todoSlice";


const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className={`mt-10 bg-pink-300 p-4 rounded-lg shadow-md ${completed && "bg-pink-800 text-white"}`}>
      <div className="flex justify-between items-center">
        <span className="text-lg align-items-center">
          <input
            type="checkbox"
            className="mr-3 "
            checked={completed}
            onChange={(e) =>
              dispatch(
                toggleCompleteAsync({ id, title, completed: !completed })
              )
            }
          ></input>
          {title}
        </span>
        <button
         class="flex items-center p-2  bg-pink-800 text-white rounded-full"
          onClick={() => dispatch(deleteAsyncTodos({ id }))}
        >
          {/* Delete */}
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
