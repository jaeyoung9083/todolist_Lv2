import React from "react";
import { useSelector } from "react-redux";

const List = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <div>
      {todos.map((todo) => {
        <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

export default List;
