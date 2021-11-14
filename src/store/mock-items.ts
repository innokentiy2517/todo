import { v4 as uuid } from "uuid";
interface todoListInterface {
  id: string;
  text: string;
  completed: boolean;
}

export const todoList: todoListInterface[] = [
  {
    id: uuid(),
    text: "Разбить вёрстку по компонентам",
    completed: true,
  },
  {
    id: uuid(),
    text: "Реализовать функционал добавления и удаления",
    completed: false,
  },
  { id: uuid(), text: "Сделать вёрстку", completed: true },
  { id: uuid(), text: "Сделать стили", completed: false },
  { id: uuid(), text: "Реализовать функционал выполнения", completed: false },
];
