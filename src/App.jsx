import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Task } from "./components/Task/Task";
import { Button } from "./components/Button/Button";
  
function App() {

const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
   setTodos(JSON.parse(localStorage.getItem('todo'))||[])
  },[])

  useEffect(()=>{
    let json = JSON.stringify(todos);
    window.localStorage.setItem("todo", json);
  },[todos])

  
 console.log(todos);
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

  function checked(id) {  //реакция на чекбокс
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

  function deleteCheck(id) { //удаление выполненых задач
    const noCheck = todos.filter((el) => el.isCompleted !== true);
    setTodos(noCheck);
  }
  


  
  return (
    <>
      <Header />
      <Main
        checked={checked}
        addTask={addTask}
        inputValue={inputValue}
        add={add}
        deleteTask={deleteTask}
        todos={todos}
        deleteAll={deleteAll}
        noCheck={deleteCheck}
        setTodos={setTodos}
      />
    </>
  );
  }

export default App;