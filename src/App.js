import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState(""); // the useState is used here so it will be assessible everywhere
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
