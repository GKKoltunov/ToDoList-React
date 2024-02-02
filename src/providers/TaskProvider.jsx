import { useEffect, useState } from "react";
import { TaskContext } from "./context/TaskContext";
import React from "react";
import {Task} from "../components/Task/Task"

const start = JSON.parse(localStorage.getItem("todo")) ?? [];
export const TaskProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState(start);

  useEffect(() => {
    let json = JSON.stringify(todos);
    window.localStorage.setItem("todo", json);
  }, [todos]);

  function add(ev) {
    setInputValue(ev.target.value);
  }

  let addTask = () => {
    //заполняем массив
    event.preventDefault();
    if (inputValue.trim().length) {
      setTodos([
        ...todos,
        {
          text: inputValue,
          id: Date.now(),
          isCompleted: false,
        },
      ]);
      setInputValue("");
    }
  };

  let li = todos.map(
    //создаем лишку
    (el) => {
      return (
        <Task
          text={el.text}
          key={el.id}
          id={el.id}
          isCompleted={el.isCompleted}
        />
      );
    }
  );

  function deleteTask(id) {
    //удаляем задачу
    const newtodos = todos.filter((el) => el.id !== id);
    setTodos(newtodos);
  }

  function deleteAll() {
    //удаляем все задачи
    const deleted = [];
    setTodos(deleted);
  }

  function checked(id) {
    //реакция на чекбокс
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          return { ...el, isCompleted: !el.isCompleted };
        } else {
          return el;
        }
      })
    );
  }

  function deleteCheck(id) {
    //удаление выполненых задач
    const noCheck = todos.filter((el) => el.isCompleted !== true);
    setTodos(noCheck);
  }

  return (
    <TaskContext.Provider
      value={{
        add,
        addTask,
        deleteTask,
        deleteAll,
        checked,
        deleteCheck,
        inputValue,
        todos,
        li,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
