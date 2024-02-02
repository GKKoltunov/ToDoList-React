import { LangContext } from "../../providers/context/LangContext";
import { TaskContext } from "../../providers/context/TaskContext";
import { Button } from "../Button/Button"
import "./Main.css"

import React, { useContext } from 'react'

export const Main = () => {
  const { toggleLang, lang } = useContext(LangContext);
  const {
    add,
    addTask,
    deleteTask,
    deleteAll,
    checked,
    deleteCheck,
    inputValue,
    todos,li
  } = useContext(TaskContext);

  return (
    <main>
      <div className="container">
        <form action="#">
          <input
            onChange={add}
            value={inputValue}
            className="input"
            type="text"
            placeholder={lang === "ru" ? "Введите название " : "Input name"}
          />
          <Button onClick={addTask} className={"add"}>
            {lang === "ru" ? "Добавить" : "Add"}
          </Button>
        </form>

        <div className={todos.length === 0 ? "hidden" : "block"}>
          <span></span>
          <div className="list">
            <ul className="ul">
              {li}
            </ul>
          </div>
          <div className="delete">
            <Button onClick={deleteCheck} className={"delete-cmpl"}>
              {lang === "ru" ? "Удалить завершенные" : "Delete checked"}
            </Button>
            <Button onClick={toggleLang} className="lang">
              {lang === "ru" ? "Русский" : "English"}
            </Button>
            <Button onClick={deleteAll} className={"delete-all"}>
              {lang === "ru" ? "Удалить все" : "Delete all"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
