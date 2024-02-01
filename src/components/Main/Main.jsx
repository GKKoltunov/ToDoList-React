import { LangContext } from "../../providers/context/LangContext";
import { Button } from "../Button/Button"
import { Task } from "../Task/Task"
import "./Main.css"

import React, { useContext } from 'react'

export const Main = ({
  inputValue,
  add,
  addTask,
  todos,
  deleteAll,
  noCheck,
  deleteTask,
  checked,
  changeTask,
  setTodos,
}) => {

  const { toggleLang, lang } = useContext(LangContext)
  
  return (
    <main>
      <div className="container">
        <form action="#">
          <input
            onChange={add}
            value={inputValue}
            className="input"
            type="text"
            placeholder={lang==="ru"?"Введите название ":"Input name"}
          />
          <Button onClick={addTask} className={"add"}>
            {lang === "ru" ? "Добавить" : "Add"}
          </Button>
        </form>

        <div className={todos.length === 0 ? "hidden" : "block"}>
          <span></span>
          <div className="list">
            <ul className="ul">
              {todos.map(
                //создаем лишку
                (el) => {
                  return (
                    <Task
                      text={el.text}
                      key={el.id}
                      id={el.id}
                      isCompleted={el.isCompleted}
                      deleteTask={deleteTask}
                      checked={checked}
                      changeTask={changeTask}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  );
                }
              )}
            </ul>
          </div>
          <div className="delete">
            <Button onClick={noCheck} className={"delete-cmpl"}>
             {lang==="ru"? 'Удалить завершенные': "Delete checked"} 
            </Button>
            <Button onClick={toggleLang} className="lang">
              {lang === "ru" ? "Русский" : "English"}
            </Button>
            <Button onClick={deleteAll} className={"delete-all"}>
             {lang==="ru" ? "Удалить все": "Delete all"} 
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
