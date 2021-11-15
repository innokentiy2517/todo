import React from "react";
import { useActions } from "../hooks/useActions";
import {checkPath} from "../assets/checkPath";
import {trashPath} from "../assets/trashPath";

interface TodoListItemPropsInterface {
  id: string;
  completed: boolean;
  text: string;
}

const TodoListItem: React.FC<TodoListItemPropsInterface> = ({
  id,
  completed,
  text,
}: TodoListItemPropsInterface) => {
  const { doneTodo, deleteTodo } = useActions();
  const onDoneChange = () => {
    doneTodo({ id, completed: !completed });
  };
  const onTrashClick = () => {
    deleteTodo(id);
  };
  return (
    <div
      className={`todo__list-item ${
        completed ? "todo__list-item--completed" : ""
      }`}
    >
      <div onClick={onDoneChange} className="todo__list-item-check ">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={checkPath}
            fill="black"
          />
        </svg>
      </div>
      <p>{text}</p>
      <div onClick={onTrashClick} className="todo__list-item-remove">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={trashPath}
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default TodoListItem;
