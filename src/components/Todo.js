import React from "react";
import "./Todo.css";

const Todo = ({ text, todos, todo, setTodos }) => {
  const deleteBtn = () => {
    console.log("jdjdjda");
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeBtn = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo__item ${todo.completed ? "grey" : ""}`}> {text} </li>
      <button className="complete_btn" onClick={completeBtn}>
        C
      </button>
      <button className="trash_btn" onClick={deleteBtn}>
        D
      </button>
    </div>
  );
};

export default Todo;
