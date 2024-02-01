import { Button } from "../Button/Button"
import { Task } from "../Task/Task"
import "./Main.css"

import React from 'react'

export const Main = ({
  inputValue,
  add,
  addTask,
  li,
  todos,
  deleteAll,
  noCheck,
  deleteTask,
  checked,
  changeTask,
  setTodos,
}) => {
  return (
    <main>
      <div className="container">
        <form action="#">
          <input
            onChange={add}
            value={inputValue}
            className="input"
            type="text"
            placeholder="Введите название "
          />
          <Button onClick={addTask} className={"add"}>
            Добавить
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
              Удалить завершенные
            </Button>
            <Button onClick={deleteAll} className={"delete-all"}>
              Удалить все
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
