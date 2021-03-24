import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todos.map((todo) => {
          return (
            <Todo
              setTodos={setTodos}
              todo={todo}
              text={todo.text}
              key={todo.id}
              todos={todos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
