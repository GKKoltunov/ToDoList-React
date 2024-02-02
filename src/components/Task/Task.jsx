import React, { useContext, useState } from 'react'
import { Button } from '../Button/Button';
import { TaskContext } from '../../providers/context/TaskContext';


export const Task = ({ text, isCompleted, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text);

  const {
    add,
    addTask,
    deleteTask,
    deleteAll,
    checked,
    deleteCheck,
    inputValue,
    todos,
    li,
  } = useContext(TaskContext);

  function changeTask() {
    //реакция на карандаш
    setIsEdit(!isEdit);
  }

  function saveTask() {
    // реакция на кнопку сохранить
    setEdit(edit);
    setIsEdit(edit);
    console.log(todos);
    let json = JSON.stringify(todos);
    window.localStorage.setItem("todo", json);
  }

  function changeText(ev) {
    //реакция на ввод нового значения
    setValue(ev.target.value);
    todos.map((el) => {
      if (el.text === value) {
        return (el.text = ev.target.value);
      }
    });
  }

  return (
    <li className="elem">
      <input
        onChange={() => checked(id)}
        checked={isCompleted}
        className="checkbox"
        type="checkbox"
        name=""
        id=""
      />
      {isEdit == false ? (
        <p className="task">{value}</p>
      ) : (
        <input
          onChange={changeText}
          className="change-text"
          type="text"
          value={value}
          // defaultValue={text}
        ></input>
      )}
      {isEdit == false ? (
        <Button onClick={changeTask} className={"change"}>
          ✏️
        </Button>
      ) : (
        <Button onClick={saveTask} className={"save"}>
          ✅
        </Button>
      )}
      <Button onClick={() => deleteTask(id)} className={"cross"}>
        ❌
      </Button>
    </li>
  );
};
