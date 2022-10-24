import React from "react";
import fetchData from "../api/fetchData";

const resourceTodo = fetchData(
  "https://run.mocky.io/v3/8a33e687-bc2f-41ea-b23d-3bc2fb452ead"
);

const Todos = () => {
  const todos = resourceTodo.read();

  const renderTodo = todos.map((todo) => {
    const className = todo.status === "Completed" ? "todo-completed" : "todo";
    // console.log(todo);
    return (
      <li className={`todo ${className}`}>
        {todo.title}
      </li>
    );
  });
  return(
    <span>
        <h3>TODOS</h3>
        <ol className="todos">{renderTodo}</ol>
    </span>
  )
};
export default Todos;
