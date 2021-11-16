import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { v4 as uuid } from "uuid";
import { plusPath } from "../assets/plusPath";

const TodoAddField = () => {
  const { addTodo } = useActions();
  const onAddClick = () => {
    if (text !== "") {
      addTodo({ id: uuid(), text: text, completed: false });
      setText("");
    }
  };
  const [text, setText] = useState("");
  return (
    <div className="todo__add-field">
      <input
        onChange={(event) => setText(event.target.value)}
        type="text"
        placeholder="Введите задачу..."
        value={text}
      />
      <button className="todo__add-field-button" onClick={onAddClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={plusPath} fill="black" />
        </svg>
      </button>
    </div>
  );
};

export default TodoAddField;
