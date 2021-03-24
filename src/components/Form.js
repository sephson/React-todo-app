import React from "react";
import "./Form.css";

const Form = ({ setInputText, setTodos, inputText, todos }) => {
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  const clickHandler = () => {
    console.log("twist");

    setInputText("");
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 100),
      },
    ]);
  };

  return (
    <div className="input__form">
      <input
        value={inputText}
        onChange={changeHandler}
        className="input__todo"
        type="text"
        placeholder="Input todo"
      ></input>
      <button onClick={clickHandler} className="add_btn">
        +
      </button>
    </div>
  );
};

export default Form;
