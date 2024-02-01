import { useContext } from "react";
import "./Header.css"
import { LangContext } from "../../providers/context/LangContext";


export const Header = () => {
  const {  lang } = useContext(LangContext);
  return (
    <header>
      <h1>{lang === "ru" ? "Список дел" : 'ToDo List'}</h1>
    </header>
  );
}
