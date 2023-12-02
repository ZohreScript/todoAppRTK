import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../../featuers/todo/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(addTodo({ title: value }));
    dispatch(addAsyncTodos({ title: value }));
  };

  return (
    <form onSubmit={onSubmit} className="flex mt-10 container justify-center items-center">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="p-4 rounded-lg shadow-md "
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit"  class="m-2 flex items-center p-5 bg-pink-800 text-white rounded-full">
        {/* Submit */}
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </form>
  );
};

export default AddTodoForm;
