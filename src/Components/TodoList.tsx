import React from "react";
import TodoListItem from "./TodoListItem";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { fetchTodos } = useActions();
  React.useEffect(() => {
    fetchTodos();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data } = useTypedSelector((state) => state.todos);
  return (
    <div className="todo__list">
      {data?.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          text={todo.text}
        />
      ))}
    </div>
  );
};

export default TodoList;
