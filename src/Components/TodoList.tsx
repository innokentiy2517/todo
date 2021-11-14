import React from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { fetchTodos } = useActions();
  React.useEffect(() => {
    fetchTodos();
  }, []);
  const { data } = useTypedSelector((state) => state.todos);
  console.log(data);
  return (
    <div className="todo__list">
      {data?.map((todo) => (
        <TodoListItem
          id={todo.id}
          completed={todo.completed}
          text={todo.text}
        />
      ))}
      {/*<TodoListItem completed={true} text={"Разбить вёрстку по компонентам"} />*/}
      {/*<TodoListItem completed={false} text={"Реализовать функционал"} />*/}
      {/*<TodoListItem completed={true} text={"Сделать вёрстку"} />*/}
      {/*<TodoListItem completed={false} text={"Сделать стили"} />*/}
    </div>
  );
};

export default TodoList;
